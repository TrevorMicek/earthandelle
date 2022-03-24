import React from 'react'

import { CodeIcon, TagIcon, DatabaseIcon,TerminalIcon, UploadIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


import img from '../../images/movingCurve.jpg'
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


const metricsImg = require('../../images/metrics.png')
export default function FeatureSection() {

  return (
    <div className="pb-10 pt-16 -mb-8 -mt-20 pr-4 relative overflow-hidden bg-indigo-50" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
<img src={img} className="absolute z-0 top-72 left-24 width-11/12 height-96 opacity-40 transform rotate-90 scale-x-125 before:-skew-x-9 before:rounded-sm after:skew-x-9"  />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-4 text-base text-default font-semibold tracking-wide uppercase">Affordable and coded by hand</h2>
          <p className="mt-2 relative z-10 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:mx-auto">
          A New Way of Making Websites
          </p>
          <p className="mt-4 relative z-10 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          We are changing how small business web design and development is being done
          with our hand coded websites that we offer as an affordable subscription to businesses like you.
          </p>
        </div>

        <div className="mt-10">
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
      </div>
    </div>
  )
}