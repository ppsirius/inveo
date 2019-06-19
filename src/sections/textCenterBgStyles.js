import styled from "styled-components"
import theme from "../components/structure/theme"
import BackgroundImage from "gatsby-background-image"

export const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  height: ${props => props.height || "auto"};
  color: ${props => props.color || theme.color.white};
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`