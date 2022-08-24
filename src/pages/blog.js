import React, { useState } from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import MainSectionTitle from '../components/commonComps/MainSectionTitle'
import styles from '../styles/ServicesPage/mainStyles.css';
import CategoryData from '../data/blogPage/CategoryData'
import basics from "../data/blogPage/blogPostData/basics"
import CreateComponent from "../components/commonComps/createComponent"
import Events from "../data/blogPage/Categories";
import BlogSection from '../components/tailwindComps/BlogSection'
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
  <Layout title="Blog" text="Learn About Web Design, SEO, Ecommerce & More!">
    <SEO title="Blog" />


      <Router className=" relative bg-white pt-4 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
        <BlogSection path="/blog" />
        <div path="/blog/:id" >blog article</div>
      </Router>
  </Layout>
  )
  }
export default IndexPage