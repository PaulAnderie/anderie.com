import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projekte = () => (
  <Layout>
    <SEO title="Projekte " />
    <h1>Pauls Projekte</h1>
    <p>Willkommen zu meinen Projekten.</p>
    <h2>Startup, SaaS und E-Learning Projekte</h2>
    <ul>
        <li><strong><a href="https://prandible.com">prandible</a></strong> - Digitale Schule für Händler | MRR - € 450,-
        <p>Hier kannst du dir anschauen, um was es dabei geht:</p>
        <iframe width="400" height="215" src="https://www.youtube-nocookie.com/embed/Rv9pyAzLE5A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </li>
        <li><strong><a href="https://gethellobox.com">HelloBox</a></strong> - Verwandelt deine Website zum Leadmagneten | MRR - € 300,-
        <p>Was macht die HelloBox? Ein Video sagt mehr als 10.000 Worte.</p>
        <iframe width="400" height="215" src="https://www.youtube-nocookie.com/embed/Ivc8me11NYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </li>
        <li><strong><a href="https://pinbuttler.com">PinButler</a></strong> - Pinterest Marketing Automatisierung | MRR - € 20,-
        </li>
    </ul>



  </Layout>
)

export default Projekte
