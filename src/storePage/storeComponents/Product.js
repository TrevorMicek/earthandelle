import React, { useState, useEffect } from "react"
import { useShopify } from "../hooks"
import { navigate, Link } from '@reach/router'


export default (props) => {
	const [sortProducts, setSortProducts] = useState(0)
	const [searchProducts, setSearchProducts] = useState('')
	const [showCategoryPage, setShowCategoryPage] = useState(true)


	const setSort = (val) => setSortProducts(val)
	const setSearch = (val) => setSearchProducts(val)

	const { products, fetchProduct, fetchProducts } = useShopify()

	useEffect(() => {

		fetchProducts()


		// fetchCollection()
	}, [])

	const handleSearch = () => {
		/*
		for (let i=0;i<products.length;i++) {
			products[i]['queryParams'] =
		}
		*/
        console.log(products)

    }
    const SearchBar = () => (
        <div className="searchBar">
            <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search.." />
        </form>
        </div>
    )
	useEffect(() => {
		window.scrollTo(0,0)
	}, [products])
	function handleClick(e, product_id, productTitle) {
		e.preventDefault()

		props.getTitle(productTitle)

		const id = product_id
		fetchProduct(id).then((res) => {
			props.getTitle(res.title)
			navigate(`/store/products/${res.id}`)

		})

	}




	const search = (val) => {
		setSearch(val)
		setSort(200)
		setShowCategoryPage(false)



	}
	const Products = () => {
		const sortPrice = () => {
			const sortItems =  products.filter(product => product.variants[0].price <= sortProducts)
		//const sortColor = products.filter(product => console.log(product.variants[0]))
		return sortItems
	}

		const searchProduct =() => {
		const search = () => sortPrice().filter((product ,i) => {

			const query = searchProducts.toLowerCase()
			const answer =  product.productType.toLowerCase()

			//const actualAnswer = answer(0) + answer(1) + answer(2) + answer(3) + answer(4)

			const pluralQuery = (hoody) => {
				const newQuery = query.replace(hoody, 'knitwear')
				return answer.includes(newQuery)
			}
			const pluralAnswer = () => {
					return answer + 's'
			}
			const switchAnswer = () => {
				switch (true) {

					case query.includes('hoodies'):
						return pluralQuery('hoodies')
					case query.includes('hoody'):
						return pluralQuery('hoody')
					case answer.includes(query):
						return answer
					case pluralAnswer().includes(query):
							return answer


				}

			}



		return (switchAnswer())
		}
		)
		//product.title.toLowerCase() === searchProducts.toLowerCase() needs full title
		//product.title.toLowerCase()[i] === searchProducts.toLowerCase()[i] any letter
		//product.title.toLowerCase()[0] === searchProducts.toLowerCase()[0]) first letter
		//const sortColor = products.filter(product => console.log(product.variants[0]))


	return search()
		}



			return (
				<>


				<div className="Product-wrapper">
				{products && searchProduct &&
				searchProduct().map((product, i) => {



					const image = product.images[0]
					const newImage = image.src.replace('.jpg', '_medium.jpg')

					return (
						<div className="Product" key={product.id + i}>
							{image ? (
								<img src={newImage} alt={`${product.title} product shot`} width="300px" height="175px" />
							) : null}
							<div className="Product__Info">
								<h4 className="Product__title">{product.title}</h4>
								<h5 className="Product__vendor">{product.vendor}</h5>
								<div className="Product__review">****(15)</div>
								<p className="Product__price">${product.variants[0].price}</p>
							</div>

							<button
								className="Product__buy button"
								onClick={(e) => handleClick(e, product.id, product.title)}
							>

							</button>

						</div>
					)
				}
				)}
				</div>
				</>
				)
	}
	useEffect(()=> {
		window.addEventListener("keydown", function(e) {
			if (e.key === "Enter") {
				search(e.target.value, products)
			}
		})
	}, [])

const categoryPage = (category) => {
	setSearch(category)
	setSort(200)
	setShowCategoryPage(false)


}
const CategoryLinks = () => {
	return (
		<>
		<label htmlFor='search'></label>
			<input type="text" id="search" name="search" placeholder="Search.." style={{marginLeft: '3vw'}} /><br />
			<div style={{margin:'10vh 25vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center'}}>
				<div style={{fontSize: '1.25rem', margin: '1vh auto'}}>shoes</div>
		<button style={{maxWidth: '250px', margin: '0 auto'}} onClick={() => categoryPage('boots')}><img src={'https://cdn.shopify.com/s/files/1/1312/0893/products/001_d31a9463-4495-4024-ab4b-6901bdd1752e_medium.jpg?v=1491850970'} alt="shoes page" height="90%" width="100%" style={{margin: '0 auto', maxWidth: '250px', cursor: 'pointer'}} /></button><br />
		<div style={{fontSize: '1.25rem', margin: '1vh auto'}}>shirts</div>
	<button style={{maxWidth: '250px', margin: '0 auto'}} onClick={() => categoryPage('shirts')}><img src={'https://cdn.shopify.com/s/files/1/1312/0893/products/004_medium.jpg?v=1491851162'} alt="shoes page" height="90%%" width="100%" style={{maxWidth: '250px', cursor: 'pointer'}} /></button><br />
	<div style={{fontSize: '1.25rem', margin: '1vh auto'}}>sweaters</div>
	<button style={{maxWidth: '250px', margin: '0 auto'}} onClick={() => categoryPage('hoody')}><img src={'https://cdn.shopify.com/s/files/1/1312/0893/products/001_534126a9-c183-4c17-b772-2bd37fdb5225_medium.jpg?v=1491851074'} alt="shoes page" height="90%" width="100%" style={{maxWidth: '250px', cursor: 'pointer'}} /></button><br />
	</div>
	</>
	)
}
const SearchAndSort = () => (
	<>
<label htmlFor='search'></label>
			<input type="text" id="search" name="search" placeholder="Search.." /><br />
				sort<br />
			<button onClick={() => setSort(50)}>$50</button>
			<button onClick={() => setSort(100)}>$100</button>
			<button onClick={() => setSort(150)}>$150</button>
			<button onClick={() => setSort(200)}>$200</button>
			</>
)
	return (
		<div className="Product-wrapper">

			{products &&
				products.map((product, i) => {
					const image = product.images[0]
					return (
						<div className="Product" key={product.id + i}>
							{image ? (
								<img src={image.src} alt={`${product.title} product shot`} />
							) : null}
							<div>
								<h4 className="Product__title">{product.title}</h4>
								<p className="Product__price">${product.variants[0].price}</p>
							</div>
							<button
								className="Product__buy button"
								onClick={(e) => handleClick(e, product.id)}
							>
								View Details
							</button>
						</div>
					)
				})}
		</div>
	)
}
