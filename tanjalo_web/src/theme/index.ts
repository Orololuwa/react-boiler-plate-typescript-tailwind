import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { primaryFont, typeScale } from "./typography";
import { breakpoints } from "./mediaQueries";

const theme: DefaultTheme = {
  colors,
  primaryFont,
  typeScale,
  breakpoints,
};

export * from "./colors";
export * from "./typography";
export * from "./mediaQueries";
export default theme;
