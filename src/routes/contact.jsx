import React from 'react'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = 'hero-mid'
        heroImg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
        title = 'Contact'
      />
      <ContactForm/>
      <Footer/>
      </>
    )
}
