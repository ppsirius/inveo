import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Flex, Box, Image } from "rebass"
import theme from "./structure/theme"
import fb from "../images/fb.svg"
import instagram from "../images/instagram.svg"
import hamburger from "../images/hamburger.svg"
import { actions } from "../state/app"
import DesktopMenu from "./desktopMenu"
import { HeaderStyled, HamburgerStyled, LogoStyled, SocialMenuWrapper, SocialIconsStyled, SocialeMenuButtonStyled } from "./headerStyles"

const Header = props => {
  return (
    <HeaderStyled>
      <Flex
        bg={theme.color.white}
        px={5}
        py={5}
        alignItems="center"
        css={{
          fontFamily: theme.fonts.quicksand,
          color: theme.color.black,
          fontSize: theme.fontSizes[2],
          fontWeight: theme.fontWeight[1],
        }}
      >
        <Box width={[1 / 4]}>
          <HamburgerStyled
            width={[24, 24, 0]}
            src={hamburger}
            onClick={() => props.toggleMenu()}
          />
          <DesktopMenu />
        </Box>

        <Flex width={[1]} justifyContent="center">
          <Link
            to={`/`}
            css={{
              textDecoration: "none",
              color: theme.color.black,
            }}
          >
            <LogoStyled />
          </Link>
        </Flex>

        <Flex width={[1 / 4]} justifyContent="flex-end">
          <SocialMenuWrapper onClick={() => props.toggleSocialMenu()}>
            <SocialeMenuButtonStyled />
          </SocialMenuWrapper>
          <SocialIconsStyled>
            {/* eslint-disable-next-line */}
            <a href="#" target="_blank">
              <Image
                width="32px"
                src={fb}
                css={{
                  marginRight: "8px",
                  maxWidth: "initial",
                }}
              />
            </a>
            {/* eslint-disable-next-line */}
            <a href="#" target="_blank">
              <Image
                width="32px"
                src={instagram}
                css={{
                  maxWidth: "initial",
                }}
              />
            </a>
          </SocialIconsStyled>
        </Flex>
      </Flex>
    </HeaderStyled>
  )
}

const mapStateToProps = state => {
  return {
    state: state.reducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch({ type: actions.TOGGLE_MOBILE_MENU }),
    toggleSocialMenu: () => dispatch({ type: actions.TOGGLE_SOCIAL_MENU }),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
