import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SlideNavbar from "../components/SlideNavbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </Head>

      <SlideNavbar />
      <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    </div>

  )
}
