import React, { useState } from 'react'
import { Link } from 'gatsby'
const cartImg = require('../../images/cartButton.webp')
const Button = (props) => {

    return (
        <div className="storeNavWrapper">

            <Link className="linkColor" to={props.linkUrl}  geturl={props.getUrl}>
                <div className="homeButton">{props.title}</div>
            </Link>



        </div>
    )
}
export default Button;