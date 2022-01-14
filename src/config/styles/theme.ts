/* COMPONENTS */
import { DefaultTheme } from "styled-components/native";

/* CONFIGS */
import COLORS from "./colors"

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    subtitleColor: string;
    blurBg: string,
    dataContainer: string
  }
}

export const defaultTheme: DefaultTheme = {
	primaryColor: COLORS.PRIMARY_COLOR,
	secondaryColor: COLORS.SECONDARY_COLOR,
  subtitleColor: COLORS.SUBTITLE_COLOR,
  blurBg: COLORS.BLUR_BG,
  dataContainer: COLORS.WHITE
};
