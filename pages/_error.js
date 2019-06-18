import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout>
        {!statusCode ? (
            <h1>Page not found</h1>
        ) : (
            <h1>Oooops! Something wrong happened (Code: {statusCode})</h1>
        )}
        <style jsx>{`
            h1 {
                font-size: 3rem;
                color: red;
                text-align: center;
            }
        `}</style>
    </Layout>
)