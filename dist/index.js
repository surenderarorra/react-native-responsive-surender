"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = react_native_1.Dimensions.get("window").width;
exports.screenHeight = react_native_1.Dimensions.get("window").height;
var responsiveWidth = exports.screenWidth * 0.0025;
var size = function (input) {
    if (typeof input === "number") {
        return input * responsiveWidth;
    }
    var xs = input.xs, sm = input.sm, md = input.md, lg = input.lg, xl = input.xl, xxl = input.xxl;
    var values = Object.values(input)
        .filter(function (value) { return value !== undefined; })
        .sort(function (a, b) { return a - b; });
    if (exports.screenWidth <= 399 && xs !== undefined)
        return xs * responsiveWidth;
    if (exports.screenWidth >= 400 && exports.screenWidth <= 599 && sm !== undefined)
        return sm * responsiveWidth;
    if (exports.screenWidth >= 600 && exports.screenWidth <= 767 && md !== undefined)
        return md * responsiveWidth;
    if (exports.screenWidth >= 768 && exports.screenWidth <= 1007 && lg !== undefined)
        return lg * responsiveWidth;
    if (exports.screenWidth >= 1008 && exports.screenWidth <= 1279 && xl !== undefined)
        return xl * responsiveWidth;
    if (exports.screenWidth >= 1280 && exports.screenWidth <= 1535 && xxl !== undefined)
        return xxl * responsiveWidth;
    return values.length > 0 ? values[values.length - 1] * responsiveWidth : 0;
};
exports.size = size;
