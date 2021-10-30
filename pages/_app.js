import App, { Container } from "next/app";
import Head from "next/head";
import 'react-h5-audio-player/lib/styles.css';

class MyApp extends App {

    render() {

        return(
            <Container>
                <Head>
                    <title>Ted Web World</title>
                </Head>
            </Container>
        )
    }
}