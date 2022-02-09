import Head from 'next/head'
import CardsArea from '../components/Elements/Cards/CardsArea'
import CarrouselHome from '../components/Elements/Carrousel/CarrouselHome'


export default function Home() {
  return (
    <>
      <CarrouselHome/>
      <CardsArea/>
    </>
  )
}
