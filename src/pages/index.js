import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Anderie" />
    <h1>Hi 👋, ich bin Paul Anderie</h1>
    <p>Ich bin der Gründer von <a href="https://prandible.com?utm_source=anderie.com">prandible</a>, Hersteller von Software und Digital-Produkten und Technologie-Enthusiast.</p>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Wer bin ich?</h2>
    <p>Viele nennen mich das "Digitale Schweizer Taschenmesser" oder Paul "The Toolbox" Anderie und tatsächlich interessiere ich mich für viele Dinge. In einem bin ich aber besonders gut...</p>
    <blockquote>Menschen beim Wandeln und Handeln unterstützen.</blockquote>
    <div>

    </div>
  </Layout>
)

export default IndexPage
