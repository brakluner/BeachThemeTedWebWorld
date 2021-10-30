import Layout from "../components/layout";
import AudioPlayer from 'react-h5-audio-player';

export default () => (
    <Layout title="music">
        <AudioPlayer controls src="/static/pandemonium.wav"></AudioPlayer>
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
`}</style>
    </Layout>
)