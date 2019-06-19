import React from 'react'
import { Flex } from "rebass"
import { FooterStyled } from "./footerStyles"

const Footer = props => (
  <FooterStyled>
    <Flex justifyContent="center">
      Copyright © INVEO {new Date().getFullYear()}
    </Flex>
  </FooterStyled>
)

export default Footer