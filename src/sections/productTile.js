import React from "react"
import { Image, Box, Heading, Text } from "rebass"
import { Link } from "gatsby"
import theme from "../components/structure/theme"
import productImage from "../images/productImage.png"
import MyButton from "../components/myButton"

const mockData = {
  category: "DZIAŁANIE",
  header: "Hypoalergiczne serum do rzęs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  buttonHref: "#",
}

const ProductTile = props => (
  <Box width={["320px"]} css={{ textAlign: "center" }} my={[5]} mx={[0, 6, 7]}>
    <Image src={productImage} />
    <Heading
      textAlign="center"
      fontFamily="frank"
      fontSize={[6]}
      mx={["15%"]}
      my={[5]}
      fontWeight="300"
    >
      Hypoalergiczne serum do rzęs
    </Heading>
    <Text
      textAlign="center"
      fontFamily="quicksand"
      fontSize={[3]}
      fontWeight="400"
      color={theme.color.gray}
      mb={[5]}
    >
      Polecany szczególnie do cienkich, jasnych i niewidocznych rzęs. Dzięki
      aktywnym składnikom pielęgnuje rzęsy i nadaje im czarny, lśniący kolor.
    </Text>
    <a target="_blank" href={mockData.buttonHref} rel="noopener noreferrer">
      <MyButton variant="primary">kup produkt</MyButton>
    </a>
    <Link to={mockData.buttonHref}>
      <MyButton variant="link">DOWIEDŹ SIĘ WIĘCEJ</MyButton>
    </Link>
  </Box>
)

export default ProductTile