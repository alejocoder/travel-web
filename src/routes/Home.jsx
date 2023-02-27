import React from 'react'
import { Destination } from '../components/Destination'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Trip } from '../components/Trip'

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero 
        cName = 'hero'
        heroImg = 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        title = 'Your Jouney Begins Now'
        text = 'Travel Stress Free'
        btnText = 'Travel Plan'
        btnClass = 'show'
        Url = '/'
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}
