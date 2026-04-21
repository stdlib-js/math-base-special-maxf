"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=n(function(q,u){
var s=require('@stdlib/math-base-assert-is-positive-zerof/dist'),t=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/constants-float32-pinf/dist');function a(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?s(e)?e:r:e>r?e:r}u.exports=a
});var o=f();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
