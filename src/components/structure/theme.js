// Colors
const white = "#fff"
const almostWhite = "#F7F8FA"
const gray = "#383838"
const lightGray = "#ececec"
const lighterGray = "#AEAEAE"
const black = "#383838"
const blackBg = "#0C0C0C"
const blue = "#68cfff"
const cream = "#F7E4A6"
const creamBg = "#FCF5DD"

/*
base font 16px
768px = 48em
1024px = 64em
1366px = 85.375em
*/

const buttonsStyle = {
  borderRadius: 0,
  textTransform: "uppercase",
  outline: "none",
  whiteSpace: "nowrap",
  cursor: "pointer",
}

export default {
  breakpoints: ["48em", "64em", "85.375em"],
  //           0   1   2   3   4   5   6   7   8   9
  fontSizes: [10, 12, 14, 16, 20, 22, 32, 42, 52, 64],
  //      0  1  2   3   4   5   6   7   8   9   10
  space: [0, 4, 8, 12, 16, 20, 24, 40, 54, 80, 160],
  fonts: {
    quicksand: "Quicksand, sans-serif",
    frank: "Frank Ruhl Libre, serif",
  },
  fontWeight: [300, 700],
  buttons: {
    primary: {
      color: white,
      backgroundColor: blackBg,
      ...buttonsStyle
    },
    secondary: {
      color: gray,
      backgroundColor: white,
      ...buttonsStyle
    },
    link: {
      color: blackBg,
      backgroundColor: "transparent",
      ...buttonsStyle
    },
  },
  color: {
    white,
    gray,
    black,
    blackBg,
    blue,
    cream,
    lightGray,
    lighterGray,
    creamBg,
    almostWhite,
  },
}