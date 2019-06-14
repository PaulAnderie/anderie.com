/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./global.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
          <div><a href="/projekte/">Projekte | </a>
          <a href="/portfolio/">Portfolio | </a>
          <a href="/bildung/">Bildung</a>
          {` `}

          oder sag Hi auf <a href="https://www.instagram.com/paulanderie/">Instagram</a> {` `}| <a href="https://www.facebook.com/paul.anderie">Facebook</a> {` `}| <a href="https://www.linkedin.com/in/paulanderie/">LinkedIn</a> {` `}
          {` `}
          {` `}
          {` `}
          {` `}
          und hier das {` `}<a href="https://prandible.com/impressum">Impressum</a></div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

<<<<<<< HEAD
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
     <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
       <h3 style={{ display: `inline` }}>Home</h3>
     </Link>
     <ul style={{ listStyle: `none`, float: `right` }}>
       <ListLink to="/about">Über Paul</ListLink>
       <ListLink to="/portfolio/">Portfolio</ListLink>
       <ListLink to="/projekte/">Projekte</ListLink>
       <ListLink to="/bildung/">Bildung</ListLink>
     </ul>
   </header>

    {children}

    <footer>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Home</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/impressum">Impressum</ListLink>
      <ListLink to="/datenschutz/">Datenschutz</ListLink>
    </ul>

    </footer>
  </div>
)
=======
export default Layout
>>>>>>> parent of 70bc205... 📄New Pages, Header and Typography.js Component
