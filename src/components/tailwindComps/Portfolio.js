import React from 'react'
import { Link } from 'gatsby'

import eaglePlumeDesktop from '../../images/eaglePlumes.webp'
import eagleMobile from '../../images/eagleMobile.webp'
import spotterDesktop from '../../images/spotter.webp'
import spotterMobile from '../../images/spotterMobile.webp'
import marketDesktop from '../../images/market.webp'
import marketMobile from '../../images/marketMobile.webp'

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
      <div className="relative bg-indigo-50 pt-16 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="mx-auto max-w-md px-4  sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
          <h2 className="text-base text-default font-semibold tracking-wide uppercase lg:ml-16">Our Portfolio</h2>
          <p className="mt-2 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:ml-16">
          Check out some of our websites
          </p>
            <p className="mt-5 mb-8 max-w-prose mx-auto text-xl text-gray-500">
              Here are a few examples of our work so you can see firsthand the quality and style of Websites By Trevor.
            </p>
            </div>
            {portfolio.map(example => (
                <>
                <p className=" mt-5  text-base text-default font-semibold tracking-wide uppercase lg:ml-16">
                <Link to={example.link}>{example.name}</Link>
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    {example.description}
                  </p>

                <div className="mt-10 flex flex-col md:flex-row md:space-y-10 lg:inset-y-0 lg:right-0 lg:h-full">
                  <Link to={example.link}>
                      <img
                    className="inset-0 w-5/12 h-60 object-fit rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 sm:w-3/12 md:w-11/12"
                    src={example.mobile}
                    alt=""
                    width="300px"
                    height="200px"
                    loading="lazy"
                  />
                  </Link>
                  <Link to={example.link}>
                  <img
                    className="inset-0 relative w-full h-80 object-fit rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 md:w-9/12 md:left-24"
                    src={example.desktop}
                    alt=""
                    width="300px"
                    height="200px"
                    loading="lazy"
                  />
                  </Link>
                </div>
                </>
            ))}

        </div>
      </div>
    )
  }
