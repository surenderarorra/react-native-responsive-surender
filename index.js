import { Dimensions } from "react-native";

export const screenWidth = Math.round(Dimensions.get("window").width);
export const screenHeight = Math.round(Dimensions.get("window").height);

const responsiveWidth = Math.round(screenWidth * 0.0025);
const responsiveHeight = Math.round(screenHeight * 0.00125);

export const size = (size) => size * responsiveWidth;

export const size_xl = (size) =>
  screenWidth > 600 ? (size / 1.25) * responsiveWidth : size * responsiveWidth;

export const size_lg = (size) =>
  screenWidth > 600 ? (size / 1.5) * responsiveWidth : size * responsiveWidth;

export const size_md = (size) =>
  screenWidth > 600 ? (size / 1.75) * responsiveWidth : size * responsiveWidth;

export const size_sm = (size) =>
  screenWidth > 600 ? (size / 2) * responsiveWidth : size * responsiveWidth;
