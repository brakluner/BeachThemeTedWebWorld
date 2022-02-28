import AudioPlayer from 'react-h5-audio-player';

export default () => (
    <div title="music">
        <br/>
        <br/>
                <p>May take a moment for files to load. I'm using free hosting</p>
        <br/>
                <p>Original music by Ted Web</p>
                <div>Jeff Jams with Ted</div>
        <AudioPlayer className="PLAYER" controls src="/static/jeffJam1.wav"></AudioPlayer>
        <AudioPlayer className="PLAYER" controls src="/static/jeffJam2.wav"></AudioPlayer>


<style jsx>{`
video {
    padding: 50px 25px 50px 25px;
    width: 1000px;
}
AudioPlayer {
    $rhap_theme-color: #868686;
}
`}</style>
    </div>
)