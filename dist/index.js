"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var f=s(function(c,u){
var a=require('@stdlib/math-base-assert-is-positive-zerof/dist'),t=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/constants-float32-pinf/dist');function o(e,r){return t(e)||t(r)?NaN:e===i||r===i?i:e===r&&e===0?a(e)?e:r:e>r?e:r}u.exports=o
});var v=f();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
