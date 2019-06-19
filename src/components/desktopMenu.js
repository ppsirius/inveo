import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { Flex, Box } from "rebass"
import { MenuLinkStyled, MenuLinkWrapperStyled } from "./desktopMenuStyles"

const DesktopMenu = ( props ) => {
  const menuLinks = props.data.allPrismicMainMenu.edges[0].node.data.links
  const menuLinksComponent = menuLinks.filter(e => e.link.text.length > 0).map(e =>
    <Box
      key={e.title.text}
    >
      <MenuLinkStyled
        to={`/${e.link.text}`}
        activeClassName="active"
      >
        {e.title.text}
      </MenuLinkStyled>
    </Box>
    )

  return (
    <MenuLinkWrapperStyled>
      <Flex
        width={[0, 0, 1]}
      >
        {menuLinksComponent}
      </Flex>
    </MenuLinkWrapperStyled>
  )
}

const ConnectedDesktopMenu = connect(
  state => (
    { mobileMenuActive: state.reducer.mobileMenuActive }
  )
)(DesktopMenu);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicMainMenu {
          edges {
            node {
              data {
                links {
                  title {
                    text
                  }
                  link {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ConnectedDesktopMenu data={data} {...props} />}
  />
)
