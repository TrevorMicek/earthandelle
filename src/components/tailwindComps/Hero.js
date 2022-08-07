import React, { useState, useRef } from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"
import emailjs from 'emailjs-com';

import { ShoppingBagIcon } from '@heroicons/react/outline'


import headerOne from '../../images/newImages/header1.webp'
import Logo from '../../images/newImages/Logo.png'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Partnerships', href: 'https://partners.websitesbytrevor.com/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
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
      href: '#',
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
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    }
  ],
}

export default function HeroComp() {
  const [confirm, setConfirm] = useState(false)
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

    <div className="relative overflow-hidden" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>

      <Popover as="header" className="relative ">
        <div className="bg-default">

          <nav
            className="border-2 relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="my-4 flex justify-center space-x-3">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-accent hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
            <div className="flex pb-1 flex-1">

              <div className="h-20 w-full flex items-center justify-end w-full md:w-auto">
              <div className="w-1/12 relative right-2 z-10">
            <ShoppingBagIcon width="20px" height="20px" className="text-accent w-6 h-6 relative z-10" />
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
              <div className="hidden space-x-8 md:flex md:absolute md:right-10">
                {navigation.main.map((item) => (
                  <Link to={item.href} key={item.name} className="text-base font-medium text-white hover:text-indigo-500">
                    {item.name}
                  </Link>
                ))}
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
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="h-20 w-auto  pt-4 flex items-center justify-between">
                <div className="px-0 pt-7">
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className="px-4 -mr-2">
                  <Popover.Button className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-bg hover:text-white hover:bg-indigo-500"
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
        <div className="pt-4 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">










                  <div className=" lg:m-0 lg:relative">
                <div className="mx-auto max-w-md  sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-44 mx-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-10/12 lg:w-auto lg:max-w-none"
                    src={Logo}
                    alt="blue technical background image"
                    width="175px"
                    height="100px"
                  />
                </div>
              </div>



                </div>
              </div>
              <div className="-mt-2 lg:m-0 lg:relative">
                <div className="mx-auto w-full sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full mx-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-10/12 lg:w-auto lg:max-w-none"
                    src={headerOne}
                    alt="blue technical background image"
                    width="200px"
                    height="100px"
                  />
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

