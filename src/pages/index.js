import React, { useState, useEffect, useRef } from "react"


import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"
import emailjs from 'emailjs-com';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Supplment from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import About from '../components/tailwindComps/Portfolio'
import FAQ from '../components/tailwindComps/FAQs'
import Contact from '../components/tailwindComps/Contact'
import Gradient from '../components/commonComps/Gradient'
import Confirm from '../components/tailwindComps/Confirmation'
import Popup from '../components/tailwindComps/Popup'

const IndexPage = () => {
  const [confirm, setConfirm] = useState(true)
  const [email, setEmail] = useState('')
  const form = useRef()
  const onSubmit = (e) => {
    emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
       e.preventDefault()
       console.log('sent')
  }
  const handleChange = (e) => {

            setEmail(e.target.value)

  }
  const confirmMessage = ['Thanks for choosing Websites By Trevor!', ' We will reach out ASAP to start collaborating on your new free site']

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />
    {confirm ? <Popup prompt={true} message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
    <Supplment />
    <About />

    <Contact />

  </Layout>
  )
}
export default IndexPage
