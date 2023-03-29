import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
      </Head>
      <body className="bg-blue-50  text-black dark:bg-gray-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
