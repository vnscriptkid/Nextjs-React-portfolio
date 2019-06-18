import Layout from '../components/Layout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import {withRouter} from 'next/router'

const Post = ({ post }) => (
    <Layout>
        <Head>
            <meta name="description" meta={post.title}/>
            <title>A Post</title>
        </Head>
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    </Layout>
) 

Post.getInitialProps = async (context) => {
    const {id} = context.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return { post, statusCode: res.status }
} 

export default withRouter(Post);