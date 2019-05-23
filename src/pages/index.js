import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Anderie LIVE" />
    <h1>Hi 👋, ich bin Paul Anderie LIVE</h1>
    <p>Ich bin der Gründer von <a href="https://prandible.com?utm_source=paul">prandible</a>, Hersteller von Software und Digital-Produkten und Technologie-Enthusiast.</p>
    <p> Meine Texte und Ideen konzentrieren sich auf die konträre Sichtweise, dass Geschäftswachstum nicht immer gut ist und nicht immer erforderlich ist.</p>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Projekte</Link>
  </Layout>
)

export default IndexPage
