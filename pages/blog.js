import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
    <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
                    <a>
                        {title}
                    </a>
    </Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <br />
        <br />
        <ul>
            <li>
                <PostLink slug="Blog-A" title="Blog A"/>
                <PostLink slug="Blog-B" title="Blog B"/>
                <PostLink slug="Blog-C" title="Blog C"/>
            </li>
        </ul>
    </Layout>
)