import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Auth from './Auth/Auth';
import {useState} from 'react';

export default function Home() {
 const auth = useState(true)

 
  return (
  
    <div  >
      <Head className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
        <title>insta App</title>
        <Header/>
       <Feed />
       
      </Head>
    </div>    

  )
 
}
