import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Bildung " />
    <h1>Pauls Bildungsprojekte</h1>
    <p>Willkommen zu meinen Projekten im Bereich Bildung</p>
    <h2>E-Learning und Bildung</h2>
    <ul>
        <li><strong><a href="https://jaeger.health/">Jäger Health Group</a></strong> - Entwicklung von 3 Videomodulen und Schulungsmaterial für die Themen:
            <ol>
                <li>Google my Business</li>
                <li>Email-Marketing</li>
                <li>Website</li>
            </ol>
        </li>
        <li><strong><a href="https://www.wbsakademie.de/shop/seminar/seminare/betriebswirtschaft/marketing/digital-marketing?number=">WBS Akademie</a></strong> Entwicklung und Schulung von dem Modul "Digital-Marketing", mit folgenden Kursen:
            <ol>
                <li>Digitalisierung in Marketing & Vertrieb</li>
                <li>Data Driven Marketing – Großkampagnen vs. Kundenorientiert und Maßgeschneidert</li>
                <li>Storytelling – Kundenbindung durch Inspiration</li>
                <li>Vernetzte Welten – Kanäle zielgruppengerecht nutzen</li>
                <li>Anhaltender Trend statt Eintagsfliege: Moderne Kampagnen</li>
            </ol>
        </li>
        <li><strong><a href="https://www.handwerk-direkt.de/">Kreishandwerkschaft Bergisches Land</a></strong> - Entwicklung und Durchführung zum Seminar "Facebook für Fortgeschrittene"
        </li>
    </ul>
  </Layout>
)

export default SecondPage
