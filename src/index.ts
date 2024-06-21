import {Dimensions} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

let responsiveWidth = screenWidth * 0.0025;

interface BreakPoint {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  fixed?: number;
}

type SizeInput = number | BreakPoint | string;

const parseSize = (input: string): number => {
  if (input.endsWith('%')) {
    const percentage = parseFloat(input) / 100;
    return screenWidth * percentage;
  }
  return parseFloat(input) * responsiveWidth;
};

/**
 * Size of the element Size(30), can also be passed as size in the object.
 *
 *Size({xs:30, sm:28, md:22, lg:18, xl:16, xxl:15})
 *
 *1. xs is for screen that is smaller than 399.
 *2. sm is for screen that is between 400 to 599.
 *3. md is for screen that is between 600 to 767.
 *4. lg is for screen that is between 768 to 1007.
 *5. xl is for screen that is between 1008 to 1279
 *6. xxl is for screen that is greater than 1280.
 *
 * xs, sm is mostly size for mobiles
 *
 * md is used for tablets
 *
 * other sizes often used for desktop devices
 *
 *if you provide Size for single screen than must provide fixed Size for all other screens
 * Size({xs:25, fixed: 20})
 *
 * You can also provide percentage Size("4%")
 *
 */
const Size = (input: SizeInput): number => {
  if (typeof input === 'number') {
    return input * responsiveWidth;
  }

  if (typeof input === 'string') {
    return parseSize(input);
  }

  let {xs, sm, md, lg, xl, xxl, fixed} = input as BreakPoint;
  const values = Object.values(input)
    .filter(value => value !== undefined)
    .sort((a, b) => a - b);

  if (values.length < 6) {
    if (
      xxl !== undefined &&
      xl === undefined &&
      lg === undefined &&
      md === undefined &&
      sm === undefined &&
      xs === undefined
    ) {
      xs = sm = md = lg = xl = xxl;
    }
    if (
      xl !== undefined &&
      lg === undefined &&
      md === undefined &&
      sm === undefined &&
      xs === undefined
    ) {
      xs = sm = md = lg = xl;
    }

    if (
      lg !== undefined &&
      md === undefined &&
      sm === undefined &&
      xs === undefined
    ) {
      xs = sm = md = lg;
    }

    if (md !== undefined && sm === undefined && xs === undefined) {
      xs = sm = md;
    }

    if (sm !== undefined && xs === undefined) {
      xs = sm;
    }
  }

  const getResponsiveValue = (value: number) => value * responsiveWidth;

  if (screenWidth <= 399 && xs !== undefined) return getResponsiveValue(xs)!;
  if (screenWidth >= 400 && screenWidth <= 599 && sm !== undefined)
    return getResponsiveValue(sm)!;
  if (screenWidth >= 600 && screenWidth <= 767 && md !== undefined)
    return getResponsiveValue(md)!;
  if (screenWidth >= 768 && screenWidth <= 1007 && lg !== undefined)
    return getResponsiveValue(lg)!;
  if (screenWidth >= 1008 && screenWidth <= 1279 && xl !== undefined)
    return getResponsiveValue(xl)!;
  if (screenWidth >= 1280 && screenWidth <= 1535 && xxl !== undefined)
    return getResponsiveValue(xxl)!;

  return fixed !== undefined
    ? getResponsiveValue(fixed)!
    : getResponsiveValue(values[values.length - 1])!;
};

export default Size;
