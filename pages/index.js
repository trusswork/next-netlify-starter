import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from '../Components/Dropdown'
import Header from '../Components/Header'
import Herosection from '../Components/Herosection'
import Footer from '../Components/Footer'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log("i Resized")
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div className="" >
      <Head>
        <title>TIZIKI</title>
        <meta name="description" content="Made by Kenyans for Everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header toggle={toggle} />
        <Dropdown toggle={toggle} isOpen={isOpen} />
        <Herosection />
        <Footer />
      </main>



    </div>
  )
}
