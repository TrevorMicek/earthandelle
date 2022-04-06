import React from 'react'

export default function Example() {
    return (
      <div className="bg-indigo-600 -mt-6 -mb-16" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"sixth"}}>
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Boost conversion rates.</span>
            <span className="block">Start your new site today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our google friendly websites have higher sales, higher outreach, & higher consumer satisfaction than any other option.
          </p>
          <a
            href="/pricing"
            className="mt-8 w-80 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Browse Our Packages
          </a>
          <div className="my-5 text-white">OR</div>
          <a
            href={'https://free.websitesbytrevor.com/'}
            className=" w-80 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Get a Free Site
          </a>
        </div>
      </div>
    )
  }