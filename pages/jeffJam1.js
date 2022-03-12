import AudioPlayer from 'react-h5-audio-player';

export default () => (
    <div title="music">
        <br/>
        <br/>
                <p>May take a moment for files to load.</p>
        <br/>
                <p>Original music by Ted Web</p>
                <div>Jeff Jams with Ted</div>
        <AudioPlayer className="PLAYER" controls src="/static/EyeofHorusCremetorium.wav"></AudioPlayer>
        <AudioPlayer className="PLAYER" controls src="/static/EyeofHorusCremetorium1.wav"></AudioPlayer>


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