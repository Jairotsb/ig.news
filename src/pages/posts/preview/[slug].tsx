import { GetStaticPaths, GetStaticProps } from "next";
//import { getSession } from "next-auth/react";
import { getPrismicClient } from "../../../services/prismic";
import { RichText } from 'prismic-dom';
import Head from "next/head";
import styles from '../post.module.scss';
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

export default function PostPreview({ post }: PostPreviewProps) {

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.activeSubscription) {
            router.push(`/posts/${post.slug}`);
        }

    }, [session]);

    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>
            </Head>


            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div className={`${styles.postContent} ${styles.previewContent}`} dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className={styles.continueReading}>
                        Wanna Continue Reading?
                        <Link href="/">
                            <a>Subscribe now 🤗</a>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
        // true: se alguém tentar acesar um post que não foi gerado estático, vai carregar pelo client-side. 
        // false: se o post não foi gerado de forma estática ainda irá retornar um 404 e pronto. 
        // or blocking: um funcionamento parecido com o true mas se não for gerado estático ele irá tentar carregar o conteúdo novo porém carregar na camada do ServerSideRendering (camada do next)
    }

}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params;


    const prismic = getPrismicClient()

    const response = await prismic.getByUID<any>('publication', String(slug), {});

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    };

    return {
        props: {
            post,
        },

        redirect: 60 * 30 // 30 minutes
    }
}