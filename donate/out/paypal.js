!function(n){function e(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=2)}({2:function(n,e){var t=window.ga||function(){},o=window.fbq||function(){},o=window._paq||function(){};t("require","ec"),function(){var n=window.location.href,e=n.match(/[?&]donation_id=([^&]*)/),a=void 0,r=void 0;e?(a=e[1],(e=n.match(/[?&]amount=([^&]*)/))?(r=e[1],t("ec:addProduct",{id:"DO",name:"Donate Once",price:r,quantity:1,variant:"Paypal"}),t("ec:setAction","purchase",{id:a,affiliation:"Donate Page",revenue:r}),t("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Once Checkout"}),o("track","DonateOnceCompleted"),_paq.push(["trackEvent","Donate","Donate Once Completed","Donate Once",r])):console.log("Could not read amount")):console.log("Could not read donation_id")}()}});