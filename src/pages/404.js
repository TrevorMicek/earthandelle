import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import * as queryString from "query-string";
import { Redirect } from "@reach/router";
const NotFoundPage = ({ location }) => {


    return (
  <Layout title="404">
    <SEO title="404: Not found" description="page not found" />
    <div className="" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
    <h1 className="">404: Not Found!</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
  </Layout>
)
    }

export default NotFoundPage
