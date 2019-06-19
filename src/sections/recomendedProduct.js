import React from "react"
import { Box, Heading } from "rebass"
import theme from "../components/structure/theme"
import { RecomendedProductGridStyled } from "./recomendedProductStyles"
import ProductTile from "./productTile"

const RecomendedProduct = props => (
  <>
    <Box>
      <Heading
        textAlign="center"
        fontFamily="frank"
        fontSize={[7]}
        mx={["13%"]}
        mt={[9]}
        mb={[8]}
        color={theme.color.gray}
        fontWeight="300"
      >
        Produkty, które mogą Cię zainteresować
      </Heading>
    </Box>
    <RecomendedProductGridStyled
      flexDirection={["column", "row"]}
      flexWrap={["wrap"]}
      alignItems={["center"]}
      justifyContent={[null, "center"]}
      mb={[7, 7, 9]}
    >
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
    </RecomendedProductGridStyled>
  </>
)

export default RecomendedProduct
