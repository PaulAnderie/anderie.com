/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./global.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

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
