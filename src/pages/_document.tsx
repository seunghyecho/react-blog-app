/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // https://merrily-code.tistory.com/154
      <Html>
        <Head>
          <title>SH Blog</title>
          <meta charSet="utf-8"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
