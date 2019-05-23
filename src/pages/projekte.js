import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projekte " />
    <h1>Pauls Projekte</h1>
    <p>Willkommen zu meinen Projekten.</p>
    <h2>Startup, SaaS und E-Learning Projekte</h2>
    <ul>
        <li><strong><a href="https://prandible.com">prandible</a></strong> - Digitale Schule für Händler | MRR - € 450,-
        </li>
        <li><strong><a href="https://gethellobox.com">HelloBox</a></strong> - Verwandelt deine Website zum Leadmagneten | MRR - € 300,-
        </li>
        <li><strong><a href="https://pinbuttler.com">PinButler</a></strong> - Pinterest Marketing Automatisierung | MRR - € 20,-
        </li>
    </ul>
    <Link to="/">Zurück zur Startseite |</Link>
    <Link to="/projekte/">Projekte | </Link>
    <Link to="/portfolio/">Portfolio | </Link>
    <Link to="/bildung/">Bildung</Link>
  </Layout>
)

export default SecondPage
