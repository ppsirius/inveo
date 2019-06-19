import styled from "styled-components"
import theme from "./structure/theme"
import Logo from "../images/inveo_logo_cream.inline.svg"
import { Box } from "rebass"

export const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.color.blackBg};
  color: ${theme.color.white};
  width: 100vw;
  height: 100vh;
  transform: ${props =>
    props.mobileMenuActive ? "translateX(0)" : "translateX(-110vw)"};
  opacity: ${props => (props.mobileMenuActive ? 1 : 0)};
  transition: all 0.2s ease-in;
  z-index: 100;
`

export const MenuListElementStyled = styled(Box)`
  width: 100%;
  text-align: center;
  fontweight: 300;
  color: ${theme.color.white};
  font-size: ${theme.fontSizes[7]}px;
  font-family: ${theme.fonts.frank};
  cursor: pointer;
`

export const StyledLogo = styled(Logo)`
  position: relative;
  width: 160px;
`