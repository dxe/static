!function(){"use strict";var n=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n},e="UA-37998621-1",t="1",r="(not set)",i={TRACKING_VERSION:"dimension1",CLIENT_ID:"dimension2",WINDOW_ID:"dimension3",HIT_ID:"dimension4",HIT_TIME:"dimension5",HIT_TYPE:"dimension6",HIT_SOURCE:"dimension7",VISIBILITY_STATE:"dimension8"},o={RESPONSE_END_TIME:"metric1",DOM_LOAD_TIME:"metric2",WINDOW_LOAD_TIME:"metric3"},a=function(){window.ga=window.ga||function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return(ga.q=ga.q||[]).push(e)},u(),c(),I(),s(),v(),g()},c=function(){ga("require","cleanUrlTracker",{stripQuery:!1,indexFilename:"index.html",trailingSlash:"remove"}),ga("require","outboundLinkTracker")},d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ga("send","event",Object.assign({eventCategory:"Script",eventAction:"error",eventLabel:n&&n.stack||r,nonInteraction:!0},e))},u=function(){ga("create",e,"auto"),ga("set","transport","beacon")},I=function(){var n=window.__e&&window.__e.q||[],e={eventAction:"uncaught error"},t=!0,r=!1,i=void 0;try{for(var o,a=n[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var c=o.value;d(c.error,e)}}catch(n){r=!0,i=n}finally{try{!t&&a.return&&a.return()}finally{if(r)throw i}}window.addEventListener("error",function(n){d(n.error,e)})},s=function(){Object.keys(i).forEach(function(n){ga("set",i[n],r)}),ga(function(n){var e={};e[i.TRACKING_VERSION]=t,e[i.CLIENT_ID]=n.get("clientId"),e[i.WINDOW_ID]=f(),n.set(e)}),ga(function(n){var e=n.get("buildHitTask");n.set("buildHitTask",function(n){n.set(i.HIT_ID,f(),!0),n.set(i.HIT_TIME,String(+new Date),!0),n.set(i.HIT_TYPE,n.get("hitType"),!0),n.set(i.VISIBILITY_STATE,document.visibilityState,!0),e(n)})})},g=function e(){if(window.performance&&window.performance.timing){if("complete"!=document.readyState)return void window.addEventListener("load",e);var t=performance.timing,r=t.navigationStart,i=Math.round(t.responseEnd-r),a=Math.round(t.domContentLoadedEventStart-r),c=Math.round(t.loadEventStart-r),d=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.every(function(n){return n>0&&n<1e6})};if(d(i,a,c)){var u;ga("send","event",(u={eventCategory:"Navigation Timing",eventAction:"track",nonInteraction:!0},n(u,o.RESPONSE_END_TIME,i),n(u,o.DOM_LOAD_TIME,a),n(u,o.WINDOW_LOAD_TIME,c),u))}}},v=function(){var n={};n[i.HIT_SOURCE]="pageload",ga("send","pageview",n)},f=function n(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,n)};a()}();