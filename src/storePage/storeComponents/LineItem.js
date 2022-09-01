
import React from "react"
import { Link } from "gatsby"
import { useShopify } from "../hooks"

import { CheckIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default (props) => {
	const { checkoutState, updateQuantity, removeLineItem } = useShopify()

	function decrementQuantity(lineItemId, lineItemQuantity, e) {
		e.preventDefault()
		const checkoutId = checkoutState.id
		const updatedQuantity = lineItemQuantity - 1
		updateQuantity(lineItemId, updatedQuantity, checkoutId)
	}

	function incrementQuantity(lineItemId, lineItemQuantity, e) {
		e.preventDefault()
		const checkoutId = checkoutState.id
		const updatedQuantity = lineItemQuantity + 1
		updateQuantity(lineItemId, updatedQuantity, checkoutId)
	}

	function deleteLineItem(lineItemId, e) {
		e.preventDefault()
		const checkoutId = checkoutState.id
		removeLineItem(checkoutId, lineItemId)
	}
	const XMarkIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

	)
	return (
		<>

		<li role="list" className="flex -mt-3  sm:py-10   divide-y divide-gray-200 border-t border-b border-gray-200">
		{checkoutState.lineItems &&
				checkoutState.lineItems.map((lineItem, i) => {
					return (
						<div key={`${lineItem.title}` + i} className="flex py-6 sm:py-10">

                  <div className="flex-shrink-0">
				  {lineItem.variant.image ? (
									<img
										src={lineItem.variant.image.src}
										alt={`${lineItem.title} product shot`}
										className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
									/>
								) : null}

                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to="/store"  className="font-medium text-gray-700 hover:text-gray-800">
							Earth & Elle Vegan Collagen Gummies
                            </Link>
                          </h3>
                        </div>

                        <p className="mt-1 text-sm font-medium text-gray-900">$ {(lineItem.quantity * lineItem.variant.price).toFixed(2)}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
					  <div className="">
										<button
											className="Line-item__quantity-update"
											onClick={(e) =>
												decrementQuantity(lineItem.id, lineItem.quantity, e)
											}
										>
											-
										</button>
										<span className="Line-item__quantity">
											{lineItem.quantity}
										</span>
										<button
											className="Line-item__quantity-update"
											onClick={(e) => {
												incrementQuantity(lineItem.id, lineItem.quantity, e)
											}}
										>
											+
										</button>
									</div>

                        <div className="absolute top-0 right-0">
                          <button type="button" onClick={(e) => deleteLineItem(lineItem.id, e)} className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
				)})}
            </li>
		</>
	)
}