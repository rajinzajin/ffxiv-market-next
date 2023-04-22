import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress />
    <div
      id="logo-sidebar"
      className="fixed top-0 left-0 w-[25rem] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div id="sidebar" className="h-full px-6 py-9 overflow-y-auto">
        <Link href="/" className="mb-5 mt-3 w-full">
          <div className="flex relative items-center w-full h-[9rem]">
            <div
              className="w-full text-center text-4xl font-[900] font-market dark:text-white"
            >
              XIV Market+
            </div>
          </div>
        </Link>
        <div className="ml-2 mt-9 grid grid-cols-2 gap-3">
          {/* <DataCenterSelector on_select_dc={onSelectDC} /> */}
          {/* <WorldSelector on_select_world={onSelectWorld} /> */}
        </div>
        <ul className="space-y-2 text-gray-400 font-body font-semibold text-lg mt-5">
          <li>
            <Link
              href="/"
              className="{activeUrl === '/' &&
						'bg-item text-white'} flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-item"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                /></svg>
              <span className="ml-5">Market</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="sm:ml-[25rem] px-6 py-8 bg-custom-ffxiv min-h-[100vh]">

      <Component {...pageProps} />
      <div className="grid grid-cols-8 mt-[4rem] gap-y-9 text-gray-300 font-[400]">
        <div
          className="text-center 2xl:text-left col-span-12 2xl:col-span-5 font-body text-md border-gray-500 2xl:border-r"
        >
          Created by <a className="text-white" href="https://github.com/rajinzajin" target="_blank">RajinZajin</a>
          <br />XIV Market+ is not affiliated with SQUARE ENIX.
          <br />
          <br />© 2010 - 2023 SQUARE ENIX CO., LTD. All Rights Reserved.
          <br />FINAL FANTASY, FINAL FANTASY XIV, FFXIV are registered trademarks or
          trademarks of Square Enix Holdings Co., Ltd.
          <br />Game content and materials are registered trademarks or trademarks
          of Square Enix Co., Ltd.
        </div>

        <div
          className="col-span-12 2xl:col-span-1 border-gray-500 2xl:border-r flex items-center justify-center"
        >
          <div>
            <div className="flex items-center justify-center mb-5">
              <a
                className="font-body hover:text-white"
                href="https://github.com/rajinzajin/ffxiv-market-plus"
                target="_blank"
              >
                <div className="flex items-center">
                  <i className="fa fa-github text-3xl mr-3" />Github
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <a className="font-body hover:text-white" href="/privacy-policy"
              >Privacy Policy</a
              >
            </div>

            <div className="flex justify-center mt-2">
              <a
                target="_blank"
                className="font-body hover:text-white"
                href="https://github.com/rajinzajin/ffxiv-market-plus/blob/main/LICENSE"
              >MIT License</a
              >
            </div>
          </div>
        </div>
        <div
          className="col-span-12 2xl:col-span-1 text-lg flex items-center justify-center"
        >
          <div>
            <div>Powered by</div>
            <a
              href="https://universalis.app/"
              className="hover:text-white font-bold"
              target="_blank">Universalis</a
            >
          </div>
        </div>
      </div>
    </div>
  </>
}
