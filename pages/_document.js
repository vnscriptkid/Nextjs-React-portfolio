// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
 
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8"/>
          <link rel="stylesheet" href="/static/css/lib/nprogress.css" key="index" />
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </Head> 
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;