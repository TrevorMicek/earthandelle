import React, { useEffect, useState } from "react"
import LineItem from "./LineItem"
import { useShopify } from "../hooks"

import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md"
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon} from "@heroicons/react/outline"
export default (props) => {
	const {
		cartStatus,
		closeCart,
		openCart,
		checkoutState,
		setCount,
		removeLineItem
	} = useShopify()
	const XMarkIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

	)
	const products = [
		{
		  id: 1,
		  name: 'Basic Tee',
		  href: '#',
		  price: '$32.00',
		  color: 'Sienna',
		  inStock: true,
		  size: 'Large',
		  imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
		  imageAlt: "Front of men's Basic Tee in sienna.",
		},
		{
		  id: 2,
		  name: 'Basic Tee',
		  href: '#',
		  price: '$32.00',
		  color: 'Black',
		  inStock: false,
		  leadTime: '3–4 weeks',
		  size: 'Large',
		  imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
		  imageAlt: "Front of men's Basic Tee in black.",
		},
		{
		  id: 3,
		  name: 'Nomad Tumbler',
		  href: '#',
		  price: '$35.00',
		  color: 'White',
		  inStock: true,
		  imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		  imageAlt: 'Insulated bottle with white base and black snap lid.',
		},
	  ]

	function handleOpen(e) {
		e.preventDefault()
		openCart()
	}

	function handleClose(e) {
		e.preventDefault()
		closeCart()
	}

	function openCheckout(e) {
		e.preventDefault()
		// window.open(checkoutState.webUrl) // opens checkout in a new window
		window.location.replace(checkoutState.webUrl) // opens checkout in same window
	}

	useEffect(() => {
		const button = document.querySelector("button.App__view-cart")
		if (cartStatus === true) {
			button.classList.add("hide")
		} else {
			button.classList.remove("hide")
		}

		function getCount() {
			let lineItems =
				checkoutState.lineItems && checkoutState.lineItems.length > 0
					? checkoutState.lineItems
					: []
			let count = 0
			lineItems.forEach((item) => {
				count += item.quantity
				return count
			})

			setCount(count)
		}

		getCount()
	}, [cartStatus, checkoutState])

	useEffect(() => {
		props.create()
	}, [checkoutState.id])


	const clearCart = () => {
		window.localStorage.clear()
		props.create()
	}

	return (
		<div id="cart" className="z-30">

			<div className={`Cart ${cartStatus ? "Cart--open" : ""}`}>
				<div className="App__view-cart-wrapper2">

					<button className="App__view-cart" onClick={(e) => handleOpen(e)}>
					<ShoppingCartIcon
            className="text-accent absolute z-0 right-3 top-7  mr-2 h-6 w-6 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80 xxs:-right-2 sm:-right-2 md:-mr-12 med:-mr-20 hover:text-secondary"
            aria-hidden="true"
          />

					</button>
				</div>




			<div className="bg-white ">

      <div className="mx-auto max-w-2xl px-4 border-2 sm:px-6 lg:max-w-7xl lg:px-8">
	  <button className="Cart__close" onClick={(e) => handleClose(e)}>
					<ShoppingCartIcon
            className="text-default relative right-8 top-0
              ml-2 mr-2 h-6 w-6 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
            aria-hidden="true" />
					</button>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>


          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
			<ul className="">
								<LineItem />
							</ul>

          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="-mt-10 rounded-lg bg-gray-50 px-4 pt-3 "
          >
            <h2 id="summary-heading" className=" -mt-2 text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="-mb-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">$ {checkoutState.subtotalPrice}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$ {checkoutState.totalTax}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">$ {checkoutState.totalPrice}</dd>
              </div>
            </dl>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-default py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
				onClick={(e) => openCheckout(e)}
              >
                Checkout
              </button>
            </div>
          </section>

      </div>
    </div>
		</div>
		</div>
	)
}