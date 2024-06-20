"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.size_sm = exports.size_md = exports.size_lg = exports.size_xl = exports.size = exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
exports.screenWidth = Math.round(react_native_1.Dimensions.get('window').width);
exports.screenHeight = Math.round(react_native_1.Dimensions.get('window').height);
var responsiveWidth = Math.round(exports.screenWidth * 0.0025);
var responsiveHeight = Math.round(exports.screenHeight * 0.00125);
var size = function (size) { return size * responsiveWidth; };
exports.size = size;
var size_xl = function (size) {
    return exports.screenWidth > 600 ? (size / 1.25) * responsiveWidth : size * responsiveWidth;
};
exports.size_xl = size_xl;
var size_lg = function (size) {
    return exports.screenWidth > 600 ? (size / 1.5) * responsiveWidth : size * responsiveWidth;
};
exports.size_lg = size_lg;
var size_md = function (size) {
    return exports.screenWidth > 600 ? (size / 1.75) * responsiveWidth : size * responsiveWidth;
};
exports.size_md = size_md;
var size_sm = function (size) {
    return exports.screenWidth > 600 ? (size / 2) * responsiveWidth : size * responsiveWidth;
};
exports.size_sm = size_sm;
