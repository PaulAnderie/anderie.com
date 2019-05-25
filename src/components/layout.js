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

export default Layout
