(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{29:function(n,e,t){n.exports=t(41)},39:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"fetchLastRates",(function(){return N})),t.d(r,"mockRates",(function(){return B}));var c={};t.r(c),t.d(c,"getCurrentRate",(function(){return z}));var a={};t.r(a),t.d(a,"fetchAccounts",(function(){return M})),t.d(a,"exchange",(function(){return G}));var o,u=t(1),i=t.n(u),l=t(11),s=t.n(l),f=t(7),d=t(9),b=t(20),p=t(21),m=t(5),v=function(n){return function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1?arguments[1]:void 0,c=e[r.type];return c?c(t,r):t}}},O=function(n,e){return"".concat(n,"/").concat(e)},g=O("accounts","FETCH_ACCOUNTS"),j=O("accounts","FETCH_ACCOUNTS_SUCCESS"),y=O("accounts","FETCH_ACCOUNTS_FAIL"),h=O("accounts","EXCHANGE");function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(t,!0).forEach((function(e){Object(m.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=v({isLoading:!1,hasError:!1,list:[]})((o={},Object(m.a)(o,g,(function(n){return x({},n,{isLoading:!0})})),Object(m.a)(o,j,(function(n,e){return{isLoading:!1,hasError:!1,list:e.payload.data}})),Object(m.a)(o,y,(function(n){return x({},n,{isLoading:!1,hasError:!0})})),Object(m.a)(o,h,(function(n,e){var t=e.payload,r=t.fromAccountId,c=t.toAccountId,a=t.amount,o=t.rate,u=function(e){return n.list.find((function(n){return n.id===e}))},i=u(r),l=u(c),s=n.list.filter((function(n){return[r,c].includes(n.id)}));return i.amount=i.amount-a,l.amount=l.amount+a*o,s.push(i),s.push(l),x({},n,{list:s})})),o));var k,w=O("rates","FETCH_LATEST_RATES"),S=O("rates","FETCH_LATEST_RATES_SUCCESS"),P=O("rates","FETCH_LATEST_RATES_FAIL");function A(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function L(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(t,!0).forEach((function(e){Object(m.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var R=v({isLoading:!1,hasError:!1,timestamp:null,base:null,rates:[]})((k={},Object(m.a)(k,w,(function(n){return L({},n,{isLoading:!0})})),Object(m.a)(k,S,(function(n,e){var t=e.payload;return n.timestamp>t.data.timestamp?n:L({},n,{isLoading:!1,rates:t.data.rates,timestamp:t.data.timestamp,base:t.data.base})})),Object(m.a)(k,P,(function(n){return L({},n,{isLoading:!1,hasError:!0})})),k)),F=t(14),I=t.n(F),T=t(22),D="https://openexchangerates.org/api/",U="7f9a295d46ae4147b41d6a2eb768d26d";function _(){return(_=Object(T.a)(I.a.mark((function n(){var e;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(D,"latest.json?app_id=").concat(U));case 2:if((e=n.sent).ok){n.next=5;break}return n.abrupt("return",Promise.reject({isSuccessful:!1}));case 5:return n.next=7,e.json();case 7:return n.t0=n.sent,n.abrupt("return",{isSuccessful:!0,data:n.t0});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var N=function(){return function(n){return n({type:w}),function(){return _.apply(this,arguments)}().then((function(e){n({type:S,payload:e})}),(function(){n({type:P})}))}},B=function(){return function(n){n({type:w});var e={base:"USD",timestamp:Date.now(),rates:{USD:(10*Math.random()).toFixed(2),GBP:(10*Math.random()).toFixed(2),EUR:(10*Math.random()).toFixed(2),RUB:(10*Math.random()).toFixed(2)}};return Promise.resolve({data:e}).then((function(e){n({type:S,payload:e})}))}},z=function(n){return function(e,t){var r=n.rates.rates;return e&&t?{rate:"USD"===e?r[t]:r[t]/r[e]}:{rate:null}}},H=R,M=function(){return function(n){return n({type:g}),Promise.resolve({isSuccessful:!0,data:[{id:1,symbol:"$",ticker:"USD",amount:1034.23},{id:2,symbol:"\xa3",ticker:"GBP",amount:420.98},{id:3,symbol:"\u20ac",ticker:"EUR",amount:276.01},{id:4,symbol:"\u20bd",ticker:"RUB",amount:41089}]}).then((function(e){n({type:j,payload:e})}),(function(){n({type:y})}))}},G=function(n){var e=n.fromAccountId,t=n.toAccountId,r=n.amount;return function(n,a){var o=a(),u=o.accounts,i=o.rates;if(u&&u.list){var l=function(n){return u.list.find((function(e){return e.id===n}))},s=l(e),f=l(t),d=c.getCurrentRate({rates:i})(s.ticker,f.ticker).rate;s.amount>=r&&n({type:h,payload:{fromAccountId:e,toAccountId:t,amount:r,rate:d}})}}},K=C,W=Object(p.createLogger)({collapsed:!0}),J=(t(39),t(2)),Y=t(3),$=t(4),q=t(25);function X(){var n=Object(J.a)(["\n  opacity: 0.6;\n"]);return X=function(){return n},n}function Q(){var n=Object(J.a)(["\n  grid-area: controls;\n\n  display: flex;\n  justify-content: center;\n\n  font-size: 32px;\n  margin-top: 4px;\n"]);return Q=function(){return n},n}function V(){var n=Object(J.a)(["\n  font-size: 28px;\n"]);return V=function(){return n},n}function Z(){var n=Object(J.a)(["\n  padding: 0 32px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(J.a)(["\n  ",";\n\n  grid-area: account;\n  display: flex;\n\n  padding-left: 24px;\n  ","\n"]);return nn=function(){return n},n}function en(){var n=Object(J.a)(["\n  ",";\n\n  display: grid;\n  grid-template-columns: 1fr 48px;\n  grid-template-areas: 'account controls';\n\n  border-radius: 8px;\n  background-color: #dedede;\n"]);return en=function(){return n},n}function tn(){var n=Object(J.a)(["\n  align-items: center;\n\n  height: 80px;\n\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return tn=function(){return n},n}var rn=Object(Y.a)(tn()),cn=Y.b.div(en(),rn),an=Y.b.div(nn(),rn,(function(n){return n.isActive&&"background: #e6f7ff"})),on=Y.b.div(Z()),un=Y.b.div(V()),ln=Y.b.div(Q()),sn=Y.b.span(X());function fn(n){var e=n.currency,t=n.total,r=n.isActive,c=new Intl.NumberFormat("en-US",{style:"currency",currency:e}).format(t).split("."),a=Object($.a)(c,2),o=a[0],u=a[1];return i.a.createElement(an,{isActive:r},i.a.createElement(un,{"data-testid":"currency-value"},i.a.createElement("span",null,o),i.a.createElement(sn,null,".",u)))}fn.defaultProps={isActive:!1};var dn=function(n){var e=n.containerRefs,t=n.handler,r=n.when,c=void 0===r||r,a=Object(u.useCallback)((function(n){var r=n.target;if(document.querySelector("body").contains(r)){for(var c=e.map((function(n){return n.current}));r;){if(c.includes(r))return;r=r.parentNode}t()}}),[e,t]);Object(u.useEffect)((function(){return c&&document.addEventListener("click",a,!0),function(){document.removeEventListener("click",a,!0)}}),[a,c])};function bn(){var n=Object(J.a)(["\n  width: 100%;\n  border-bottom: 1px solid #dedede;\n"]);return bn=function(){return n},n}function pn(){var n=Object(J.a)(["\n  position: absolute;\n  margin-top: 2px;\n  border-radius: 8px;\n  border: 1px solid #dedede;\n  background-color: white;\n  width: ",";\n\n  z-index: 100;\n"]);return pn=function(){return n},n}var mn=Y.b.div(pn(),(function(n){return"".concat(n.width,"px")})),vn=Y.b.div(bn());function On(n){var e=n.visible,t=n.options,r=n.onSelect,c=n.onClose,a=n.renderKey,o=n.renderItem,l=n.selectorRef,s=Object(u.useState)(e),f=Object($.a)(s,2),d=f[0],b=f[1],p=Object(u.useState)(0),m=Object($.a)(p,2),v=m[0],O=m[1],g=Object(u.useRef)(null);if(Object(u.useEffect)((function(){b(e)}),[e]),Object(u.useEffect)((function(){O(l.current.getBoundingClientRect().width)}),[l]),Object(u.useEffect)((function(){var n=function(){b(!1),c()};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[c]),Object(u.useEffect)((function(){var n=function(n){27===n.keyCode&&d&&(b(!1),c())};return d&&document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[d,c]),dn({containerRefs:Object(u.useMemo)((function(){return[g]}),[]),handler:function(){b(!1),c()}}),!d||!t.length)return null;var j=t.map((function(n,e){return i.a.createElement("div",{key:n[a],onClick:function(){b(!1),r(n),c()}},i.a.createElement("div",null,o(n),e<t.length-1&&i.a.createElement(vn,null)))}));return i.a.createElement(mn,{width:v,"data-testid":"container",ref:g},j)}function gn(n){var e=n.activeAccountId,t=n.accounts,r=n.onChange,c=Object(u.useCallback)((function(n){return t.find((function(e){return e.id===n}))}),[t]),a=Object(u.useRef)(),o=Object(u.useState)((function(){return c(e)})),l=Object($.a)(o,2),s=l[0],f=l[1],d=Object(u.useState)(!1),b=Object($.a)(d,2),p=b[0],m=b[1];return Object(u.useEffect)((function(){var n=c(e);f(n)}),[e,t,c]),i.a.createElement("div",null,i.a.createElement(cn,{ref:a,onClick:function(){p||m(!p)}},!s&&i.a.createElement(on,{"data-testid":"placeholder"},"Click to select an Account"),s&&i.a.createElement(fn,{currency:s.ticker,total:s.amount}),i.a.createElement(ln,null,i.a.createElement(q.a,null))),i.a.createElement(On,{selectorRef:a,visible:p,options:t,renderKey:"id",renderItem:function(n){return i.a.createElement(fn,{isActive:e===n.id,key:n.id,currency:n.ticker,total:n.amount})},onSelect:function(n){r(n.id)},onClose:function(){m(!1)}}))}function jn(){var n=Object(J.a)(["\n  display: inline-block;\n  border-radius: 2em;\n  cursor: pointer;\n  transition: all 0.2s ease 0s;\n  padding: 0.625em 1.5em;\n  line-height: 1.5em;\n  font-size: 1rem;\n  background-color: rgb(235, 0, 141);\n\n  color: white;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.7;\n  }\n"]);return jn=function(){return n},n}On.defaultProps={visible:!1,options:[],renderKey:"id",onSelect:function(){},onClose:function(){}},gn.defaultProps={activeAccountId:null};var yn=Y.b.div(jn());function hn(n){var e=n.children,t=n.onClick,r=n.disabled;return i.a.createElement(yn,{disabled:r,onClick:t},e)}function En(){var n=Object(J.a)([""]);return En=function(){return n},n}function xn(){var n=Object(J.a)(["\n  height: 64px;\n  background-color: transparent;\n  border: none;\n  margin: 0 24px;\n  font-size: 20px;\n\n  &:focus {\n    border: none;\n    outline: none;\n  }\n"]);return xn=function(){return n},n}function Cn(){var n=Object(J.a)(["\n  position: absolute;\n  color: #9299a2;\n  margin-top: 4px;\n  margin-left: 24px;\n  transition: 0.2s;\n  font-size: 12px;\n\n  &.empty {\n    margin-top: 17px;\n    font-size: 20px;\n    width: calc(100% - 24px);\n    height: calc(100% - 17px);\n  }\n"]);return Cn=function(){return n},n}function kn(){var n=Object(J.a)(["\n  position: relative;\n  height: 64px;\n  transition: 0.2s;\n  cursor: text;\n\n  border-radius: 8px;\n  background-color: #dedede;\n"]);return kn=function(){return n},n}hn.defaultProps={disabled:!1};var wn=Y.b.div(kn()),Sn=Y.b.small(Cn()),Pn=Y.b.input(xn());Y.b.small(En());function An(n){var e=n.value,t=n.placeholder,r=n.onChange,c=n.onFocus,a=void 0===c?function(){}:c,o=n.onBlur,l=void 0===o?function(){}:o,s=Object(u.useState)(""),f=Object($.a)(s,2),d=f[0],b=f[1],p=Object(u.useState)(!1),m=Object($.a)(p,2),v=m[0],O=m[1],g=Object(u.useRef)();return Object(u.useEffect)((function(){b(e)}),[e]),i.a.createElement(wn,null,i.a.createElement(Sn,{"data-testid":"placeholder",onClick:function(){g.current.focus()},className:v||""!==d?"":"empty"},t),i.a.createElement(Pn,{"data-testid":"input",ref:g,value:d,onChange:function(n){var e=n.target.value;if(""===e)return b(e),void r(e);Number.isNaN(Number(e))||(b(e),r(e))},onFocus:function(){a(),O(!0)},onBlur:function(){l(),O(!1)}}))}An.defaultProps={value:"",placeholder:"",onFocus:function(){},onBlur:function(){}};var Ln=function(n){var e=String(n).split(".")[1];return e?e.length:0};function Rn(n){var e=Object(u.useRef)();return Object(u.useEffect)((function(){e.current=n}),[n]),e.current}var Fn=t(26);function In(){var n=Object(J.a)(["\n  display: block;\n  text-align: center;\n  margin-bottom: 40px;\n\n  &:hover {\n    color: rgb(235, 0, 141);\n  }\n"]);return In=function(){return n},n}function Tn(){var n=Object(J.a)(["\n  margin: 28px 0 48px 0;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n\n  font-size: 40px;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 40px;\n"]);return Dn=function(){return n},n}function Un(){var n=Object(J.a)(["\n  color: #9299a2;\n"]);return Un=function(){return n},n}function _n(){var n=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-top: 28px;\n"]);return _n=function(){return n},n}function Nn(){var n=Object(J.a)(["\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 56px;\n  grid-row-gap: 8px;\n\n  margin-top: 40px;\n"]);return Nn=function(){return n},n}function Bn(){var n=Object(J.a)(["\n  display: flex;\n  align-self: center;\n  justify-self: center;\n\n  cursor: pointer;\n"]);return Bn=function(){return n},n}function zn(){var n=Object(J.a)(["\n  margin-left: 8px;\n"]);return zn=function(){return n},n}function Hn(){var n=Object(J.a)(["\n  display: grid;\n  grid-template-columns: 1fr 40px 1fr;\n  grid-column-gap: 8px;\n  grid-row-gap: 8px;\n"]);return Hn=function(){return n},n}var Mn=Y.b.div(Hn()),Gn=Y.b.div(zn()),Kn=Object(Y.b)(Fn.a)(Bn()),Wn=Y.b.div(Nn()),Jn=Y.b.div(_n()),Yn=Y.b.small(Un()),$n=Y.b.div(Dn()),qn=Y.b.div(Tn()),Xn=Y.b.a(In());function Qn(n){var e=n.fromCurrency,t=n.toCurrency,r=n.rate,c=n.onChange,a=Object(u.useState)(""),o=Object($.a)(a,2),l=o[0],s=o[1],f=Object(u.useState)(""),d=Object($.a)(f,2),b=d[0],p=d[1],m=Object(u.useState)(!1),v=Object($.a)(m,2),O=v[0],g=v[1],j=Rn(e),y=Rn(t);return Object(u.useEffect)((function(){if(e&&r&&!O){var n=l*r;Ln(n)>=2&&(n=n.toFixed(2)),p(n)}else if(r){var t=b/r;Ln(t)>=2&&(t=t.toFixed(2)),s(t)}}),[b,e,t,r,l,p,O]),Object(u.useEffect)((function(){l&&b&&c({fromAmount:l,toAmount:b})}),[b,l,c]),Object(u.useEffect)((function(){e&&t&&e===y&&t===j&&(s(b),p(l))}),[e,j,t,y,b,p,l,s]),Object(u.useEffect)((function(){(!e&&j||!t&&y)&&(s(""),p(""))}),[e,j,t,y]),i.a.createElement(Wn,{"data-testid":"amounts-wrapper"},i.a.createElement(Gn,null,"You give:"),i.a.createElement(Gn,null,"You'll get:"),i.a.createElement(An,{placeholder:"Enter amount ".concat(e||""),value:l,onChange:function(n){if(s(n),r){var e=n*r;Ln(e)>=2&&(e=e.toFixed(2)),p(e)}else p("")}}),i.a.createElement(An,{placeholder:"Enter amount ".concat(t||""),value:b,onChange:function(n){if(p(n),r){var e=n/r;Ln(e)>=2&&(e=e.toFixed(2)),s(e)}else s("")},onFocus:function(){g(!0)},onBlur:function(){g(!1)}}))}Qn.defaultProps={fromCurrency:"",toCurrency:"",rate:null,onChange:function(){}};var Vn=Object(f.b)((function(n,e){return c.getCurrentRate(n)(e.fromCurrency,e.toCurrency)}))(Qn);function Zn(n){var e=n.fromCurrency,t=n.toCurrency,r=n.rate;return e&&t?i.a.createElement(Jn,null,i.a.createElement("div",null,"Current rate for ",e,"/",t),i.a.createElement("div",null,Number(r).toFixed(2)),i.a.createElement(Yn,null,"Updates every 10 seconds")):null}Zn.defaultProps={fromCurrency:"",toCurrency:"",rate:null};var ne=Object(f.b)((function(n,e){return c.getCurrentRate(n)(e.fromCurrency,e.toCurrency)}))(Zn);function ee(n){var e=n.accounts,t=n.exchange,r=Object(u.useState)(),c=Object($.a)(r,2),a=c[0],o=c[1],l=Object(u.useState)(),s=Object($.a)(l,2),f=s[0],d=s[1],b=Object(u.useState)(),p=Object($.a)(b,2),m=p[0],v=p[1],O=Object(u.useState)(),g=Object($.a)(O,2),j=g[0],y=g[1],h=Object(u.useState)(),E=Object($.a)(h,2),x=E[0],C=E[1];Object(u.useEffect)((function(){var n=function(n){return e.find((function(e){return e.id===n}))},t=n(a),r=n(f);v(t),y(r)}),[a,f,e]);var k=!m||!j||m.amount<x;return i.a.createElement("div",null,i.a.createElement(qn,null,"\ud83c\udfe6 Exchange Widget \ud83c\udfe6"),i.a.createElement(Xn,{target:"_blank",href:"https://github.com/mbarinov/exchange"},"Github repo"),i.a.createElement(Mn,null,i.a.createElement(Gn,null,"From"),i.a.createElement(Gn,null),i.a.createElement(Gn,null,"To"),i.a.createElement(gn,{activeAccountId:a,accounts:e,onChange:function(n){f===n&&d(),o(n)}}),i.a.createElement(Kn,{onClick:function(){(a||f)&&(d(a),o(f))}}),i.a.createElement(gn,{activeAccountId:f,accounts:e,onChange:function(n){a===n&&o(),d(n)}})),i.a.createElement(Vn,{fromCurrency:m&&m.ticker,toCurrency:j&&j.ticker,onChange:function(n){var e=n.fromAmount;C(e)}}),i.a.createElement(ne,{fromCurrency:m&&m.ticker,toCurrency:j&&j.ticker}),i.a.createElement($n,null,i.a.createElement(hn,{disabled:k,onClick:function(){t({fromAccountId:a,toAccountId:f,amount:x})}},"Exchange")))}function te(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function re(){var n=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n\n  background-color: rgba(var(--b3f, 250, 250, 250), 1);\n\n  padding: 60px;\n  & > * {\n    width: 800px;\n  }\n"]);return re=function(){return n},n}var ce=Y.b.div(re());var ae=Object(f.b)((function(n){return{accounts:n.accounts.list,rates:n.rates.rates,isLoading:n.accounts.isLoading}}),function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?te(t,!0).forEach((function(e){Object(m.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):te(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},a,{},r))((function(n){var e=n.isLoading,t=n.accounts,r=n.rates,c=n.fetchAccounts,a=n.fetchLastRates,o=n.mockRates,l=n.exchange;return Object(u.useEffect)((function(){c()}),[c,o]),Object(u.useEffect)((function(){a();var n=setInterval((function(){a()}),1e4);return function(){clearInterval(n)}}),[a]),e?null:i.a.createElement(ce,null,i.a.createElement(ee,{accounts:t,rates:r,exchange:l}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(d.e)(Object(d.c)({accounts:K,rates:H}),Object(d.d)(Object(d.a)(b.a,W)));s.a.render(i.a.createElement(f.a,{store:oe},i.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.27c70bf2.chunk.js.map