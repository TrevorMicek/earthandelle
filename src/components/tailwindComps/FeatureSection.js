import React from 'react'

import { CodeIcon, TagIcon, DatabaseIcon,TerminalIcon, UploadIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

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

          <h2 className="mt-2 mb-7 relative font-serif z-10 text-lg tracking-wide font-thin text-gray-900 lg:mx-auto">
            FEATURED COLLECTION
          </h2>

        </div>

        <div className=" lg:m-0 lg:relative">
                <div className="mx-auto  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-12/12 mx-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-10/12 lg:w-auto lg:max-w-none"
                    src={Product}
                    alt="blue technical background image"
                    width="350px"
                    height="200px"
                  />
                </div>
              </div>
              <div className="px-6 mx-auto w-full text-left">
        <p className="max-w-96 mb-1">
        EARTH & ELLE VEGAN COLLAGEN GUMMIES - NON-GMO BIOTON GUMMIES, VITAMIN A, E, C - PLANT BASED COLLAGEN SUPPLEMENTS FOR HEALTHIER HEAIR, SKIN, NAILS - 60 CHEWS OF ORANGE FLAVORED GUMMIES, MADE IN USA
        </p>
        <p className="">
          <span className="line-through text-gray-400">$25.99 USD</span>
           <span className="text-gray-400">
           &nbsp;&nbsp;&nbsp; $17.49 USD
          </span>
        </p>
        </div>
        <div className="text-center mt-12">
        <button className="py-3 px-8 text-white font-xs bg-button">
          View all
        </button>
        </div>

    </div>
  )
}