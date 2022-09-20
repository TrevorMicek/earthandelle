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
import { Script } from "gatsby";
import Header from "./Header";
import Footer from "../tailwindComps/Footer";
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
        {title ? <Header title={title} text={text} /> : <></>}

        <Helmet>
        <Script id="refersion">{`! function(e, n, t, i, o, c, s, a) {
    e.TrackingSystemObject = "r", (s = n.createElement(t)).async = 1, s.src = "https://cdn.refersion.com/refersion.js", s.onload = function() {
        r.pubKey = "pub_0582c4592b7ea5275889", r.settings.fp_off = 1;
        r.initializeXDLS().then(() => {
            r.launchDefault()
        })
    }, (a = n.getElementsByTagName(t)[0]).parentNode.insertBefore(s, a)
}(window, document, "script");`}</Script>
        </Helmet>

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
