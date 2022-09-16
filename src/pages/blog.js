import React, { useState, useEffect } from "react"
import { Router, useMatch } from "@reach/router"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import BlogArticle from '../components/tailwindComps/BlogPost'
import BlogSection from '../components/tailwindComps/BlogSection'
import back from '../images/blog/back.jpg'
import lady from '../images/blog/lady.jpg'
import lookingDown from '../images/blog/lookingDown.jpg'
import workout from '../images/blog/workout.jpg'
import hair from '../images/blog/hair.jpg'
const IndexPage = () => {
  const [post, setPost] = useState([])

  const posts = [
    {
      title: 'Collagen for Women | What are the Benefits and Side Effects',
      href: '/blog/benefits',
      id: 'benefits',
      category: { name: 'Article', href: '#' },
      description:
        'Loose and wrinkly skin, chipped nails, thin and dry hairs with split ends are beauty concerns only a woman could understand. Such conditions are not only associated with age, but factors like reduced quality and quantity of collagen play a vital role here.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        lady,
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Does Collagen Cure Knee Pain? | Collagen for Joints',
      href: '/blog/curepain',
      id:"curepain",
      category: { name: 'Video', href: '#' },
      description:
        'A considerable ratio of people suffer from knee pain daily and there could be a variety of reasons for it. Knee pain could occur because of an acute injury or by regular wear and tear in the joints.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
      workout,
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'What Are The Benefits Collagen Has On Your hair?',
      href: '/blog/benefitsforhair',
      id:"benefitsforhair",
      category: { name: 'Case Study', href: '#' },
      description:
        'Healthy hair not only adds to your beauty but indicates that your body is producing the necessary amount of proteins and nutrients. Unfortunately, a considerable ratio of individuals today face hair-related issues.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        hair,
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

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
  const BlogPost = () => {
    const id = useMatch("/blog/:blogId").blogId
    console.log(id)
    useEffect(() => {
      setPost(id)
      window.scrollTo(0,0)
    }, [id])
    return (
      <BlogArticle blog={post} posts={posts} />
    )
  }
  return (
  <Layout title="Blog" text="Learn About Web Design, SEO, Ecommerce & More!">
    <SEO title="Blog" description="Welcome to our blog! Where we show the powers and wonders of collagen supplements" />


      <Router className=" relative bg-white pt-4 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
        <BlogSection path="/blog" post={posts} />
        <BlogPost path="/blog/:blogId" posts={posts}>blog article</BlogPost>
      </Router>
  </Layout>
  )
  }
export default IndexPage