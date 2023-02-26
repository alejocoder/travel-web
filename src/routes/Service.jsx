import React from 'react'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

export const Service = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = 'hero-mid'
        heroImg = 'https://images.unsplash.com/photo-1464254786740-b97e5420c299?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        title = 'Services'
      />
      </>
    )
}
