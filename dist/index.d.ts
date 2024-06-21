export declare const screenWidth: number;
export declare const screenHeight: number;
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
declare const Size: (lg: SizeInput, md?: SizeInput, sm?: SizeInput) => number;
export default Size;
