import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import axios from 'axios'
import Featured from 'src/components/Featured'
import PizzaList from 'src/components/PizzaList.js'
import { useState } from 'react'
import AddButton from 'src/components/AddButton'
import Add from 'src/components/Add'
//import './envConfig.ts'


const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList,admin}) {

  const [close, setClose]=useState(true)

  return (
    <>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='Best pizza place in Nairobi'></meta>
      </Head>
      <Featured/>
      {admin && (
        <AddButton setClose={setClose}/>
      )}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </>
  )
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin =false;

  console.log(myCookie.token, process.env.NEXT_PUBLIC_TOKEN, ' PAGES INDEX ENV LOADS????')

  if(myCookie.token === process.env.NEXT_PUBLIC_TOKEN){
    admin = true
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}api/products`);
  return {
    props: {
      pizzaList: res.data,
      admin 
    },
  };
};
