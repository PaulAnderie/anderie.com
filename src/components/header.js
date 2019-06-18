import React from "react"
import { Link } from "gatsby"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1><Link to="/">Digitaler Trainer</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="ueber">Über mich</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="https://calendly.com/paul-anderie/strategie">Termin buchen</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
