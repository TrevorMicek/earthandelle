import React, { useState, useEffect } from 'react'

import { CodeIcon, TagIcon, ArrowRightIcon,TerminalIcon, UploadIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import Product from '../../images/newImages/product.webp'
import img from '../../images/movingCurve.jpg'
const benefits = [
  {
    name: '100% Hand Coded',
    description:
    "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality, leading to more traffic and conversions.",
    icon: CodeIcon,
  },
  {
    name: 'Performance',
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Subscription Pricing',
    description:
      "We use a unique subscription pricing model, so you enjoy no upfront costs, affordable packages and no hidden fees.",
    icon: TagIcon,
  }
]
const Reviews = () => {


  return (
  <div className="py-2 w-32 flex flex-row items-center justify-center mx-auto">
 <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
      <defs>
        <linearGradient id="grad1">
          <stop offset="50%" stop-color="rgb(251 191 36)" />
          <stop offset="50%" stop-color="rgb(251 191 36)" />
        </linearGradient>
      </defs>
      <path fill="url(#grad1)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
      <defs>
        <linearGradient id="grad2">
          <stop offset="50%" stop-color="rgb(251 191 36)" />
          <stop offset="50%" stop-color="rgb(251 191 36)" />
        </linearGradient>
      </defs>
      <path fill="url(#grad2)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
      <defs>
        <linearGradient id="grad3">
          <stop offset="50%" stop-color="rgb(251 191 36)" />
          <stop offset="50%" stop-color="rgb(251 191 36)" />
        </linearGradient>
      </defs>
      <path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
      <defs>
        <linearGradient id="grad4">
          <stop offset="50%" stop-color="rgb(251 191 36)" />
          <stop offset="50%" stop-color="rgb(251 191 36)" />
        </linearGradient>
      </defs>
      <path fill="url(#grad4)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
      <defs>
        <linearGradient id="grad5">
          <stop offset="50%" stop-color="rgb(251 191 36)" />
          <stop offset="50%" stop-color="white" />
        </linearGradient>
      </defs>
      <path fill="url(#grad5)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
    l11.547-1.2L16.026,0.6L20.388,10.918z"/>
    </svg>


</div>
)
  }
/*
const features = [
  {
    name: '100% Hand Coded',
    description:
    "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality, leading to more traffic and conversions.",
    icon: CodeIcon,
  },
  {
    name: 'Optimization',
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Subscription Pricing',
    description:
      "We use a unique subscription pricing model, so you enjoy no upfront costs, affordable packages and no hidden fees.",
    icon: TagIcon,
  }
]
<div className="mt-10 hidden">
        <h2 className="mt-5 mb-6 text-base text-default font-semibold tracking-wide uppercase">Features</h2>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
*/
const metricsImg = require('../../images/metrics.png')
export default function FeatureSection() {

  return (
    <div className=" pb-10 pt-9 -mb-8 -mt-20 relative overflow-hidden bg-white" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>

 <div className="text-center w-full">
    <div className="mb-8 h-12 bg-button flex flex-row space-x-1 justify-center items-center">
    <p className="my-auto ml-4 w-72 text-left text-white">Enter to win a year supply of our vegan collagen boosting gummies ($240 value)
    </p>
    <button className="my-auto -ml-1 text-left bg-secondary text-gray-800 rounded-md py-1 px-1 text-sm">Enter Here</button>

    </div>
          <h2 className="mt-2 mb-7 relative font-serif z-10 text-lg tracking-wide font-thin text-gray-900 lg:mx-auto">
            Supplements created by women <i>for</i> women
          </h2>

        </div>

        <div className="">
                <div className="mx-auto  sm:max-w-2xl sm:px-6 ">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-12/12 mx-auto "
                    src={Product}
                    alt="blue technical background image"
                    width="350px"
                    height="200px"
                  />
                </div>
              </div>
              <div className=" ">
        <p className="max-w-96 px-5 mb-3 mx-auto sm:w-96">
        EARTH & ELLE VEGAN COLLAGEN GUMMIES - NON-GMO BIOTON GUMMIES, VITAMIN A, E, C - PLANT BASED COLLAGEN SUPPLEMENTS FOR HEALTHIER HEAIR, SKIN, NAILS - 60 CHEWS OF ORANGE FLAVORED GUMMIES, MADE IN USA
        </p>

        <div className="mt-6 mx-auto flex justify-center">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center w-56">
                <Reviews />
                <p className="sr-only">4.5 out of 5 stars</p>
                <a href="" className="ml-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  104 reviews
                </a>
              </div>
            </div>


        <p className="mx-auto mt-3 text-center">
          <span className="line-through text-gray-400">$25.99 USD</span>
           <span className="text-gray-400">
           &nbsp;&nbsp;&nbsp; $17.49 USD
          </span>
        </p>
        </div>
        <div className="text-center mt-8 ">

        <button className="py-3 px-4 mx-auto rounded-md  text-white font-xs bg-button">
        <Link to="/store">
          <div className="flex flex-row space-x-4 justify-center items-center">
          <p className="my-auto">Shop Now</p>
          <ArrowRightIcon width="20px" height="20px" />
          </div>
          </Link>
        </button>

        </div>

    </div>
  )
}