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

export const size = (input: SizeInput): number => {
  if (typeof input === "number") {
    return input * responsiveWidth;
  }

  const { xs, sm, md, lg, xl, xxl } = input;
  const values = Object.values(input)
    .filter((value) => value !== undefined)
    .sort((a, b) => a! - b!);

  if (screenWidth <= 399 && xs !== undefined) return xs * responsiveWidth;
  if (screenWidth >= 400 && screenWidth <= 599 && sm !== undefined)
    return sm * responsiveWidth;
  if (screenWidth >= 600 && screenWidth <= 767 && md !== undefined)
    return md * responsiveWidth;
  if (screenWidth >= 768 && screenWidth <= 1007 && lg !== undefined)
    return lg * responsiveWidth;
  if (screenWidth >= 1008 && screenWidth <= 1279 && xl !== undefined)
    return xl * responsiveWidth;
  if (screenWidth >= 1280 && screenWidth <= 1535 && xxl !== undefined)
    return xxl * responsiveWidth;

  return values.length > 0 ? values[values.length - 1]! * responsiveWidth : 0;
};
