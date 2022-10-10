import React, { useEffect, useState } from "react"

import { navigate, useMatch } from "@reach/router"

import Layout from '../../components/layout/layout'
import { useShopify } from "../hooks"
import { Link } from "gatsby"
import { Client } from "shopify-buy"
import { StarIcon } from "@heroicons/react/solid"
export default (props) => {

	const {
		product,
		fetchProduct,
		openCart,
		createCheckout,
		checkoutState,
		checkoutId,
		addVariant,
		client

	} = useShopify()
	const lineItemsToAdd = [
		{
		  variantId: 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC82NzQxNzM2YTQwZDk3OGJkMjFmZTM0NGYzNTdhMmYwMj9rZXk9YmI2ZWVmNDA3MDkxODZmZDEyOGIzZjkxZDM0MTVmYTE=',
		  quantity: 1
		}
	  ];
	  const ArrowSmLeftIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

	  )
	  const ArrowSmRightIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

	  )
const id = useMatch("/store/products/:productId").productId
	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [quantity, setQuantity] = useState(1)
	const [refreshQuantity, setRefreshQuantity] = useState(0)
	const description = product.description && product.description.split(".")

	const [curImg, setCurImg] = useState(0)
	const leftImg = () => {
		if (curImg > 0) {
		setCurImg(curImg - 1)
		} else {
			setCurImg(curImg + 1)
		}
	}
	const rightImg = () => {
		if (curImg < product.images && product.images.length - 1) {
		setCurImg(curImg + 1)
		} else {
			setCurImg(curImg - 1)
		}
	}
	const productInfo = {
		name: 'Basic Tee 6-Pack',
		price: '$192',
		href: '#',
		breadcrumbs: [
		  { id: 1, name: 'Men', href: '#' },
		  { id: 2, name: 'Clothing', href: '#' },
		],
		images: [
		  {
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
			alt: 'Two each of gray, white, and black shirts laying flat.',
		  },
		  {
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
			alt: 'Model wearing plain black basic tee.',
		  },
		  {
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
			alt: 'Model wearing plain gray basic tee.',
		  },
		  {
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain white basic tee.',
		  },
		],
		colors: [
		  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
		],
		sizes: [
		  { name: 'XXS', inStock: false },
		  { name: 'XS', inStock: true },
		  { name: 'S', inStock: true },
		  { name: 'M', inStock: true },
		  { name: 'L', inStock: true },
		  { name: 'XL', inStock: true },
		  { name: '2XL', inStock: true },
		  { name: '3XL', inStock: true },
		],
		description:
		  'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
		highlights: [
		  'Hand cut and sewn locally',
		  'Dyed with our proprietary colors',
		  'Pre-washed & pre-shrunk',
		  'Ultra-soft 100% cotton',
		],
		details:
		  'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
	  }
	  const reviews = { href: '#', average: 4.5, totalCount: 104 }

	  function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }


	function openCheckout(e) {
		e.preventDefault()
		// window.open(checkoutState.webUrl) // opens checkout in a new window
		window.location.replace(checkoutState.webUrl) // opens checkout in same window
	}
	function changeSize(e, sizeId, quantity) {
		window.scrollTo(0,0)
		//console.log(checkoutId, checkoutState.id)
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const lineItemsOnRefresh = [
				{ variantId: sizeId, quantity: parseInt(refreshQuantity, 10) },
			]
			const storage = {
				id: checkoutState.id,
				add: lineItemsToAdd,
				onRefresh: lineItemsOnRefresh
			}
			//console.log(storage)
			addVariant(storage.id, storage.add)
			const oldItems = JSON.parse(window.localStorage.getItem('cart')) || []
			oldItems.push(storage)


			const checkout_token = checkoutState.id.split('/')[4].split('?')[0]
			window.SendTrackingToRefersion(checkout_token);




			window.localStorage.setItem('cart', JSON.stringify(oldItems))
			openCart()
		} else {

			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]


			const checkoutId = checkoutState.id
			console.log(checkoutId)
			addVariant(checkoutId, lineItemsToAdd)


		}




	}
	useEffect(() => {

		createCheckout()
		props.button('../../')

		// fetchCollection()
	}, [])

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }
	const checkoutButton = (e) => {
		changeSize(size, quantity)


			openCheckout(e)




	}
