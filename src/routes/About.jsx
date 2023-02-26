import React from 'react'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

export const About = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = 'hero-mid'
        heroImg = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
        title = 'About'
      />
    </>
    )
}
