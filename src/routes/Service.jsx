import React from 'react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Trip } from '../components/Trip'

export const Service = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = 'hero-mid'
        heroImg = 'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
        title = 'Services'
      />
      <Trip
        
      />
      <Footer/>
      </>
    )
}
