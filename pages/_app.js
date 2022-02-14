import '../public/css/fontAwesome5Pro.css'
import '../public/css/elegantFont.css'
import '../public/css/style.css'
import '../public/css/animate.min.css'
import '../public/css/default.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');
      }  
    new WOW.WOW().init();
  });



  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="pt-BR" />
      <title>Case Front-end upLexis</title>
      <link rel="icon" type="imagem/ico" href="/img/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Open+Sans:wght@300&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"/>


    </Head>

     <Component {...pageProps} />
    </>
   
    )
}

export default MyApp
