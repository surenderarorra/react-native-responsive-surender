import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const responsiveWidth = screenWidth * 0.0025;

interface BreakPoint {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

type SizeInput = number | BreakPoint;

export const size = (input: SizeInput) => {
  if (typeof input === "number") {
    return input * responsiveWidth;
  }

  const { xs, sm, md, lg, xl, xxl } = input;

  if (screenWidth <= 399 && xs) return xs * responsiveWidth;
  if (screenWidth >= 400 && screenWidth <= 599 && sm)
    return sm * responsiveWidth;
  if (screenWidth >= 600 && screenWidth <= 767 && md)
    return md * responsiveWidth;
  if (screenWidth >= 768 && screenWidth <= 1007 && lg)
    return lg * responsiveWidth;
  if (screenWidth >= 1008 && screenWidth <= 1279 && xl)
    return xl * responsiveWidth;
  if (screenWidth >= 1280 && screenWidth <= 1535 && xxl)
    return xxl * responsiveWidth;
};
