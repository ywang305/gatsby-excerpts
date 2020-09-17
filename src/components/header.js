import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      display: "flex",
      alignItems: "center",
      variant: "styles.header",
      px: 3,
      py: 4,
      background: "rebeccapurple",
    }}
  >
    <Link
      to="/"
      sx={{
        variant: "styles.navlink",
        p: 2,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
