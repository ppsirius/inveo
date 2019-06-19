import React from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import theme from "./structure/theme"
import { connect } from "react-redux"
import { Flex, Box, Image, Text } from "rebass"
import close from "../images/close_white.svg"
import { actions } from "../state/app"
import { MenuStyled, MenuListElementStyled, StyledLogo } from "./mobileMenuStyles"

const MobileMenu = props => {
  const menuLinks = props.data.allPrismicMainMenu.edges[0].node.data.links
  const menuLinksComponent = menuLinks.map(e => (
    <Box width={1} key={e.title.text}>
      <MenuListElementStyled
        py={[2, 3]}
        onClick={() => {
          props.toggleMenu()
          navigate(`/${e.link.text}`)
        }}
      >
        {e.title.text}
      </MenuListElementStyled>
    </Box>
  ))

  return (
    <MenuStyled mobileMenuActive={props.mobileMenuActive}>
      <Flex
        flexDirection="column"
        css={{
          height: "100%",
        }}
      >
        <Flex p={6}>
          <Box width={[1 / 4]}>
            <Image width={[22]} src={close} onClick={() => props.toggleMenu()} />
          </Box>
          <Flex justifyContent={"center"} width={[1]}>
            <div>
              <StyledLogo />
            </div>
          </Flex>
          <Box width={[1 / 4]} />
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          css={{
            height: "25%",
          }}
        >
          <Text
            fontSize={[2]}
            fontWeight="700"
            fontFamily={theme.fonts.quicksand}
            color={theme.color.cream}
            letterSpacing="3px"
          >
            MENU
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          p={5}
          css={{
            height: "75%",
          }}
        >
          {menuLinksComponent}
        </Flex>

        <Text
          fontSize={[1]}
          color="#717171"
          textAlign="center"
          fontFamily={theme.fonts.quicksand}
          p={5}
        >
          Copyright © INVEO 2019
        </Text>
      </Flex>
    </MenuStyled>
  )
}

const mapStateToProps = state => {
  return {
    mobileMenuActive: state.reducer.mobileMenuActive,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch({ type: actions.TOGGLE_MOBILE_MENU }),
  }
}

const ConnectedMobileMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu)

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
    render={data => <ConnectedMobileMenu data={data} {...props} />}
  />
)
