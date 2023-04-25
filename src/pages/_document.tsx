import { getAssetPath } from '@/lib/env'
import { bg_custom_ffxiv } from '@/styles/bg-custom-ffxiv'
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel='preload' href={`${getAssetPath()}img/tiny/ffxiv.webp`} as='image' />
        <link rel="icon" type="image/png" href={`${getAssetPath()}favicon.ico`}/>
      </Head>
      <body className='text-white font-body' style={bg_custom_ffxiv}>
        <div id='globalLoader' style={bg_custom_ffxiv}>
          <h1 className="font-bold text-xl">LOADING . . .</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
