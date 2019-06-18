import React from "react"
import { graphql } from "gatsby"

import HolyTeam from "../components/holyteam"
import Layout from "../components/layout"


const ueber = () => (
  <Layout>
    <h1>Wer ist eigentlich Paul?</h1>
    <p>Ich bin mit digitalem Projektmanagement aufgewachsen. Angefangen hat alles mit dem Aufbau der Online-Shops von JOOP!, Strellson und Windsor.</p>
    <div style={{ maxWidth: `450px`, marginBottom: `1.45rem` }}>
      <HolyTeam />
      </div>
    <p>Gut ausgebildet ging es für 2 Jahre auf Weltreise und hat dort ortsunabhängig als Coach und Berater für Online-Marketing und Digital-Retail für KMU’s und kleinere Marken gearbeitet. 2017 kam die Gründung der Lernplattform prandible - ehrliches Online-Training dazu.</p>
    <p>Seit 2018 ist er Preisträger des Urbanitäts-Award für Offline-Strategien und Innenstädte, welcher durch den Bundeskongress in Bochum verliehen wurde.
    </p>
    <strong><a href="https://calendly.com/paul-anderie/strategie">Buche einen Termin</a></strong>
    <div>
    <p>oder Vernetzte dich mit mir auf:
    </p>
        <ul>
            <li><a href="https://www.linkedin.com/in/paulanderie/">LinkedIn</a>
            </li>
            <li><a href="https://www.xing.com/profile/Paul_Anderie">Xing</a>
            </li>
        </ul>
    </div>
  </Layout>
)
export default ueber
