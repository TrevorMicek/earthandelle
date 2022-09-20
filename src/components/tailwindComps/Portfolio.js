import React from 'react'
import { Link } from 'gatsby'


import about from '../../images/newImages/about.webp'

export default function Example() {
    return (
      <div className="relative bg-white pt-4 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="mx-auto max-w-md sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="text-left bg-accent">
          <Link to="/about">
        <img src={about} alt="image of two smiling customers showing their collagen supplements" className="" />
         </Link>

        </div>

        </div>
      </div>
    )
  }
