import Layout from '../components/Layout';
import { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const info = await res.json();
        console.log('getInitialProps called');
        return { info, statusCode: res.status }
    }

    // state = {
    //     info: null
    // }

    // async componentDidMount() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    //     const info = await res.json();
    //     console.log('componentDidMount called');
    //     this.setState({ info })
    // }
    
    render() {
        const {statusCode} = this.props;
        if (statusCode !== 200) return <Error statusCode={statusCode}/> 
        const {name} = this.props.info || {};
        return (
            <Layout>
                <Head>
                    <meta name="description" content="This is the about page"/>
                    <title>About Page</title>
                </Head>
                <div>
                    <h1>@{name || "Name loading ..."}</h1>
                    <h2>I'm an Next JS developer</h2>
                    <p>It is a beautiful framework that I fall in love with</p>
                    <p>Here it is</p>
                    <img src="/static/img/Nextjs.png"/>
                    <style jsx>{`
                        div {
                            text-align: center;
                        }
                    `}</style>
                </div>
            </Layout>
        )
    }
}