import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Anderie - Online-Marekting Berater" />
    <h1>Hi <span>👋</span>, ich bin Paul Anderie</h1>
        <p>Ich bin der Gründer von <a href="https://prandible.com?utm_source=anderie.com">prandible</a>, Hersteller von
        Software- und Digital-Produkten und Technologie-Enthusiast.</p>
        <p>Im nächsten Schritt kannst du erstmal erfahren, <Link to="/ueber">wer Paul eigentlich ist?</Link></p>
        <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
  </Layout>
)

export default IndexPage
