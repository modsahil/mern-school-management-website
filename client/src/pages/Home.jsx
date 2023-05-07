import React from 'react'
import Hero from "../components/hero/Hero"
import Impcard from "../components/impcard/Impcard"
import Principal from "../components/principal/Principal"
import Notice from "../components/events/Notice"
import Gallery from "../components/gallery/Gallery"
import Teacher from "../components/teacher/Teacher"
import Layout from '../components/layout/Layout'


const Home = () => {
  return (
    <Layout>
    <Hero />
    <Impcard />
    <Principal />
    {/* <Notice /> */}
    <Gallery />
    <Teacher />
    </Layout>
    
    
  )
}

export default Home