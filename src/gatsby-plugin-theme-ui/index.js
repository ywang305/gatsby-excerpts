import { dark, deep } from "@theme-ui/presets"

export default {
  ...deep,
  breakpoints: ["300px", "56em", "64em"],
  styles: {
    navlink: {
      color: `text`,
      textDecoration: `none`,
      fontSize: 3,
      p: 2,
    },
  },
}
