import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" />
          <link rel="apple-touch-icon" sizes="180x180" href="/go/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/go/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/go/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/go/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/go/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#d9fbf4"></meta>
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