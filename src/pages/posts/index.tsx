import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}> 
                <div className={styles.posts}>
                    <a>
                        <time>16 de fevereiro de 2022</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet  é uma biblioteca JavaScript open-source para trabalhar com Mapas em  aplicações web e mobile. Pode ser simplesmente integrada a um site  usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.</p>
                    </a>
                    <a>
                        <time>16 de fevereiro de 2022</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet  é uma biblioteca JavaScript open-source para trabalhar com Mapas em  aplicações web e mobile. Pode ser simplesmente integrada a um site  usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.</p>
                    </a>
                    <a>
                        <time>16 de fevereiro de 2022</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet  é uma biblioteca JavaScript open-source para trabalhar com Mapas em  aplicações web e mobile. Pode ser simplesmente integrada a um site  usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.</p>
                    </a>

                </div>
            </main>

        </>

    );

}