"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = react_native_1.Dimensions.get("window").width;
exports.screenHeight = react_native_1.Dimensions.get("window").height;
var parseSize = function (size) {
    if (size.endsWith("%")) {
        var percentage = parseFloat(size) / 100;
        return exports.screenWidth * percentage;
    }
    return parseFloat(size);
};
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
var Size = function (lg, md, sm) {
    var getResponsiveValue = function (value, factor) {
        if (typeof value === "string") {
            return parseSize(value);
        }
        return value * exports.screenWidth * factor;
    };
    if (exports.screenWidth <= 399 && sm !== undefined) {
        return getResponsiveValue(sm, 0.0025);
    }
    if (exports.screenWidth >= 400 && exports.screenWidth <= 599 && md !== undefined) {
        return getResponsiveValue(md, 0.002);
    }
    if (exports.screenWidth >= 600 && exports.screenWidth <= 767 && lg !== undefined) {
        return getResponsiveValue(lg, 0.0015);
    }
    return getResponsiveValue(lg, 0.0025);
};
exports.default = Size;
