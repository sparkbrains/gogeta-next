import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppContext from '<prefix>/context/appContext';
import '../style/main.scss'
import { useEffect, useState } from 'react';
import LoaderBox from "<prefix>/component/boxLoader";

export default function App({ Component, pageProps }: any) {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => { setisLoading(false) }, 1000);
  })
  return <AppContext>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F5F5F5" />
      <title>Electric Bikes</title>
    </Head>
    {
      isLoading ?
        <LoaderBox />
        : <Component {...pageProps} />
    }
    
  </AppContext>
}