import Layout from "../components/layout";

export default () => (
    <Layout title="Videos">
        <br/>
        <br/>
        <p>May take a moment for files to load. I'm using free hosting</p>
        <video src="/static/hookah10001-0120.mkv" autoPlay loop></video>
        <video src="/static/photonVampire0001-0238.mkv" autoPlay loop></video>
        <video src="/static/hairyspidez0001-0120.mkv" autoPlay loop></video>
        <video src="/static/AAH120001-0120.mkv" autoPlay loop></video>

<style jsx>{`
video {
    padding: 50px 25px 50px 25px;
    width: 1000px;
}
`}</style>
    </Layout>
)