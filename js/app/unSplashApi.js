"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPh = void 0;
var unsplash_js_1 = require("unsplash-js");
var config_1 = require("../config");
var node_fetch_1 = __importDefault(require("node-fetch"));
if (!globalThis.fetch) {
    globalThis.fetch = node_fetch_1.default;
}
var unsplash = unsplash_js_1.createApi({ accessKey: config_1.MY_ACCESS_KEY });
var searchPh = unsplash.photos.getRandom({
    count: 20
})
    .then(function (data) {
    if (data.errors) {
        // handle error here
        console.log('error occurred: ', data.errors[0]);
    }
    else {
        // handle success here
        var result = data.response;
        var images = [];
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var image = result_1[_i];
            images.push(image.urls.regular);
            console.log(image);
        }
        // according to the photos' data structure
        return images;
    }
});
exports.searchPh = searchPh;
