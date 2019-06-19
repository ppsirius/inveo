import styled from "styled-components"
import theme from "../components/structure/theme"
import Img from "gatsby-image"

export const SectionStyled = styled.section`
  height: ${props => props.height || "auto"};
  color: ${props => props.color || theme.color.white};
  background: ${props => (props.bg ? `url(${props.bg});` : "none")};
  background-size: ${props => props.bgSize || "cover"};
  background-position: ${props => props.bgPosition || "center"};
  background-color: ${props => props.bgColor || "transparent"};

  @media (min-width: ${theme.breakpoints[1]}) {
    height: 95vh;
  }
`

export const ImageWrapperStyled = styled(Img)`
  max-height: 30vh;

  @media (min-width: ${theme.breakpoints[0]}) {
    max-height: 60vh;
    height: 100%;
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    max-height: none;
    height: 100%;
  }
`