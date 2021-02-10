(()=>{"use strict";var e={807:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,'.control-section{display:flex;flex-direction:row}.control-section-refresh-button{height:44px;width:44px;border:1px solid #fff;border-radius:8px;margin-right:10px;background-color:rgba(174,181,185,.5);display:flex;justify-content:center;align-items:center;cursor:pointer}.control-section-refresh-button-img{height:28px;width:28px}.control-section-language-hamburger{height:44px;width:71px;margin-right:10px;position:relative;cursor:pointer}.control-section-language-hamburger-block{height:44px;width:71px;border:1px solid #fff;border-radius:8px;background-color:rgba(174,181,185,.5);overflow:hidden}.control-section-language-hamburger-block-main{height:44px;display:flex;flex-direction:row;align-items:center}.control-section-language-hamburger-block-main-text{margin-left:10px}.control-section-language-hamburger-block-main-arrow{margin-left:10px}.control-section-language-hamburger-block-lang{height:44px;display:flex;flex-direction:row;align-items:center;border-top:1px solid #fff;border-bottom:1px solid #fff;background-color:rgba(47,48,48,.4)}.control-section-language-hamburger-block-lang-text{margin-left:10px}.control-section-temperature{display:flex;flex-direction:row}.control-section-temperature-celsius{height:44px;width:44px;background-color:rgba(76,82,85,.4);border-top:1px solid #fff;border-bottom:1px solid #fff;border-right:1px solid #fff;border-top-right-radius:8px;border-bottom-right-radius:8px;display:flex;justify-content:center;align-items:center;cursor:pointer;color:#b4b4b4}.control-section-temperature-fahrenheit{height:44px;width:44px;background-color:rgba(76,82,85,.4);border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #fff;border-top-left-radius:8px;border-bottom-left-radius:8px;display:flex;justify-content:center;align-items:center;cursor:pointer;color:#b4b4b4}.active{background-color:rgba(174,181,185,.5);color:#fff}.open-menu{height:176px}.rotate-arrow{transform:rotate(180deg)}.coordinate-section{font-size:20px;font-weight:600;text-align:end;margin-top:80px}.date-section{margin-top:10px;font-size:24px;font-weight:600}.date-section-time{margin-left:20px}.day-weather-section{display:flex;flex-direction:row}.day-weather-section-temperature{display:flex;flex-direction:row;align-items:center;padding-left:10px;width:425px}.day-weather-section-temperature-block{display:flex;flex-direction:row}.day-weather-section-temperature-number{font-size:200px;font-weight:700;font-stretch:50%}.day-weather-section-temperature-degree{font-size:100px;margin-top:15px}.day-weather-section-temperature-degree-value{font-size:80px;margin-top:20px;font-weight:700}.day-weather-section-info{width:325px;font-size:22px;font-weight:700;line-height:37px}.day-weather-section-info-block{height:100px;width:150px}.day-weather-section-info-block-img{height:100%}.day-weather-section-info-condition{margin-top:10px}.day-weather-section-info-feels{margin-top:10px}.day-weather-section-info-wind{margin-top:10px}.day-weather-section-info-humidity{margin-top:10px}.info-block{width:750px}.location-section{margin-top:57px;font-size:44px;font-weight:700}*{margin:0;padding:0;box-sizing:border-box;color:#fff;font-family:"Montserrat",sans-serif;user-select:none}.body-block{height:100vh;background:gray no-repeat center center fixed;transition:background-image .2s linear}.main-block{height:100%;padding:30px 0 0 0;display:flex;flex-direction:row;justify-content:center}.hiddenBg{left:0;top:0;visibility:hidden;display:none}.map-block{width:375px;margin-top:100px}.map-section{width:375px;height:375px;margin-top:60px;background-color:#646464;overflow:hidden;border:2px solid #fff;border-radius:1px}.map{height:100%;width:100%}.period-weather-section{display:flex;flex-direction:row;font-size:18px;font-weight:700;margin-top:80px;width:750px}.period-weather-section-1{width:240px;height:160px;border:1px solid #fff;border-radius:8px;background-color:rgba(75,75,75,.5);margin-right:10px}.period-weather-section-1-block{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:3px}.period-weather-section-1-block-day{display:flex;align-items:flex-end}.period-weather-section-1-block-img{width:65px;height:65px;margin-right:3px}.period-weather-section-1-deg{display:flex;flex-direction:row;justify-content:center;font-size:50px;font-weight:600}.period-weather-section-1-deg-value{font-size:40px;font-weight:700;margin-top:4px}.period-weather-section-1-block-temperature{font-size:80px}.period-weather-section-2{width:240px;height:160px;border:1px solid #fff;border-radius:8px;background-color:rgba(75,75,75,.5);margin-right:10px}.period-weather-section-2-block{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:3px}.period-weather-section-2-block-day{display:flex;align-items:flex-end}.period-weather-section-2-block-img{width:65px;height:65px;margin-right:3px}.period-weather-section-2-deg{display:flex;flex-direction:row;justify-content:center;font-size:50px;font-weight:600}.period-weather-section-2-deg-value{font-size:40px;font-weight:700;margin-top:4px}.period-weather-section-2-block-temperature{font-size:80px}.period-weather-section-3{width:240px;height:160px;border:1px solid #fff;border-radius:8px;background-color:rgba(75,75,75,.5)}.period-weather-section-3-block{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:3px}.period-weather-section-3-block-day{display:flex;align-items:flex-end}.period-weather-section-3-block-img{width:65px;height:65px;margin-right:3px}.period-weather-section-3-deg{display:flex;flex-direction:row;justify-content:center;font-size:50px;font-weight:600}.period-weather-section-3-deg-value{font-size:40px;font-weight:700;margin-top:4px}.period-weather-section-3-block-temperature{font-size:80px}.search-section{display:flex;flex-direction:row;border-radius:8px;position:relative;top:-44px;margin-left:100%;width:375px}.search-section-search-input{background-color:rgba(76,82,85,.4);border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #fff;border-top-left-radius:8px;border-bottom-left-radius:8px;width:274px;height:44px;padding-left:15px;padding-right:15px;font-size:22px;z-index:10}.search-section-search-input::placeholder{color:#fff;font-size:14px}.search-section-search-button{width:101px;height:44px;background-color:rgba(174,181,185,.5);border-top:1px solid #fff;border-bottom:1px solid #fff;border-right:1px solid #fff;border-top-right-radius:8px;border-bottom-right-radius:8px;display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:10}.search-section-search-button-text{font-size:14px;font-weight:700}.input-helper{position:absolute;background-color:rgba(0,0,0,.7);width:264px;margin-top:44px;margin-left:8px;border-left:1px solid #fff;border-bottom:1px solid #fff;border-right:1px solid #fff;border-bottom-right-radius:8px;border-bottom-left-radius:8px;z-index:55;overflow:hidden}.input-helper :first-child{border-top:0}.input-helper-block{height:33px;border-top:1px solid #fff;padding-left:10px;font-size:12px;overflow:hidden;display:flex;align-items:center}.input-helper-block:hover{background-color:rgba(24,24,24,.8)}.hidden{visibility:hidden}.error-input{box-shadow:0px 0px 20px 10px red}.server-status{height:20px;margin-top:30px;display:flex;flex-direction:row;justify-content:space-evenly;visibility:hidden}.server-status-IP{display:flex;flex-direction:row;align-items:center}.server-status-IP-text{font-size:15px;font-weight:600}.server-status-IP-light{height:20px;margin-left:8px;width:20px;border-radius:50%;border:1px solid #fff;background-color:#636363}.server-status-map-api{display:flex;flex-direction:row;align-items:center}.server-status-map-api-text{font-size:15px;font-weight:600}.server-status-map-api-light{height:20px;margin-left:8px;width:20px;border-radius:50%;border:1px solid #fff;background-color:#636363}.server-status-weather-api{display:flex;flex-direction:row;align-items:center}.server-status-weather-api-text{font-size:15px;font-weight:600}.server-status-weather-api-light{height:20px;margin-left:8px;width:20px;border-radius:50%;border:1px solid #fff;background-color:#636363}@media(max-width: 1199px){.main-block{flex-direction:column;align-items:center;justify-content:start}.location-section{margin-top:30px;display:flex;justify-content:center;font-size:55px}.date-section{display:flex;justify-content:center;font-size:30px}.map-block{position:relative}.search-section{top:-44px;margin-left:50%}.coordinate-section{text-align:center;margin-top:10px}.map-block{margin-top:40px}}@media(max-width: 799px){.info-block{display:flex;flex-direction:column;align-items:center;width:300px}.location-section{margin-top:55px;font-size:35px}.location-section-text{text-align:center}.date-section{font-size:20px}.day-weather-section{flex-direction:column;align-items:center}.day-weather-section-temperature{width:300px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-left:0}.day-weather-section-temperature-block{display:flex;flex-direction:row;justify-content:center;align-items:center}.day-weather-section-temperature-number{font-size:100px}.day-weather-section-temperature-degree{font-size:50px;margin-top:10px}.day-weather-section-temperature-degree-value{font-size:40px}.day-weather-section-info{width:300px;font-size:18px}.day-weather-section-info-block{height:100px;width:300px;display:flex;align-items:center;justify-content:center}.day-weather-section-info-block-img{height:100%}.day-weather-section-info-condition{text-align:center;margin-top:5px}.day-weather-section-info-feels{text-align:center;margin-top:5px}.day-weather-section-info-wind{text-align:center;margin-top:5px}.day-weather-section-info-humidity{text-align:center;margin-top:5px}.period-weather-section{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:40px;width:300px}.period-weather-section-1{margin-right:0}.period-weather-section-2{margin-right:0;margin-top:5px}.period-weather-section-3{margin-right:0;margin-top:5px}.map-block{width:300px}.map-section{width:300px;height:300px;margin-top:30px}.search-section{top:37px;margin-left:0;width:280px}.search-section-search-input{width:200px}.search-section-search-button{width:80px}}',""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&r[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},379:(e,t,o)=>{var n,r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function i(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},n=[],r=0;r<e.length;r++){var c=e[r],s=t.base?c[0]+t.base:c[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:g(p,t),references:1}),n.push(l)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=o.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,f=0;function g(e,t){var o,n,r;if(t.singleton){var a=f++;o=h||(h=s(t)),n=u.bind(null,o,a,!1),r=u.bind(null,o,a,!0)}else o=s(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=i(o[n]);a[r].references--}for(var s=c(e,t),d=0;d<o.length;d++){var l=i(o[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}o=s}}}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(379),t=o.n(e),n=o(807);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;var r=document.querySelector(".day-weather-section-info-condition"),a={1e3:{en:"Clear",ru:"Чистое небо",be:"Чыстае неба"},1003:{en:"Partly cloudy",ru:"Частично облачно",be:"Пераменная воблачнасць"},1006:{en:"Cloudy",ru:"Облачно",be:"Воблачна"},1009:{en:"Overcast",ru:"Пасмурно",be:"Пахмурна"},1030:{en:"Mist",ru:"Туман",be:"Туман"},1063:{en:"Patchy rain possible",ru:"Возможен кратковременный дождь",be:"Магчымы невялікі дождж"},1066:{en:"Patchy snow possible",ru:"Возможен кратковременный снег",be:"Магчымы невялікі снег"},1069:{en:"Patchy sleet possible",ru:"Возможен легкий гололед",be:"Магчымы слабы галалёд"},1072:{en:"Patchy freezing drizzle possible",ru:"Возможен небольшой мороз",be:"Магчымы невялікі мароз"},1087:{en:"Thundery outbreaks possible",ru:"Возможны грозовые вспышки",be:"Магчымыя ўспышкі навальніцы"},1114:{en:"Blowing snow",ru:"Позёмок",be:"Пазёмак"},1117:{en:"Blizzard",ru:"Снежная буря",be:"Мяцеліца"},1135:{en:"Fog",ru:"Туман",be:"Туман"},1147:{en:"Freezing fog",ru:"Ледяной туман",be:"Замярзальны туман"},1150:{en:"Patchy light drizzle",ru:"Местами слабая морось",be:"Магчымы лёгкі дождж"},1153:{en:"Light drizzle",ru:"Легкая морось",be:"Лёгкі дождж"},1168:{en:"Freezing drizzle",ru:"Изморозь",be:"Сцюдзёны дождж"},1171:{en:"Heavy freezing drizzle",ru:"Сильная ледяная морось",be:"Моцны мароз"},1180:{en:"Patchy light rain",ru:"Местами небольшой дождь",be:"Невялікі дождж"},1183:{en:"Light rain",ru:"Легкий дождь",be:"Невялікі дождж"},1186:{en:"Moderate rain at times",ru:"Временами умеренный дождь",be:"Часам умераны дождж"},1189:{en:"Moderate rain",ru:"Умеренный дождь",be:"Умераны дождж"},1192:{en:"Heavy rain at times",ru:"Временами сильный дождь",be:"Часам моцны дождж"},1195:{en:"Heavy rain",ru:"Ливень",be:"Залева"},1198:{en:"Light freezing rain",ru:"Легкий ледяной дождь",be:"Лёгкі марозны дождж"},1201:{en:"Moderate or heavy freezing rain",ru:"Умеренный или сильный ледяной дождь",be:"Умераны альбо моцны марозны дождж"},1204:{en:"Light sleet",ru:"Слабый гололёд",be:"Слабы галалёд"},1207:{en:"Moderate or heavy sleet",ru:"Умеренный или сильный гололёд",be:"Умераны або моцны галалёд"},1210:{en:"Patchy light snow",ru:"Местами легкий снег",be:"Невялікі снег"},1213:{en:"Light snow",ru:"Слабый снег",be:"Невялікі снег"},1216:{en:"Patchy moderate snow",ru:"Местами умеренный снег",be:"Магчымы ўмераны снег"},1219:{en:"Moderate snow",ru:"Умеренный снег",be:"Умераны снег"},1222:{en:"Patchy heavy snow",ru:"Местами сильный снегопад",be:"Магчымы моцны снег"},1225:{en:"Heavy snow",ru:"Сильный снегопад",be:"Моцны снег"},1237:{en:"Ice pellets",ru:"Град",be:"Град"},1240:{en:"Light rain shower",ru:"Небольшой дождь",be:"Невялікі дождж"},1243:{en:"Moderate or heavy rain shower",ru:"Умеренный или сильный дождь",be:"Умераны альбо моцны дождж"},1246:{en:"Torrential rain shower",ru:"Проливной дождь",be:"Праліўны дождж"},1249:{en:"Light sleet showers",ru:"Небольшой гололёд",be:"Слабы галалёд"},1252:{en:"Moderate or heavy sleet showers",ru:"Умеренный или сильный дождь с мокрым снегом",be:"Умераны або моцны мокры снег"},1255:{en:"Light snow showers",ru:"Небольшой снегопад",be:"Слабы снег"},1258:{en:"Moderate or heavy snow showers",ru:"Умеренный или сильный снегопад",be:"Умераны або моцны снег"},1261:{en:"Light showers of ice pellets",ru:"Легкий дождь с градом",be:"Невялікі дождж с градам"},1264:{en:"Moderate or heavy showers of ice pellets",ru:"Умеренный или сильный дождь с градом",be:"Умераны або моцны дождж з градам"},1273:{en:"Patchy light rain with thunder",ru:"Местами небольшой дождь с громом",be:"Невялікі дождж, навальніца"},1276:{en:"Moderate or heavy rain with thunder",ru:"Умеренный или сильный дождь с грозой",be:"Умераны альбо моцны дождж з навальніцамі"},1279:{en:"Patchy light snow with thunder",ru:"Местами легкий снег с громом",be:"Невялікі снег з навальніцамі"},1282:{en:"Moderate or heavy snow with thunder",ru:"Умеренный или сильный снегопад с грозой",be:"Умераны альбо моцны снег з навальніцамі"}};function i(e){var t=v.current.condition.code.toString(),o=a[t][e];r.textContent=o.toUpperCase()}function c(e,t){var o,n;return o=0===t?"night":"day",n=e.match(/\d{3}/gm),"img/weather_icon/".concat(o,"/").concat(n,".png")}var s=document.querySelector(".control-section-temperature-fahrenheit"),d=document.querySelector(".control-section-temperature-celsius"),l=document.querySelector(".day-weather-section-temperature-number"),u=document.querySelector(".period-weather-section-1-block-temperature"),p=document.querySelector(".period-weather-section-2-block-temperature"),h=document.querySelector(".period-weather-section-3-block-temperature"),f=document.querySelector(".day-weather-section-info-feels-temperature"),g=document.querySelector(".day-weather-section-info-feels-temperature-deg"),m=document.querySelector(".day-weather-section-temperature-degree-value"),x=document.querySelector(".period-weather-section-1-deg-value"),b=document.querySelector(".period-weather-section-2-deg-value"),y=document.querySelector(".period-weather-section-3-deg-value");function w(e){"f"===e.toLowerCase()?(s.classList.add("active"),d.classList.remove("active"),l.textContent=Math.round(v.current.temp_f),u.textContent=Math.round(v.forecast.forecastday[0].day.avgtemp_f),p.textContent=Math.round(v.forecast.forecastday[1].day.avgtemp_f),h.textContent=Math.round(v.forecast.forecastday[2].day.avgtemp_f),f.textContent=Math.round(v.current.feelslike_f)):(s.classList.remove("active"),d.classList.add("active"),l.textContent=Math.round(v.current.temp_c),u.textContent=Math.round(v.forecast.forecastday[0].day.avgtemp_c),p.textContent=Math.round(v.forecast.forecastday[1].day.avgtemp_c),h.textContent=Math.round(v.forecast.forecastday[2].day.avgtemp_c),f.textContent=Math.round(v.current.feelslike_c)),m.textContent=e,x.textContent=e,b.textContent=e,y.textContent=e,g.textContent=e}s.addEventListener("click",(function(){s.classList.add("active"),d.classList.remove("active"),l.textContent=Math.round(v.current.temp_f),u.textContent=Math.round(v.forecast.forecastday[0].day.avgtemp_f),p.textContent=Math.round(v.forecast.forecastday[1].day.avgtemp_f),h.textContent=Math.round(v.forecast.forecastday[2].day.avgtemp_f),f.textContent=Math.round(v.current.feelslike_f),m.textContent="F",x.textContent="F",b.textContent="F",y.textContent="F",g.textContent="F",localStorage.setItem("degree","F")})),d.addEventListener("click",(function(){s.classList.remove("active"),d.classList.add("active"),l.textContent=Math.round(v.current.temp_c),u.textContent=Math.round(v.forecast.forecastday[0].day.avgtemp_c),p.textContent=Math.round(v.forecast.forecastday[1].day.avgtemp_c),h.textContent=Math.round(v.forecast.forecastday[2].day.avgtemp_c),f.textContent=Math.round(v.current.feelslike_c),m.textContent="C",x.textContent="C",b.textContent="C",y.textContent="C",g.textContent="C",localStorage.setItem("degree","C")}));var v,C=document.querySelector(".day-weather-section-temperature-number"),k=document.querySelector(".day-weather-section-info-block-img"),S=document.querySelector(".day-weather-section-info-feels-temperature"),q=document.querySelector(".day-weather-section-info-wind-speed"),L=document.querySelector(".day-weather-section-info-humidity-number"),M=document.querySelector(".day-weather-section-info-condition"),z=document.querySelector(".period-weather-section-1-block-temperature"),j=document.querySelector(".period-weather-section-1-block-img"),_=document.querySelector(".period-weather-section-2-block-temperature"),T=document.querySelector(".period-weather-section-2-block-img"),I=document.querySelector(".period-weather-section-3-block-temperature"),E=document.querySelector(".period-weather-section-3-block-img"),U=document.querySelector(".server-status-weather-api-light"),P=document.querySelector(".coordinate-section-latitude-text"),F=document.querySelector(".coordinate-section-longitude-text");function H(e,t){fetch("//api.weatherapi.com/v1/forecast.json?key=bb104a4c5f26417898525936211801&q=".concat(e,",").concat(t,"&days=3")).then((function(e){return e.json()})).then((function(e){v=e;var t=e.location.lat,o=e.location.lon;C.textContent=Math.round(e.current.temp_c);try{k.src="http:".concat(e.current.condition.ico)}finally{k.src=c(e.current.condition.icon,e.current.is_day)}S.textContent=Math.round(e.current.feelslike_f),q.textContent=(1e3*e.current.wind_kph/3600).toFixed(1),L.textContent=e.current.humidity,M.textContent=e.current.condition.text.toUpperCase(),z.textContent=Math.round(e.forecast.forecastday[0].day.avgtemp_c);try{j.src="http:".concat(e.forecast.forecastday[0].day.condition.icon)}finally{j.src=c(e.forecast.forecastday[0].day.condition.icon,1)}_.textContent=Math.round(e.forecast.forecastday[1].day.avgtemp_c);try{T.src="http:".concat(e.forecast.forecastday[1].day.condition.icon)}finally{T.src=c(e.forecast.forecastday[1].day.condition.icon,1)}I.textContent=Math.round(e.forecast.forecastday[2].day.avgtemp_c);try{E.src="http:".concat(e.forecast.forecastday[2].day.condition.icon)}finally{E.src=c(e.forecast.forecastday[2].day.condition.icon,1)}P.textContent=t,F.textContent=o,U.style.backgroundColor="green",i(document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase()),null===localStorage.getItem("degree")?w("C"):w(localStorage.getItem("degree"))})).catch((function(e){return alert(e.message)}))}document.querySelector(".server-status-map-api-light");var D=document.querySelector(".map");function A(e,t){D.innerHTML="",new ol.Map({target:"map",layers:[new ol.layer.Tile({source:new ol.source.OSM})],view:new ol.View({center:ol.proj.fromLonLat([e,t]),zoom:11})})}var O=document.querySelector(".search-section"),N=document.querySelector(".search-section-search-input"),B={en:"Search city",ru:"Искать город",be:"Пошук горада"},J={en:"Enter the correct query",ru:"Введите правильный запрос",be:"Увядзіце правільны запыт"};function Z(e,t){e?(O.classList.add("error-input"),N.placeholder=J[t]):(O.classList.remove("error-input"),N.placeholder=B[t])}var R=document.querySelector(".body-block"),W=['"img/background_img/bg1.jpg"','"img/background_img/bg2.jpg"','"img/background_img/bg3.jpg"','"img/background_img/bg4.jpg"','"img/background_img/bg5.jpg"','"img/background_img/bg6.jpg"'];function Y(){var e,t=(5,e=0+6*Math.random(),Math.floor(e)),o=R.style.backgroundImage,n="url(".concat(W[t],")");o==n?Y():R.style.backgroundImage=n}var K=document.querySelector(".location-section-country"),V=document.querySelector(".location-section-city"),G=document.querySelector(".search-section-search-input");function Q(e,t){var o="&language=".concat(e),n="q=".concat(t);fetch("//api.opencagedata.com/geocode/v1/json?".concat(n).concat("&key=a8c198ae29e54e928846b09897be5020").concat(o,"&pretty=1&no_annotations=1")).then((function(e){return e.json()})).then((function(e){K.textContent=e.results[0].components.country,void 0===e.results[0].components.town?V.textContent=e.results[0].components.city:e.results[0].components.town;var t=e.results[0].geometry.lat,o=e.results[0].geometry.lng;H(t,o),A(o,t),G.value="",Z(!1,document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase()),Y()})).catch((function(e){var t=document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase();G.value="",Z(!0,t)}))}function X(e,t,o){var n="&language=".concat(e),r="q=".concat(t,",").concat(o);fetch("//api.opencagedata.com/geocode/v1/json?".concat(r).concat("&key=a8c198ae29e54e928846b09897be5020").concat(n,"&pretty=1&no_annotations=1")).then((function(e){return e.json()})).then((function(e){K.textContent=e.results[0].components.country,void 0===e.results[0].components.town?V.textContent=e.results[0].components.city:e.results[0].components.town;var t=e.results[0].geometry.lat,o=e.results[0].geometry.lng;H(t,o),A(o,t),G.value="",Z(!1,document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase()),Y()})).catch((function(e){var t=document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase();G.value="",Z(!0,t)}))}function $(e){var t=document.querySelector(".control-section-language-hamburger-block-main-text");X(t=t.textContent.toLowerCase(),e.coords.latitude,e.coords.longitude)}function ee(e){1==e?alert("Вы решили не предоставлять данные о своем местоположении, но это не проблема. Мы больше не будем запрашивать их у вас.воспользуйтесь поиском!"):2==e?alert("Проблемы с сетью или нельзя связаться со службой определения местоположения по каким-либо другим причинам.воспользуйтесь поиском!"):3==e?alert("He удалось определить местоположение в течение установленного времени. воспользуйтесь поиском!"):alert("Загадочная ошибка.воспользуйтесь поиском!")}var te=document.querySelector(".server-status-IP-light");var oe=document.querySelector(".date-section-time"),ne=document.querySelector(".date-section-date-dayText"),re=document.querySelector(".date-section-date-dayNumber"),ae=document.querySelector(".date-section-date-month"),ie=document.querySelector(".period-weather-section-1-block-day-text"),ce=document.querySelector(".period-weather-section-2-block-day-text"),se=document.querySelector(".period-weather-section-3-block-day-text"),de=document.querySelector(".coordinate-section-latitude-lat"),le=document.querySelector(".coordinate-section-longitude-lon"),ue=document.querySelector(".search-section-search-button-text"),pe=(document.querySelector(".search-section-search-input"),document.querySelector(".day-weather-section-info-feels-heading")),he=document.querySelector(".day-weather-section-info-wind-heading"),fe=document.querySelector(".day-weather-section-info-wind-speed-sign"),ge=document.querySelector(".day-weather-section-info-humidity-heading"),me={en:{1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",0:"Sun"},ru:{1:"Пнд",2:"Втр",3:"Срд",4:"Чтв",5:"Птн",6:"Сбт",0:"Вск"},be:{1:"Пнд",2:"Аўт",3:"Сер",4:"Чцв",5:"Пят",6:"Суб",0:"Няд"}},xe={en:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},ru:{0:"Января",1:"Февраля",2:"Марта",3:"Апреля",4:"Мая",5:"Июня",6:"Июля",7:"Августа",8:"Сентября",9:"Октября",10:"Ноября",11:"Декабря"},be:{0:"Студзеня",1:"Лютага",2:"Сакавiка",3:"Красавiка",4:"Мая",5:"Чэрвеня",6:"Лiпня",7:"Жнiуня",8:"Верасня",9:"Кастрычнiка",10:"Лiстапада",11:"Снежня"}},be={en:{1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",0:"Sunday"},ru:{1:"Понедельник",2:"Вторник",3:"Среда",4:"Четверг",5:"Пятница",6:"Суббота",0:"Воскресенье"},be:{1:"Панядзелак",2:"Аўторак",3:"Серада",4:"Чацверг",5:"Пятнiца",6:"Субота",0:"Нядзеля"}},ye={en:"TODAY",ru:"СЕГОДНЯ",be:"СЁННЯ"},we={en:"Latitude:",ru:"Широта:",be:"Шырыня:"},ve={en:"Longitude:",ru:"Долгота:",be:"Даужыня:"},Ce={en:"SEARCH",ru:"ПОИСК",be:"ПОШУК"},ke={en:"FEELS LIKE: ",ru:"ОЩУЩАЕТСЯ КАК: ",be:"АДЧУВАЕЦЦА ЯК: "},Se={en:"WIND: ",ru:"СКОРОСТЬ ВЕТРА: ",be:"ХУТКАСЦЬ ВЕТРУ: "},qe={en:"HUMIDITY: ",ru:"ВЛАЖНОСТЬ: ",be:"ВІЛЬГОТНАСЦЬ: "},Le={en:"m/s",ru:"м/с",be:"м/с"};function Me(e){re.textContent=(new Date).getDate();var t=(new Date).getDay().toString(),o=me[e];ne.textContent=o[t];var n=(new Date).getMonth().toString(),r=xe[e];ae.textContent=r[n],ie.textContent=ye[e],de.textContent=we[e],le.textContent=ve[e],ue.textContent=Ce[e],pe.textContent=ke[e],he.textContent=Se[e],fe.textContent=Le[e],ge.textContent=qe[e],function(){var t=(new Date).getDay(),o=be[e];switch(t){case 0:ce.textContent=o[1].toUpperCase(),se.textContent=o[2].toUpperCase();break;case 1:ce.textContent=o[2].toUpperCase(),se.textContent=o[3].toUpperCase();break;case 2:ce.textContent=o[3].toUpperCase(),se.textContent=o[4].toUpperCase();break;case 3:ce.textContent=o[4].toUpperCase(),se.textContent=o[5].toUpperCase();break;case 4:ce.textContent=o[5].toUpperCase(),se.textContent=o[6].toUpperCase();break;case 5:ce.textContent=o[6].toUpperCase(),se.textContent=o[0].toUpperCase();break;case 6:ce.textContent=o[0].toUpperCase(),se.textContent=o[1].toUpperCase();break;default:ce.textContent="?????"}}()}document.querySelector(".control-section-refresh-button").addEventListener("click",(function(){Y()}));var ze=document.querySelector(".search-section-search-input"),je=document.querySelector(".input-helper"),_e=document.querySelector(".input-helper");var Te=document.querySelector(".search-section-search-button"),Ie=document.querySelector(".search-section-search-input"),Ee=document.querySelector(".input-helper");Te.addEventListener("click",(function(){var e=Ie.value;Q(document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase(),e),Ee.innerHTML=""})),Ie.addEventListener("keyup",(function(e){if(13===e.keyCode){var t=Ie.value;Q(document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase(),t)}else Ee.innerHTML="",setTimeout((function(){var e;(e=document.querySelector(".search-section-search-input").value).length>1&&fetch("https://api.teleport.org/api/cities/?search=".concat(e,"&limit=10")).then((function(e){return e.json()})).then((function(e){_e.innerHTML="";for(var t=e.count,o=0;o<t;o++){var n=document.createElement("div");n.classList.add("input-helper-block"),n.textContent=e._embedded["city:search-results"][o].matching_full_name,_e.insertAdjacentElement("beforeend",n)}_e.classList.remove("hidden"),document.querySelectorAll(".input-helper-block").forEach((function(e){return e.addEventListener("click",(function(){var t=e.textContent;ze.value=t,Q(document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase(),t),je.innerHTML="",je.classList.add("hidden")}))}))}))}),750)}));var Ue,Pe=document.querySelector(".control-section-language-hamburger-block"),Fe=document.querySelector(".control-section-language-hamburger-block-main"),He=document.querySelector(".control-section-language-hamburger-block-main-text"),De=document.querySelector(".control-section-language-hamburger-block-main-arrow"),Ae=document.querySelectorAll(".control-section-language-hamburger-block-lang"),Oe=document.querySelector(".search-section-search-input");Fe.addEventListener("click",(function(){Pe.classList.toggle("open-menu"),De.classList.toggle("rotate-arrow")})),Ae.forEach((function(e){return e.addEventListener("click",(function(){var t=v.location.lat,o=v.location.lon;He.textContent=e.children[0].textContent,Pe.classList.toggle("open-menu"),De.classList.toggle("rotate-arrow"),localStorage.setItem("lang",He.textContent.toLowerCase()),Oe.value="",Me(He.textContent.toLowerCase()),i(He.textContent.toLowerCase()),function(e,t,o){var n="&language=".concat(e),r="q=".concat(t,",").concat(o);fetch("//api.opencagedata.com/geocode/v1/json?".concat(r).concat("&key=a8c198ae29e54e928846b09897be5020").concat(n,"&pretty=1&no_annotations=1")).then((function(e){return e.json()})).then((function(e){K.textContent=e.results[0].components.country,void 0===e.results[0].components.town?V.textContent=e.results[0].components.city:e.results[0].components.town,Z(!1,document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase()),Y()})).catch((function(e){var t=document.querySelector(".control-section-language-hamburger-block-main-text").textContent.toLowerCase();G.value="",Z(!0,t)}))}(He.textContent.toLowerCase(),t,o)}))})),null===localStorage.getItem("lang")?Ue="en":(Ue=localStorage.getItem("lang"),document.querySelector(".control-section-language-hamburger-block-main-text").textContent=localStorage.getItem("lang").toUpperCase(),Z(!1,Ue)),window.onload=function(){var e;e=Ue,fetch("//ip-api.com/json?fields=status,message,country,city,lat,lon").then((function(e){return e.json()})).then((function(e){if("success"===e.status)return e;te.style.backgroundColor="red"})).then((function(t){te.style.backgroundColor="green";var o=t.lat,n=t.lon;X(e,o,n)})).catch((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition($,ee):alert("Ваш браузер не поддерживает геолокацию")})),setInterval((function(){oe.textContent=(new Date).toLocaleTimeString("ru",{timeZone:"".concat(v.location.tz_id)})}),1e3),Me(Ue),Y()}})()})();