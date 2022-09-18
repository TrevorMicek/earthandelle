import React, { useState, useEffect } from "react"
import { Router, useMatch } from "@reach/router"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Policies from '../components/tailwindComps/Policies'

import back from '../images/blog/back.jpg'
import lady from '../images/blog/lady.jpg'
import lookingDown from '../images/blog/lookingDown.jpg'
import workout from '../images/blog/workout.jpg'
import hair from '../images/blog/hair.jpg'
const IndexPage = () => {


  /*
  const [eventPage, setEventPage] = useState('Basics')

  const SwitchEventPage = () => {
      switch(eventPage) {
          case 'SEO':
              return <>
               <MainSectionTitle {...CategoryData.two} />
              <Events year='SEO' page={eventPage} changeYear={setEventPage} />
              </>
          case 'Web Design & Development':
              return <>
               <MainSectionTitle {...CategoryData.three} />
               <Events year='Web Design & Development' page={eventPage} changeYear={setEventPage} />
               </>
          case 'Ecommerce':
              return <>
               <MainSectionTitle {...CategoryData.four} />
              <Events year='Ecommerce' page={eventPage} changeYear={setEventPage} />
              </>
          default:
              return <>
               <MainSectionTitle {...CategoryData.one} />
              <Events year='Basics' page={eventPage} changeYear={setEventPage} />
              <CreateComponent component={'div'} data={basics} />
              </>
      }
  }*/

  return (
  <Layout title="Policies" text="Learn About Web Design, SEO, Ecommerce & More!">
    <SEO title="Policies" description="Learn about our privacy policy as well as our refund policy here!" />


      <Policies />
  </Layout>
  )
  }
export default IndexPage