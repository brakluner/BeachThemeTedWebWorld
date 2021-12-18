import Layout from "../components/layout";
import AudioPlayer from 'react-h5-audio-player';

export default () => (
    <Layout title="music">
        <br/>
        <br/>
                <p>May take a moment for files to load. I'm using free hosting</p>
        <br/>
                <p>Original music by Ted Web</p>
        <AudioPlayer className="PLAYER" controls src="/static/pandemonium.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/Surge1.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/Iwasawindow.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/Giant.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/doom76.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/BrainSodaPosting026.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/BrainSodaPosting027.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/BrainSodaPosting049.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/BrainSodaPosting007.wav"></AudioPlayer>
        <AudioPlayer controls src="/static/Whywontpeopleleavemealone.wav"></AudioPlayer>


<style jsx>{`
video {
    padding: 50px 25px 50px 25px;
    width: 1000px;
}
AudioPlayer {
    $rhap_theme-color: #868686;
}
`}</style>
    </Layout>
)