/* details
<div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {productInfo.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{productInfo.details}</p>
              </div>
            </div>
*/
	useEffect(() => {
		fetchProduct(id)
		window.scrollTo(0,0)
	}, [])

	const leftArrow = '<'
	const rightArrow = '>'
	const downArrow = '^'
	const Reviews = () => {


		return (
		<div className=" flex py-3 w-32 flex-row items-center justify-start mx-0">
	   <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
			<defs>
			  <linearGradient id="grad1">
				<stop offset="50%" stop-color="rgb(251 191 36)" />
				<stop offset="50%" stop-color="rgb(251 191 36)" />
			  </linearGradient>
			</defs>
			<path fill="url(#grad1)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
		  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
			<defs>
			  <linearGradient id="grad2">
				<stop offset="50%" stop-color="rgb(251 191 36)" />
				<stop offset="50%" stop-color="rgb(251 191 36)" />
			  </linearGradient>
			</defs>
			<path fill="url(#grad2)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
		  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
			<defs>
			  <linearGradient id="grad3">
				<stop offset="50%" stop-color="rgb(251 191 36)" />
				<stop offset="50%" stop-color="rgb(251 191 36)" />
			  </linearGradient>
			</defs>
			<path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
		  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
			<defs>
			  <linearGradient id="grad4">
				<stop offset="50%" stop-color="rgb(251 191 36)" />
				<stop offset="50%" stop-color="rgb(251 191 36)" />
			  </linearGradient>
			</defs>
			<path fill="url(#grad4)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
		  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
			<defs>
			  <linearGradient id="grad5">
				<stop offset="50%" stop-color="rgb(251 191 36)" />
				<stop offset="50%" stop-color="white" />
			  </linearGradient>
			</defs>
			<path fill="url(#grad5)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
		  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
		  </svg>


	  </div>
	  )
		}

	return (
		<div id="individualProduct">

			{props.cart()}


        {/* Image gallery */}
        <div className="mx-auto max-w-2xl sm:px-6 ">
		<div className="Images">

					{product.images &&
								<img
									className="Image"
									key={product.images[curImg] && product.images[curImg].src}
									src={product.images[curImg] && product.images[curImg].src}
									alt={`${product.title} product shot`}
									width="350px"
									height="350px"
								/>
						}


				</div>

        </div>
		<div className="flex flex-row justify-center space-x-1">
		{product.images &&
						product.images.map((image, i) => {
							return (
								<img
									key={image.id + i}
									src={image.src}
									alt={`${product.title} product shot`}
									width="75px"
									height="75px"
									onClick={(e) => setCurImg(i)}
									className={classNames(
										(curImg === i) === true  ? 'bg-white ring-2 ring-default shadow-md' : '',
										'rounded-lg cursor-pointer'
									  )}
								/>
							)
						})}
		</div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-0 pb-16 sm:px-6">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
		  <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center w-56">
                <Reviews />
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <h1 className="text-2xl font-normal text-gray-900">Earth & Elle Vegan Collagen Gummies -</h1>
			<h2 className="text-gray-600 -mt-2 pt-0 text-xl font-normal">Non-GMO Biotin Gummies, Vitamin A, E, C - Plant Based Collagen Supplements for Healthier Hair, Skin, Nails - 60 Chews of Orange Flavored Gummies, Made in USA</h2>
          </div>

          {/* Options */}
          <div className="my-4 text-default lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
			<p className="text-3xl tracking-tight">
           <span className="">
           &nbsp;&nbsp;&nbsp; ${product.variants && product.variants[0].price}
          </span>
        </p>

            {/* Reviews */}


              {/* Colors */}

			  <div className="mt-8 flex mb-0 flex-row bg-white rounded-none items-center">
						<label className="mr-2">Qty</label>
						<input
							className="w-16 "
							type="number"
							min={1}
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value)
							}}
						></input>
					</div>
					<div className="w-full">

					<deliverr data-component="BadgeWithCountdown" data-productId="42980611948783"></deliverr>

					</div>
					<button
						className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-default py-3 px-8 text-base font-medium text-white hover:text-gray-700 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
						onClick={(e) => changeSize(e, size, quantity)}
					>
						Add to cart
					</button>
					<a href="https://www.amazon.com/VEGAN-COLLAGEN-GUMMIES-BIOTIN-SUPPLEMENT/dp/B09JVHN443?maas=maas_adg_28D9FCB6C50F09BE6A7D76E57471D21B_afap_abs&ref_=aa_maas&tag=maas">
					<button
						className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-amazon py-3 px-8 text-base font-medium text-black hover:text-gray-700 hover:bg-amazon focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"

					>

						Buy with Amazon*

					</button>
					</a>
					<p className="text-sm text-gray-800">* save 15% when you buy through Amazon</p>

          </div>

          <div className="py-10  ">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <ul className="space-y-6 ml-0">
						{description &&
							description.map((each, i) => {
								return <li key={`line-description +${i}`} className="text-base text-gray-900">{each}</li>
							})}
					</ul>
            </div>


          </div>
        </div>
      </div>


	)



}
