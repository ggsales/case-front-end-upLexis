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
      <meta charset="utf-8" />
      <meta name="language" content="pt-BR" />
      <title>Case Front-end upLexis</title>

    </Head>

     <Component {...pageProps} />
    </>
   
    )
}

export default MyApp
