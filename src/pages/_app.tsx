import '../style/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   createScript()
  // }, [])
  // const createScript = () => {
  //   var a = document.createElement("script");
  //   a.type = "text/javascript";
  //   a.async = !0;
  //   a.src = "https://cdn.storepoint.co/api/v1/js/163d501120d560.js";
  //   var b: any = document.getElementsByTagName("script")[0];
  //   b.parentNode.insertBefore(a, b);
  // }
  return <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <script type="text/javascript" async={true} src="https://cdn.storepoint.co/api/v1/js/163d501120d560.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F5F5F5" />
      {/* <meta name="description" content="Web site created using create-react-app" /> */}
      <title>Electric Bikes</title>
    </Head>
    <Component {...pageProps} />
  </div>
}
