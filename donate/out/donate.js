!function(n){function e(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e,t){"use strict";function o(){if(!c){c=!0,$("#donateModal-472c107b229").modal("hide");var n=$("#amount-472c107b229").val(),e=void 0;e=0==n||isNaN(n)?13.5:.3*n,e=Math.round(100*e)/100;var t=""+e;if(-1!==t.indexOf(".")){var o=t.indexOf(".");1==t.slice(o+1).length&&(t+="0")}$("#donate-upgrade-amount").html(t),$("#donate-upgrade-modal").modal("show")}}e.a=o;var a=window.ga||function(){},i='\n<style>\n#upgrade-modal {\n    z-index: 1000000;\n}\n#donate-upgrade-modal-header {\n    font-size: 120%;\n    text-transform: uppercase;\n    text-align: center;\n}\n#return-to-one-time-donation {\n    float: left;\n    font-size: 60%;\n    padding: 10px 0;\n    border: none;\n    background: none;\n}\n#return-to-one-time-donation:hover {\n    color: black;\n    decoration: underline;\n}\n#go-to-monthly-donation {\n    float: right;\n    font-size: 60%;\n    padding: 10px;\n}\n</style>\n\n<div class="modal" id="donate-upgrade-modal">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n        <h4 class="modal-title" id="donate-upgrade-modal-header">Become a Monthly Donor</h4>\n\n      </div>\n      <div class="modal-body">\n        <p>Thank you for choosing to donate to DxE&#39;s life saving work.</p>\n        <p>\n          For a limited time only, <strong>every new monthly donor</strong> (in any amount) earns DxE a <strong>bonus\n            $100 grant</strong> from our generous monthly donor.\n        </p>\n        <p>\n          Would you like make a $<span id="donate-upgrade-amount"></span> monthly donation and earn DxE a <strong>bonus $100</strong>?\n        </p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="sqs-editable-button" id="return-to-one-time-donation">No, I want to donate once. </button>\n        <button type="button" class="sqs-editable-button" data-dismiss="modal" id="go-to-monthly-donation">Yes, I&#39;ll become a monthly donor!</button>\n      </div>\n    </div>\n  </div>\n</div>\n  ',d={monthlySelected:!1};!function(){$("body").append(i),$("#return-to-one-time-donation").on("click",function(){$("#donate-upgrade-modal").modal("hide"),$("#donateModal-472c107b229").modal("show")}),$("#go-to-monthly-donation").on("click",function(){d.monthlySelected=!0,$("#donate-upgrade-modal").modal("hide"),$(".dxe-donate-monthly").click(),f230.setAmount($("#donate-upgrade-amount").text()),$(".js-amount").removeClass("active"),a("ec:addPromo",{id:"UPGRADE_TO_MONTHLY",name:"Upgrade to Monthly"}),a("ec:setAction","promo_click"),a("send","event","Internal Promotions","click","Upgrade to Monthly")})}();var c=!1},function(n,e,t){"use strict";function o(){return Math.floor(1e10*Math.random()).toString()}function a(){p=!0,u("ec:addProduct",{id:"DM",name:"Donate Monthly"}),u("ec:setAction","checkout",{step:1,affiliation:l}),u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Monthly"}),u("ec:addProduct",{id:"DM",name:"Donate Monthly"}),u("ec:setAction","add",{affiliation:l}),u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Monthly"}),v||($(".submit-button-"+f.monthly).on("click",d),v=!0)}function i(n){var e=f[n];if(!e)throw new Error("invalid donation type: "+n);var t="#headerAmount-"+e,o=parseInt($(t+" .money__dollars").text()),a=parseInt($(t+" .money__cents").text());if(isNaN(o)||isNaN(a))throw new Error("invalid dollar amount");return o+"."+a}function d(n){setTimeout(function(){var e=$(n.target),t=e.text();if(-1!==t.indexOf("Payment Info"))y=!1,u("ec:addProduct",{id:"DM",name:"Donate Monthly"}),u("ec:setAction","checkout",{step:2,affiliation:l});else if(-1!==t.indexOf("Submit Donation"))if(y){y=!1;var a=i("monthly");u("ec:addProduct",{id:"DM",name:"Donate Monthly",price:a,quantity:1}),u("ec:setAction","purchase",{id:o(),affiliation:l,revenue:a}),window.fundraiser&&window.fundraiser.setRecentDonor&&window.fundraiser.setRecentDonor(),m("track","DonateMonthlyCompleted")}else y=!0,u("ec:addProduct",{id:"DM",name:"Donate Monthly"}),u("ec:setAction","checkout",{step:3,affiliation:l});u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Monthly Checkout"})},h)}function c(){p=!0,u("ec:addProduct",{id:"DO",name:"Donate Once"}),u("ec:setAction","checkout",{step:1}),u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Once"}),u("ec:addProduct",{id:"DO",name:"Donate Once"}),u("ec:setAction","add"),u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Once"}),g||($(".submit-button-"+f.once).on("click",r),g=!0)}function r(n){p&&(t.i(s.a)(),p=!1),setTimeout(function(){var e=$(n.target),t=e.text();if(-1!==t.indexOf("Payment Info"))D=!1,u("ec:addProduct",{id:"DO",name:"Donate Once"}),u("ec:setAction","checkout",{step:2});else if(-1!==t.indexOf("Submit Donation"))if(D){D=!1;var a=i("once");u("ec:addProduct",{id:"DO",name:"Donate Once",price:a,quantity:1}),u("ec:setAction","purchase",{id:o(),affiliation:"Donate Page",revenue:a}),m("track","DonateOnceCompleted")}else D=!0,u("ec:addProduct",{id:"DO",name:"Donate Once"}),u("ec:setAction","checkout",{step:3});u("send","event",{eventCategory:"Donate",eventAction:"click",eventLabel:"Once Checkout"})},h)}Object.defineProperty(e,"__esModule",{value:!0});var l,s=t(0),u=window.ga||function(){},m=window.fbq||function(){};!function(){var n=window.location.href,e=n.match(/[?&]campaign=([^&]*)/);l=e?e[1]:"Donate Page"}(),u("require","ec");var f={monthly:"472c107b230",once:"472c107b229"};!function(){u("ec:addProduct",{id:"DO",name:"Donate Once"}),u("ec:addProduct",{id:"DM",name:"Donate Monthly"}),u("ec:addImpression",{id:"DM",name:"Donate Monthly",list:"Donate Page",position:1}),u("ec:addImpression",{id:"DO",name:"Donate Once",list:"Donate Page",position:2}),u("ec:setAction","detail",{affiliation:l}),u("send","event",{eventCategory:"Donate",eventAction:"impression",eventLabel:"Donate Page"})}();var v=!1,p=!1;$(".dxe-donate-monthly").on("click",a);var h=250,y=!1,g=!1;$(".dxe-donate-once").on("click",c);var D=!1}]);