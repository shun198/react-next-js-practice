import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <body id="app">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
