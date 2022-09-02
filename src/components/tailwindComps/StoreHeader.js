import React, { useState, useRef, useEffect } from 'react'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"
import { useShopify } from '../../storePage/hooks'
import emailjs from 'emailjs-com';
import Cart from '../../storePage/storeComponents/Cart'

import { ShoppingBagIcon } from '@heroicons/react/outline'


import headerOne from '../../images/newImages/header1.webp'

import headerTwo from '../../images/newImages/header2.webp'
import Logo from '../../images/newImages/Logo.png'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
      { name: 'Store', href: '/store' },
      { name: 'About', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/#contact' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/xoearthandelle',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/xoearthandelle/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Tiktok',
      href: 'https://www.tiktok.com/discover/xoearthandelle?lang=en',
      icon: (props) => (
        <svg width="28px" height="28px" className="-mt-1" viewBox="0 0 45 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>Tiktok</title>
    <g id="Icon/Social/tiktok-black" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="rgb(238, 214, 202)"></path>
    </g>
</svg>
      ),
    }
  ],
}

export default function HeroComp(props) {


const CartComp = () => (
    <Popover className="relative z-10 text-secondary">
    {({ open }) => (
      <>
        <Popover.Button
          className={`
            ${open ? '' : 'text-opacity-90'}
            group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >


        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">

              </div>
              <div className="bg-gray-50 p-4">
                <a
                  href="##"
                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Documentation
                    </span>
                  </span>
                  <span className="block text-sm text-gray-500">
                    Start integrating products and tools
                  </span>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}

  </Popover>
)
 return (

    <div className="relative  sm:-mt-24 sm:-pt-24 pb-10 lg:-pt-32 lg:-mt-32" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>

      <Popover as="header" className="relative ">
        <div className="bg-default">

          <nav
            className="border-2 relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="my-4 flex absolute justify-center space-x-3">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-accent hover:text-secondary">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
            <div className="flex pb-1 flex-1">

              <div className="h-20 w-full flex items-center justify-end w-full md:w-auto">
              <div className="fixed top-16 w-full max-w-sm px-4">

    </div>
    <div className="">
            <Cart create={props.create} />
            </div>

              <div className="w-1/12 relative -right-1 z-10 cursor-pointer">

              <Link to="/store">
            <ShoppingBagIcon width="20px" height="20px" className="text-accent w-6 h-6 relative z-10 md:hidden hover:text-secondary" />
              </Link>

            </div>
                <a href="/">
                  <span className="sr-only">Workflow</span>

                </a>
                <div className="flex items-center md:hidden">
                  <Popover.Button className="relative inline-flex items-center rounded-md justify-center text-gray-100 hover:bg-secondary hover:text-default focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="min-h-7 min-w-7 h-11 w-11 p-2 rounded-md text-accent bg-default hover:bg-secondary hover:text-default hover:b" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="hidden space-x-5 mt-7 left-0 md:flex md:mx-auto">

                {navigation.main.map((item) => (
                  <Link to={item.href} key={item.name} className="text-base font-medium text-white hover:text-indigo-500 med:text-lg">
                    {item.name}
                  </Link>
                ))}


              </div>
              <div className=" hidden w-1/12 md:flex right-10 mt-7 md:absolute z-10 cursor-pointer">
                  <Link to="/store">
            <ShoppingBagIcon width="20px" height="20px" className="text-accent w-6 h-6 relative z-10 hover:text-secondary" />
            </Link>






              </div>

            </div>

          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg bg-secondary shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="h-20 w-auto  pt-4 flex items-center justify-between">
                <div className="px-0 pt-7 ">
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className="px-4 -mr-2">
                  <Popover.Button className="relative bottom-3 bg-default rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-default focus:outline-none focus:ring-2 focus:ring-inset focus:ring-default">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-10 pb-5">
                <div className="px-2 space-y-0">
                  {navigation.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-bg hover:text-white hover:bg-default hover:0"
                    >
                      {item.name}
                    </a>
                  ))}

                </div>



              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-4 bg-white  ">

          <div className="mx-auto  ">
            <div className="">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center ">
                <div className="">










                  <div className="">

                <div className="mx-auto">
                  <Link to="/">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-44 mx-auto sm:w-56"
                    src={Logo}
                    alt="blue technical background image"
                    width="175px"
                    height="100px"
                  />
                  </Link>
                </div>
              </div>



                </div>
              </div>
              <div className="-mt-2 ">
                <div className="mx-auto  cursor-pointer">
                  <Link to="/store/products/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTQ5ODMyNDgxMTE=">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full mx-auto "
                    src={headerOne}
                    alt="blue technical background image"
                    width="200px"
                    height="100px"
                  />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}

