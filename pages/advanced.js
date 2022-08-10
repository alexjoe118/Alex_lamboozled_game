import Head from 'next/head'
import Advanced from '../components/Advanced/Advanced'

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen">
      <Head>
        <title>Lamboozled Game</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/site_icon.png" />
      </Head>
      <Advanced />
    </div>
  )
}