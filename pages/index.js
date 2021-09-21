import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      {/* RESULTS */}
    </div>
  )
}
