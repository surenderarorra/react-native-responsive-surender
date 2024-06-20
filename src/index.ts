import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const responsiveWidth = screenWidth * 0.0025;

interface BreakPoint {
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

  const { sm, md, lg, xl, xxl } = input;

  if (screenWidth <= 399 && sm) return sm * responsiveWidth;
  if (screenWidth >= 400 && screenWidth <= 599 && md)
    return md * responsiveWidth;
  if (screenWidth >= 600 && screenWidth <= 767 && lg)
    return lg * responsiveWidth;
  if (screenWidth >= 768 && screenWidth <= 1007 && xl)
    return xl * responsiveWidth;
  if (screenWidth >= 1008 && screenWidth <= 1279 && xxl)
    return xxl * responsiveWidth;

  return 0;
};
