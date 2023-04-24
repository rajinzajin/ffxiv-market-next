import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel='preload' href='/img/tiny/ffxiv.webp' as='image' />
      </Head>
      <body className='text-white font-body bg-custom-ffxiv'>
        <div id='globalLoader'>
          <h1 className="font-bold text-xl">LOADING . . .</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
