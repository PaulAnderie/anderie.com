import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Pauls Portfolio</h1>
    <p>Willkommen zu meinem Portfolio.</p>
    <h2>Kunden-Projekte und Ergebnisse in den letzten 12 Monaten</h2>
    <ol>
        <li><strong>hall Computer Services GmbH</strong> - IT Systemhaus</li>

            <ul>
                <li>DSGVO Videokurs</li>
                <li>Hall TV Regelmäßige Rubrik mit GF</li>
                <li>Monatlicher NL</li>

            </ul>
        <p><em>Ergebnis: 2-3 neue Anfragen pro Monat (Wert: 3.000 Euro)</em></p>
        <li><strong>artista GmbH</strong> - Online-Marketing Agentur</li>
            <ul>
                <li>IT und Marketing Beratung</li>
                <li>Technisches Marketing</li>
                <li>Email-Marketing</li>

            </ul>
        <p><em>Ergebnis: Eigenständige Kunden- und Budgetverantwortung im Gesamtwert von €20.000,-</em></p>
        <li><strong>Teak 24 GmbH</strong> - Teakmöbel Händler Online und Offline</li>
        <ul>
            <li>Aufbau digitaler Vertriebskanal</li>
            <li>IT und Marketing Beratung</li>
            <li>Facebook und Google Anzeige</li>
        </ul>
        <p><em>Digitale Umsatzsteigerung Steigerung nach 6 Monaten 23% mehr Umsatz und 12% mehr Neukunden</em></p>
        <li><strong>Körperverwandlung</strong> - Premium Fitness-Programm</li>
            <ul>
                <li>Aufbau digitaler Vertriebskanal</li>
                <li>Digitalisierung Kundenonboarding</li>
                <li>Facebook und Google Anzeige</li>
            </ul>
        <p><em>Ergebnis: nach 12 Monaten 48.876,30 Euro zusätzlicher Netto-Umsatz über digitalen Vertriebskanal</em></p>
        <li><strong>Himbeertörtchen</strong></li>
            <ul>
                <li>E-Commerce Challenge</li>
                <li>IT und Marketing Beratung</li>
                <li>Einführung Warenwirtschaft</li>
            </ul>
        <p><em>Ergebnis: nach 6 Monaten zusätzlicher Umsatz von € 10k pro Monat über digitalen Vertriebskanal</em></p>
        <li><strong>Niggemann GmbH</strong></li>
        <ul>
            <li>Social-Media Beratung</li>
            <li>E-Commerce Projektmanagement</li>
            <li>Paid Media</li>
        </ul>
    <p><em>Ergebnis: Aufbau Shopsystem mit PIM Anbindung</em></p>
    </ol>
  </Layout>
)

export default SecondPage
