import styled from "styled-components"
import theme from "../components/structure/theme"

export const SectionStyled = styled.section`
  height: ${props => props.height || "auto"};
  color: ${props => props.color || theme.color.white};
  background: ${props => props.bg || "transparent"};
`
