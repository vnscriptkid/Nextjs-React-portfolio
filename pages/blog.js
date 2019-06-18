import Layout from '../components/Layout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Blog = ({ posts = [] }) => (
    <Layout>
        <Head>
            <meta name="description" content="This is blog page"/>
            <title>Blog Page</title>
        </Head>
        <ul>
            {posts.map(({ title, body, id }) => (
                <li key={id}>
                    <Link href={`/post?id=${id}`}>
                        <a>
                            {title}
                        </a>
                    </Link>
                    <p>{body}</p>
                </li>
            ))} 
        </ul>
    </Layout>
) 

Blog.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return { posts, statusCode: res.status }
}

export default Blog;