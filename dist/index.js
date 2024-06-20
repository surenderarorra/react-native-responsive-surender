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
    if (exports.screenWidth <= 399 && xs)
        return xs * responsiveWidth;
    if (exports.screenWidth >= 400 && exports.screenWidth <= 599 && sm)
        return sm * responsiveWidth;
    if (exports.screenWidth >= 600 && exports.screenWidth <= 767 && md)
        return md * responsiveWidth;
    if (exports.screenWidth >= 768 && exports.screenWidth <= 1007 && lg)
        return lg * responsiveWidth;
    if (exports.screenWidth >= 1008 && exports.screenWidth <= 1279 && xl)
        return xl * responsiveWidth;
    if (exports.screenWidth >= 1280 && exports.screenWidth <= 1535 && xxl)
        return xxl * responsiveWidth;
};
exports.size = size;
