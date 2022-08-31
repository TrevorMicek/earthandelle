import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import Product from "./Product"

import Layout from '../../components/layout/layout'
import styles from '../../styles/StorePage/wrapper.module.css'
export default (props) => {


	return (
		<Layout title='Custom Ecommerce'>
			{props.cart()}

				<div>

		<div className="Products-wrapper">



			<Product
				history={props.history}
				title={props.title}
				getTitle={props.getTitle}
			/>

		</div>
		</div>
		</Layout>
	)
}