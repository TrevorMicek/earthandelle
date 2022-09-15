import React, {useRef, Fragment, useState, useEffect } from 'react'


import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import emailjs from 'emailjs-com';

import Confirmation from './Confirmation'
import Logo from '../../images/newImages/Logo.png'
export default function Example(props) {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState(true)
  const completeButtonRef = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const form = useRef()
  const onSubmit = (e) => {

       e.preventDefault()
       setPrompt(false)
       console.log('sent')
  }
  useEffect(() => {
    setOpen(true)

  }, [])
  const handleChange = (e) => {

    switch(e.target.name) {
        case 'email':

            setEmail(e.target.value)
            break;
        case 'name':

            setName(e.target.value)
            break;

      }

  }

  const confirm = () => {
        setOpen(false)
        setPrompt(false)
       return  props.confirm
    }
useEffect(() => {
  return props.confirm
}, [props.isConfirm])

  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={confirm}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >


            {
               <div className=" relative top-5 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="w-full flex justify-end">
                <XIcon width="25px" height="25px" onClick={confirm} />
                </div>
            <form ref={form}  action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post" className="sm:grid-cols-2 sm:gap-x-8">
            <div className="h-20 w-auto  pt-0 flex items-center justify-center">
            <div className="px-0 pt-0 ">
                  <img
                    className="h-24 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </div>
                </div>
                <h1 className=" text-center text-2xl mt-10 mb-1 font-bold">
                    Giveaway
                </h1>
                <h2 className="text-center text-3xl font-normal">
                Win a year supply of our vegan collagen boosting gummies ($240 value)
                </h2>


<div className="mt-6 sm:col-span-2">
  <label htmlFor="name" className="block text-sm font-medium text-gray-700">

  </label>
  <div className="mt-1">
    <input
      id="name"
      name="name"
      type="text"
      autoComplete="name"
      value={name}
      onChange={handleChange}
      key='name'
      placeholder="name"
      className="py-3 px-4 mb-4 block w-full border-2 border-default shadow-sm focus:ring-secondary focus:border-secondary rounded-md"
    />
  </div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">

  </label>
  <div className="mt-1">
    <input
      id="email"
      name="email"
      type="text"
      autoComplete="email"
      value={email}
      onChange={handleChange}
      key='name'
      placeholder="email"
      className="py-3 px-4 mb-4 block w-full border-2 border-default shadow-sm focus:ring-secondary focus:border-secondary rounded-md"
    />
  </div>
</div>
<input type="hidden" name="campaign_token" value="reCb7" />

<input type="hidden" name="start_day" value="0" />




<div className="sm:col-span-2">
<div className="flex items-start">
<div className="flex-shrink-0">

</div>

</div>
</div>
<div className="sm:col-span-2">
<input
type="submit"
value="Enter giveaway"
onClick={confirm}
className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-default hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
/>
</div>

</form>
            </div>
            }

          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}