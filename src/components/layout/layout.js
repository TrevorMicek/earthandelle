/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "../tailwindComps/Footer";
import HeroComp from "../tailwindComps/Hero";

import createComponent from '../commonComps/createCart'
import "./layoutGrid.css"
import "./layout.css"
const Layout = ({children, title, text, pageLayout}) => {


  /*
  const rootReducer = combineReducers(reducers);

  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(rootReducer, enhancer);
 */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (


      <div
        style={{
          margin: `0 0`,
        }}
      >

       <div class="grid">
        <Header title={title} text={text} />


        <main style={pageLayout}  class="main">{children}</main>
        <Footer />
       </div>
      </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
