"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = react_native_1.Dimensions.get('window').width;
exports.screenHeight = react_native_1.Dimensions.get('window').height;
var responsiveWidth = exports.screenWidth * 0.0025;
var parseSize = function (input) {
    if (input.endsWith('%')) {
        var percentage = parseFloat(input) / 100;
        return exports.screenWidth * percentage;
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
var Size = function (input) {
    if (typeof input === 'number') {
        return input * responsiveWidth;
    }
    if (typeof input === 'string') {
        return parseSize(input);
    }
    var _a = input, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, xxl = _a.xxl, fixed = _a.fixed;
    var values = Object.values(input)
        .filter(function (value) { return value !== undefined; })
        .sort(function (a, b) { return a - b; });
    if (values.length < 6) {
        if (xxl !== undefined &&
            xl === undefined &&
            lg === undefined &&
            md === undefined &&
            sm === undefined &&
            xs === undefined) {
            xs = sm = md = lg = xl = xxl;
        }
        if (xl !== undefined &&
            lg === undefined &&
            md === undefined &&
            sm === undefined &&
            xs === undefined) {
            xs = sm = md = lg = xl;
        }
        if (lg !== undefined &&
            md === undefined &&
            sm === undefined &&
            xs === undefined) {
            xs = sm = md = lg;
        }
        if (md !== undefined && sm === undefined && xs === undefined) {
            xs = sm = md;
        }
        if (sm !== undefined && xs === undefined) {
            xs = sm;
        }
    }
    var getResponsiveValue = function (value) { return value * responsiveWidth; };
    if (exports.screenWidth <= 399 && xs !== undefined)
        return getResponsiveValue(xs);
    if (exports.screenWidth >= 400 && exports.screenWidth <= 599 && sm !== undefined)
        return getResponsiveValue(sm);
    if (exports.screenWidth >= 600 && exports.screenWidth <= 767 && md !== undefined)
        return getResponsiveValue(md);
    if (exports.screenWidth >= 768 && exports.screenWidth <= 1007 && lg !== undefined)
        return getResponsiveValue(lg);
    if (exports.screenWidth >= 1008 && exports.screenWidth <= 1279 && xl !== undefined)
        return getResponsiveValue(xl);
    if (exports.screenWidth >= 1280 && exports.screenWidth <= 1535 && xxl !== undefined)
        return getResponsiveValue(xxl);
    return fixed !== undefined
        ? getResponsiveValue(fixed)
        : getResponsiveValue(values[values.length - 1]);
};
exports.default = Size;
