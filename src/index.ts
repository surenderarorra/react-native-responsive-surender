import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const parseSize = (size: string): number => {
  if (size.endsWith("%")) {
    const percentage = parseFloat(size) / 100;
    return screenWidth * percentage;
  }
  return parseFloat(size);
};

type SizeInput = number | string;

/**
 * Size(30) is used for all screen sizes
 *
 * for specific screen pass values Size(lg,md,sm)
 *
 * 1. lg is for screen that is between 600 to 767.
 * 2. md is for screen that is between 400 to 599.
 * 3. sm is for screen that is smaller than 399.
 *
 * lg is used for tablets
 * sm, md is mostly size for mobiles
 *
 * You can also provide percentage Size("4%") for all screens
 *
 * for specific screen pass values Size("5%", "10%", "15%")
 */

const Size = (lg: SizeInput, md?: SizeInput, sm?: SizeInput) => {
  const getResponsiveValue = (value: SizeInput, factor: number) => {
    if (typeof value === "string") {
      return parseSize(value);
    }
    return value * screenWidth * factor;
  };

  if (screenWidth <= 399 && sm !== undefined) {
    return getResponsiveValue(sm, 0.0025);
  }
  if (screenWidth >= 400 && screenWidth <= 599 && md !== undefined) {
    return getResponsiveValue(md, 0.002);
  }
  if (screenWidth >= 600 && screenWidth <= 767 && lg !== undefined) {
    return getResponsiveValue(lg, 0.0015);
  }
  return getResponsiveValue(lg, 0.0025);
};

export default Size;
