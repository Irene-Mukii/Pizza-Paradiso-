import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Featured from 'src/components/Featured'
import PizzaList from 'src/components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='Best pizza place in Nairobi'></meta>
      </Head>
      <Featured/>
      <PizzaList/>
    </>
  )
}
