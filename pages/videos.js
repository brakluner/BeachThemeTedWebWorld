import Layout from "../components/layout";

export default () => (
    <Layout title="Videos">
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