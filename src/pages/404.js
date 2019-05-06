import React from "react"

import LayoutContainer from "../components/utils/LayoutContainer"
import Seo from "../components/utils/Seo"

const NotFoundPage = () => (
  <LayoutContainer>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutContainer>
)

export default NotFoundPage
