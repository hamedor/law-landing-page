import * as React from "react"
import { withPrefix } from 'gatsby';

import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Advantages from "../components/Advantages"
import BlueBlock from "../components/BlueBlock";
import Footer from "../components/Footer";

import '../styles/global.css'


const IndexPage = () => {
  return (
    <div className="background__image" style={{backgroundImage: `url(${withPrefix('/images/background/justice.jpg')})`}}> 
    
      <div className="wrapper">
        <header>
          <Navigation/>
        </header>
        <main>
          <Hero/>
          <Advantages/>
          <BlueBlock/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
