import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import axios from 'axios'
import Featured from 'src/components/Featured'
import PizzaList from 'src/components/PizzaList.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {

  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='Best pizza place in Nairobi'></meta>
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </>
  )
};

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');
  console.log(res)
  console.log('This is what I am fetching with axios')
  return {
    props: {
      pizzaList: res.data
    },
  };
};
