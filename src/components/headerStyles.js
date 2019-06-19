import { Box, Image } from "rebass"
import styled from "styled-components"
import theme from "./structure/theme"
import Logo from "../images/inveo_logo.inline.svg"

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
`

export const HamburgerStyled = styled(Image)`
  @media (min-width: ${theme.breakpoints[1]}) {
    display: none;
  }
`
export const LogoStyled = styled(Logo)`
  position: relative;
  width: 160px;
`

export const SocialMenuWrapper = styled(Box)`
  @media (min-width: ${theme.breakpoints[1]}) {
    display: none;
  }
`

export const SocialIconsStyled = styled(Box)`
  display: none;

  @media (min-width: ${theme.breakpoints[1]}) {
    display: block;
  }
`

export const SocialeMenuButtonStyled = styled("div")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${theme.color.cream};
`