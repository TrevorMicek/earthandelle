import React from 'react'
import { Link } from 'gatsby'

import eaglePlumeDesktop from '../../images/eaglePlumes.webp'
import eagleMobile from '../../images/eagleMobile.webp'
import spotterDesktop from '../../images/spotter.webp'
import spotterMobile from '../../images/spotterMobile.webp'
import marketDesktop from '../../images/market.webp'
import marketMobile from '../../images/marketMobile.webp'
import about from '../../images/newImages/about.webp'
const portfolio = [
    {
      name: "Eagle Plume's",
      description:
      "A little piece of history in the high mountains of Colorado, this 100 year old business is now getting more sales online then ever before.",
      desktop: eaglePlumeDesktop,
      mobile: eagleMobile,
      link: 'https://www.eagle-plumes.com/'
    },
    {
      name: 'Spotter Fitness',
      description:
        "This fitness app is transforming the way people work out. With their new website, they're able to funnel more customers directly to their app.",
      desktop: spotterDesktop,
      mobile: spotterMobile,
      link: 'https://spotterfitness.com/'
    },
    {
      name: 'Competitive Intelligence & Analytics',
      description:
        "This Colorado marketer is now able to  offer services directly through their website, increasing their reach and sales.",
      desktop: marketDesktop,
      mobile: marketMobile,
      link: 'https://www.getmarketintel.com/'
    }
  ]
export default function Example() {
    return (
      <div className="relative bg-white pt-4 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="mx-auto max-w-md sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="text-left bg-accent">
          <Link to="/about">
        <img src={about} className="" />
         </Link>

        </div>

        </div>
      </div>
    )
  }
