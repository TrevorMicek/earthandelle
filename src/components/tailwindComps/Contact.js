import React, { useState, useRef, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import emailjs from 'emailjs-com';

import Confirm from './Confirmation'

import UseInput from '../../customHooks/useInput'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const inputs = ['newName', 'email', 'message']
  const UseInputComp = () => {
  for (let i=0;i<inputs.length;i++) {

    return UseInput(inputs[i])
  }
}
const InputComp = UseInputComp().comp
const submitForm =  UseInputComp().submit

  const [agreed, setAgreed] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [validateName, setValidateName] = useState(undefined)
  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateMessage, setValidateMessage] = useState(undefined)

  const form = useRef()

const handleChange = (e) => {
  switch(e.target.name) {
      case 'email':
           if (validateEmail !== undefined) {
               setValidateEmail(undefined)
           }
          setEmail(e.target.value)
          break;
      case 'name':
          if (validateName !== undefined) {
              setValidateName(undefined)
          }
          setName(e.target.value)
          break;
      case 'message':
          if (validateMessage !== undefined) {
              setValidateMessage(undefined)
          }
          setMessage(e.target.value)
          break;
    }
}
const validateError = (label, which) => {
  const errorMessage = () => (
      <div className="text-red-500">
      * {which} input is empty
      </div>
  )
  console.log(label)
 switch (label) {
     case name:
          setValidateName(errorMessage)
          break;
     case email:
         setValidateEmail(errorMessage)
         break;
      case message:
          setValidateMessage(errorMessage)
          break;
 }
}
const onSubmit = (e) => {
  switch ('') {
      case name:
          validateError(name, 'name');
          e.preventDefault()
          break;
      case email:
          validateError(email, 'email')
          e.preventDefault()
          break;
      case message:
          validateError(message, 'message');
          e.preventDefault()
          break;

      default:
         /* setURL() */
         setConfirm(true)
         emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
         e.preventDefault()
  }
}
const confirmMessage = ['Thanks for reaching out to Websites By Trevor!', 'We will respond ASAP']

  return (
    <div id="contact" className="bg-white py-16 -mb-24 -mt-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" style={{gridColumn:"span 7", gridRowStart:"fourth", gridRowEnd:"fifth"}}>
      <div className="relative max-w-xl mx-auto" >
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-2xl font-normal tracking-tight text-gray-900 sm:text-4xl">Questions, Comments, Concerns?</h2>
          <p className="mt-4 text-md leading-6 text-gray-500">
            We will get back to you by the end of the day!
          </p>
        </div>
        <div className="mt-12">
        {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
          <form ref={form} onSubmit={onSubmit} className="sm:grid-cols-2 sm:gap-x-8">
            <div>

              <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label> {validateName}

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter name..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 {validateEmail}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter email..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">

              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 mb-6 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-600 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">

              </label> {validateMessage}
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter message..."
                  className="py-3 resize-none px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-600 rounded-md"

                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className=" inline-flex items-center justify-center px-10 py-3 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-button hover:text-default hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}