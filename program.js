!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="build",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function p(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],p=t.base?i[0]+t.base:i[0],u=n[p]||0,s="".concat(p," ").concat(u);n[p]=u+1;var l=c(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:s,updater:b(d,t),references:1}),o.push(s)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=u(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=p(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=p(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]),t.push([e.i,'body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body h2{font-size:3rem}@media (max-width: 1600px){body h2{font-size:2.8rem}}@media (max-width: 1400px){body h2{font-size:2.5rem}}@media (max-width: 1200px){body h2{font-size:2.2rem}}@media (max-width: 420px){body h2{font-size:1.6rem}}@media (max-width: 380px){body h2{font-size:1.4rem}}@media (max-width: 360px){body h2{font-size:1.2rem}}@media (max-width: 320px){body h2{font-size:1.1rem}}.popup-gdpr{position:absolute;top:0;min-height:100vh;width:100%;font-family:"Open Sans", sans-serif;z-index:10000}@media (max-width: 1400px){.popup-gdpr{font-size:0.85rem}}@media (max-width: 420px){.popup-gdpr{font-size:0.8rem}}@media (max-width: 320px){.popup-gdpr{font-size:0.75rem}}.popup-gdpr__wrap{position:absolute;top:10%;left:22vw;width:50vw;height:70vh;padding:3vh 2vw;border-radius:5px;color:rgba(255,255,255,0.9);background-color:rgba(0,0,0,0.9);box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);text-align:center}@media (max-width: 1024px){.popup-gdpr__wrap{left:6vw;width:80vw;height:60vh}}@media (max-width: 420px){.popup-gdpr__wrap{height:70vh}}.popup-gdpr__title{text-transform:uppercase;letter-spacing:3px}.popup-gdpr__title--text{margin:3vh 0}@media (max-width: 1600px){.popup-gdpr__title--text{margin:0}}.popup-gdpr__table-wrap{height:40vh;border:1px solid rgba(255,255,255,0.8);overflow-y:scroll}.popup-gdpr__partners-table{position:relative;width:100%;padding-right:5vw}@media (max-width: 1024px){.popup-gdpr__partners-table input{height:20px;width:20px}}.popup-gdpr__link{color:#3869b4;transition:0.2s}.popup-gdpr__link:hover{color:#f54336}.popup-gdpr__buttons-wrap{display:flex;justify-content:space-around;margin:3vh 0;padding:0 15%}@media (max-width: 1200px){.popup-gdpr__buttons-wrap{padding:0 10%}}@media (max-width: 420px){.popup-gdpr__buttons-wrap{padding:0 5%}}@media (max-width: 320px){.popup-gdpr__buttons-wrap{margin:1.5vh 0}}.popup-gdpr__button{padding:10px 25px;border:1px solid rgba(255,255,255,0.8);border-radius:6px;font-size:1.3rem;color:rgba(255,255,255,0.9);background-color:transparent;cursor:pointer;transition:0.3s}.popup-gdpr__button.button--accept{background-color:#3869b4}.popup-gdpr__button.button--accept:hover{color:#3869b4;background-color:#fff}.popup-gdpr__button.button--reject:hover{background-color:#f54336}@media (max-width: 1400px){.popup-gdpr__button{padding:8px 20px;font-size:1.2rem}}@media (max-width: 420px){.popup-gdpr__button{padding:5px 12px;font-size:1rem}}@media (max-width: 320px){.popup-gdpr__button{padding:4px 10px;font-size:0.85rem}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(p," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,p;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&r[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),t.push(p))}},t}},function(e,t,n){"use strict";n.r(t);var o=function(){function e(){}return e.prototype.createTable=function(e,t,n){var o=this,r=document.createElement("div");r.className="popup-gdpr__table-wrap",e.appendChild(r);var i=document.createElement("table");i.className="popup-gdpr__partners-table",r.appendChild(i),this.createHeaderRow(i),t.forEach((function(e){var t=e.name,r=e.policyUrl,a=e.id;return o.createRow(i,t,r,a,n)}))},e.prototype.createHeaderRow=function(e){var t=document.createElement("thead"),n=document.createElement("tr");return this.createHeaderCell("Partner name",n),this.createHeaderCell("Cookie policy",n),this.createHeaderCell("Agreement",n),t.appendChild(n),e.appendChild(t),n},e.prototype.createHeaderCell=function(e,t){var n=document.createElement("th");n.textContent=e,t.appendChild(n)},e.prototype.createRow=function(e,t,n,o,r){var i=document.createElement("tr");this.createNameCell(t,i),this.createUrlCell(n,i),this.createCheckboxCell(i,r,o),e.appendChild(i)},e.prototype.createNameCell=function(e,t){var n=document.createElement("td");n.textContent=e,t.appendChild(n)},e.prototype.createUrlCell=function(e,t){var n=document.createElement("td"),o=document.createElement("a");o.href=e,o.target="_blank",o.textContent="Link",o.className="popup-gdpr__link",n.appendChild(o),t.appendChild(n)},e.prototype.createCheckboxCell=function(e,t,n){var o=document.createElement("td"),r=document.createElement("input");r.type="checkbox",r.id=n.toString(),r.addEventListener("change",t),o.appendChild(r),e.appendChild(o)},e}(),r=function(){function e(){this.body=document.body,this.partnerListView=new o}return e.prototype.init=function(e,t,n,o){var r=this.createPopUp();this.createTitle(r),this.createInfoWrap(r),this.partnerListView.createTable(r,e,n),this.createButtonsWrap(r,t,o)},e.prototype.createPopUp=function(){var e=document.createElement("div");e.className="popup-gdpr";var t=document.createElement("div");return t.className="popup-gdpr__wrap",document.body.appendChild(e),e.appendChild(t),t},e.prototype.createTitle=function(e){var t=document.createElement("div");t.className="popup-gdpr__title",e.appendChild(t);var n=document.createElement("h2");return n.className="popup-gdpr__title--text",n.textContent="GDPR Context",t.appendChild(n),t},e.prototype.createInfoWrap=function(e){var t=document.createElement("div");t.className="popup-gdpr__info-wrap",e.appendChild(t);var n=document.createElement("p");return n.textContent="We use cookies to personalize your experience. Below you will find a list of our trusted partners. To continue, select which partners you accept, and then save your selection.",t.appendChild(n),t},e.prototype.createButtonsWrap=function(e,t,n){var o=document.createElement("div");return o.className="popup-gdpr__buttons-wrap",e.appendChild(o),this.createButton(o,"button--accept","Accept","accept",t),this.createButton(o,"button--reject","Reject","reject",t),this.createButton(o,"button-checkAll","Check all partners","check-all",n),o},e.prototype.createButton=function(e,t,n,o,r){var i=document.createElement("button");i.className="popup-gdpr__button "+t,i.id=o,i.textContent=n,i.addEventListener("click",r),e.appendChild(i)},e.prototype.closePopup=function(){var e=document.querySelector(".popup-gdpr");this.body.removeChild(e)},e}(),i=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{p(o.next(e))}catch(e){i(e)}}function c(e){try{p(o.throw(e))}catch(e){i(e)}}function p(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}p((o=o.apply(e,t||[])).next())}))},a=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=function(){function e(){this.apiLink="https://api.optad360.com/vendorlist"}return e.prototype.fetchPartnersList=function(){return i(this,void 0,void 0,(function(){var e,t;return a(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch(this.apiLink)];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),[2,e.vendors];case 3:return t=n.sent(),console.error(t),alert("Something went wrong. Try refresh page."),[2,[]];case 4:return[2]}}))}))},e.prototype.fetchCookies=function(){if(""!==document.cookie){var e=document.cookie.split(/; */);return{userDecision:"true"===this.getUserDecisionCookie(e),partnerIdsList:this.getPartnerIds(e).split(".")}}},e.prototype.checkIsCookiesExist=function(){if(""!==document.cookie){var e=document.cookie.split(/; */);return!!this.getUserDecisionCookie(e)[1]}},e.prototype.getUserDecisionCookie=function(e){return e.filter((function(e){return"acceptedCookies"===e.split("=")[0]}))[1]},e.prototype.getPartnerIds=function(e){return e.filter((function(e){return"acceptedPartners"===e.split("=")[0]}))[1]},e}(),p=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{p(o.next(e))}catch(e){i(e)}}function c(e){try{p(o.throw(e))}catch(e){i(e)}}function p(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}p((o=o.apply(e,t||[])).next())}))},u=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=function(){function e(){var e=this;this.onClickButtonListener=function(t){e.saveCookies(t),e.mainView.closePopup()},this.acceptPartnerPolicy=function(t){var n=t.target.checked,o=t.target.id;n?e.acceptedPartners.push(o):e.acceptedPartners=e.acceptedPartners.filter((function(e){return e!==o}))},this.checkAllCheckbox=function(){document.querySelectorAll("input[type=checkbox]").forEach((function(t){t.checked=!0;var n=t.id;e.acceptedPartners.push(n)}))},this.mainView=new r,this.mainModel=new c,this.isProtocolHttps=!1,this.acceptedPartners=[]}return e.prototype.init=function(){this.checkHttpProtocol(),this.showPopup()},e.prototype.checkHttpProtocol=function(){var e=window.location.protocol;this.isProtocolHttps="https:"===e},e.prototype.showPopup=function(){return p(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return[4,this.mainModel.fetchPartnersList()];case 1:return e=t.sent(),this.checksProtocolAndDoCookiesExist(this.mainModel.checkIsCookiesExist())&&this.createPopupAndDisablePage(e),[2]}}))}))},e.prototype.checksProtocolAndDoCookiesExist=function(e){return this.isProtocolHttps&&!e},e.prototype.createPopupAndDisablePage=function(e){this.mainView.init(e,this.onClickButtonListener,this.acceptPartnerPolicy,this.checkAllCheckbox),this.disableScrollPage()},e.prototype.saveCookies=function(e){e.preventDefault();var t="accept"===e.target.id;this.createCookie("acceptedCookies",t);var n=this.joinAcceptedPartnersToString(this.acceptedPartners);this.createCookie("acceptedPartners",n),this.turnOnScrollPage()},e.prototype.createCookie=function(e,t){if(navigator.cookieEnabled){var n=encodeURIComponent(e),o=encodeURIComponent(t),r=new Date;r.setTime(r.getTime()+864e5);var i=n+"="+o+"; expires="+r.toUTCString();document.cookie=i}},e.prototype.joinAcceptedPartnersToString=function(e){return e.join(".")},e.prototype.disableScrollPage=function(){document.body.style.position="fixed",document.body.style.top="0px"},e.prototype.turnOnScrollPage=function(){var e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*Number(e||"0"))},e}();n(0);(new s).init()}]);
//# sourceMappingURL=index.js.map