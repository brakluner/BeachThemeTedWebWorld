import Document, { Head, Main, NextScript } from 'next/document';
// import $ from "jquery";

export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>

                  
                    
                <link rel="stylesheet" 
                 href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
                 <meta name="description" content="A site for my programming portfolio" />
                 <meta name="robots" content="noindex, nofollow" />
                 <meta name="viewport" content="width=device-width" />
                 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
                 <audio className="boombox" src="/static/YetiWave.wav" autoPlay loop></audio>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <script>
                        {$('.boombox').ready('play', function (e) {
                            var audios = document.getElementsByTagName('audio');
                            for (var i = 0, len = audios.length; i < len; i++) {
                                if (audios[i] === e.target) {
                                    audios[i].play();
                                }
                            }
                        }, true)
                        };
</script> */}
                </body>
        <style jsx>{`
        body {
            font-family: 'Fredoka One', cursive;
            background: #fff2bc;
        }
        html, body {
            max-width: 100%;
            overflow-x: hidden;
        }
        `}</style>
            </html>
        )
    }

}