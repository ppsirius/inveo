import styled from "styled-components"
import { Flex } from "rebass"
import theme from "../components/structure/theme"

export const RecomendedProductGridStyled = styled(Flex)`
  @media (min-width: ${theme.breakpoints[0]}) {
    height: 710px;
    overflow: hidden;
  }
`