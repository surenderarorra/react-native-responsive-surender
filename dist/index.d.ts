export declare const screenWidth: number;
export declare const screenHeight: number;
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
declare const Size: (input: SizeInput) => number;
export default Size;
