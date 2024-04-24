"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-debounce";
exports.ids = ["vendor-chunks/use-debounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-debounce/dist/index.module.js":
/*!********************************************************!*\
  !*** ./node_modules/use-debounce/dist/index.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDebounce: () => (/* binding */ o),\n/* harmony export */   useDebouncedCallback: () => (/* binding */ c),\n/* harmony export */   useThrottledCallback: () => (/* binding */ f)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction c(e,u,c){var i=this,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);d.current=e;var p=\"undefined\"!=typeof window,w=!u&&0!==u&&p;if(\"function\"!=typeof e)throw new TypeError(\"Expected a function\");u=+u||0;var s=!!(c=c||{}).leading,x=!(\"trailing\"in c)||!!c.trailing,h=\"maxWait\"in c,y=\"debounceOnServer\"in c&&!!c.debounceOnServer,F=h?Math.max(+c.maxWait||0,u):null;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return g.current=!0,function(){g.current=!1}},[]);var A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){var r=function(r){var n=l.current,t=v.current;return l.current=v.current=null,o.current=r,m.current=d.current.apply(t,n)},n=function(r,n){w&&cancelAnimationFrame(f.current),f.current=w?requestAnimationFrame(r):setTimeout(r,n)},t=function(r){if(!g.current)return!1;var n=r-a.current;return!a.current||n>=u||n<0||h&&r-o.current>=F},e=function(n){return f.current=null,x&&l.current?r(n):(l.current=v.current=null,m.current)},c=function r(){var c=Date.now();if(t(c))return e(c);if(g.current){var i=u-(c-a.current),f=h?Math.min(i,F-(c-o.current)):i;n(r,f)}},A=function(){if(p||y){var e=Date.now(),d=t(e);if(l.current=[].slice.call(arguments),v.current=i,a.current=e,d){if(!f.current&&g.current)return o.current=a.current,n(c,u),s?r(a.current):m.current;if(h)return n(c,u),r(a.current)}return f.current||n(c,u),m.current}};return A.cancel=function(){f.current&&(w?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=v.current=f.current=null},A.isPending=function(){return!!f.current},A.flush=function(){return f.current?e(Date.now()):m.current},A},[s,h,u,F,x,w,p,y]);return A}function i(r,n){return r===n}function a(r,n){return n}function o(n,t,o){var f=o&&o.equalityFn||i,l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(a,n),v=l[0],m=l[1],d=c((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(r){return m(r)},[m]),t,o),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(n);return f(g.current,n)||(d(n),g.current=n),[v,d]}function f(r,n,t){var e=void 0===t?{}:t,u=e.leading,i=e.trailing;return c(r,n,{maxWait:n,leading:void 0===u||u,trailing:void 0===i||i})}\n//# sourceMappingURL=index.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWRlYm91bmNlL2Rpc3QvaW5kZXgubW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRGLGtCQUFrQixhQUFhLDZDQUFDLFNBQVMsNkNBQUMsTUFBTSw2Q0FBQyxTQUFTLDZDQUFDLE9BQU8sNkNBQUMsS0FBSyw2Q0FBQyxLQUFLLDZDQUFDLE1BQU0sNkNBQUMsS0FBSyxZQUFZLGdEQUFnRCxtRUFBbUUsUUFBUSxnQkFBZ0IsOElBQThJLGdEQUFDLFlBQVksK0JBQStCLGNBQWMsS0FBSyxNQUFNLDhDQUFDLFlBQVksa0JBQWtCLDRCQUE0QiwyRUFBMkUsaUJBQWlCLHdGQUF3RixlQUFlLHVCQUF1QixrQkFBa0IsK0NBQStDLGVBQWUsNkVBQTZFLGdCQUFnQixpQkFBaUIsb0JBQW9CLGNBQWMsd0RBQXdELFFBQVEsY0FBYyxTQUFTLHdCQUF3QixpRUFBaUUsb0ZBQW9GLGdDQUFnQyxxQ0FBcUMsMkJBQTJCLGdJQUFnSSx3QkFBd0Isa0JBQWtCLG9CQUFvQix5Q0FBeUMsR0FBRyxvQkFBb0IsU0FBUyxnQkFBZ0IsYUFBYSxnQkFBZ0IsU0FBUyxrQkFBa0IsMkJBQTJCLGlEQUFDLHdCQUF3QixrREFBQyxhQUFhLFlBQVksYUFBYSw2Q0FBQyxJQUFJLGdEQUFnRCxrQkFBa0IsbUJBQW1CLDRCQUE0QixjQUFjLHVEQUF1RCxFQUErRTtBQUM5aUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWRlYm91bmNlL2Rpc3QvaW5kZXgubW9kdWxlLmpzPzZiYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3VzZVJlZiBhcyByLHVzZUVmZmVjdCBhcyBuLHVzZU1lbW8gYXMgdCx1c2VSZWR1Y2VyIGFzIGUsdXNlQ2FsbGJhY2sgYXMgdX1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIGMoZSx1LGMpe3ZhciBpPXRoaXMsYT1yKG51bGwpLG89cigwKSxmPXIobnVsbCksbD1yKFtdKSx2PXIoKSxtPXIoKSxkPXIoZSksZz1yKCEwKTtkLmN1cnJlbnQ9ZTt2YXIgcD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LHc9IXUmJjAhPT11JiZwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7dT0rdXx8MDt2YXIgcz0hIShjPWN8fHt9KS5sZWFkaW5nLHg9IShcInRyYWlsaW5nXCJpbiBjKXx8ISFjLnRyYWlsaW5nLGg9XCJtYXhXYWl0XCJpbiBjLHk9XCJkZWJvdW5jZU9uU2VydmVyXCJpbiBjJiYhIWMuZGVib3VuY2VPblNlcnZlcixGPWg/TWF0aC5tYXgoK2MubWF4V2FpdHx8MCx1KTpudWxsO24oZnVuY3Rpb24oKXtyZXR1cm4gZy5jdXJyZW50PSEwLGZ1bmN0aW9uKCl7Zy5jdXJyZW50PSExfX0sW10pO3ZhciBBPXQoZnVuY3Rpb24oKXt2YXIgcj1mdW5jdGlvbihyKXt2YXIgbj1sLmN1cnJlbnQsdD12LmN1cnJlbnQ7cmV0dXJuIGwuY3VycmVudD12LmN1cnJlbnQ9bnVsbCxvLmN1cnJlbnQ9cixtLmN1cnJlbnQ9ZC5jdXJyZW50LmFwcGx5KHQsbil9LG49ZnVuY3Rpb24ocixuKXt3JiZjYW5jZWxBbmltYXRpb25GcmFtZShmLmN1cnJlbnQpLGYuY3VycmVudD13P3JlcXVlc3RBbmltYXRpb25GcmFtZShyKTpzZXRUaW1lb3V0KHIsbil9LHQ9ZnVuY3Rpb24ocil7aWYoIWcuY3VycmVudClyZXR1cm4hMTt2YXIgbj1yLWEuY3VycmVudDtyZXR1cm4hYS5jdXJyZW50fHxuPj11fHxuPDB8fGgmJnItby5jdXJyZW50Pj1GfSxlPWZ1bmN0aW9uKG4pe3JldHVybiBmLmN1cnJlbnQ9bnVsbCx4JiZsLmN1cnJlbnQ/cihuKToobC5jdXJyZW50PXYuY3VycmVudD1udWxsLG0uY3VycmVudCl9LGM9ZnVuY3Rpb24gcigpe3ZhciBjPURhdGUubm93KCk7aWYodChjKSlyZXR1cm4gZShjKTtpZihnLmN1cnJlbnQpe3ZhciBpPXUtKGMtYS5jdXJyZW50KSxmPWg/TWF0aC5taW4oaSxGLShjLW8uY3VycmVudCkpOmk7bihyLGYpfX0sQT1mdW5jdGlvbigpe2lmKHB8fHkpe3ZhciBlPURhdGUubm93KCksZD10KGUpO2lmKGwuY3VycmVudD1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksdi5jdXJyZW50PWksYS5jdXJyZW50PWUsZCl7aWYoIWYuY3VycmVudCYmZy5jdXJyZW50KXJldHVybiBvLmN1cnJlbnQ9YS5jdXJyZW50LG4oYyx1KSxzP3IoYS5jdXJyZW50KTptLmN1cnJlbnQ7aWYoaClyZXR1cm4gbihjLHUpLHIoYS5jdXJyZW50KX1yZXR1cm4gZi5jdXJyZW50fHxuKGMsdSksbS5jdXJyZW50fX07cmV0dXJuIEEuY2FuY2VsPWZ1bmN0aW9uKCl7Zi5jdXJyZW50JiYodz9jYW5jZWxBbmltYXRpb25GcmFtZShmLmN1cnJlbnQpOmNsZWFyVGltZW91dChmLmN1cnJlbnQpKSxvLmN1cnJlbnQ9MCxsLmN1cnJlbnQ9YS5jdXJyZW50PXYuY3VycmVudD1mLmN1cnJlbnQ9bnVsbH0sQS5pc1BlbmRpbmc9ZnVuY3Rpb24oKXtyZXR1cm4hIWYuY3VycmVudH0sQS5mbHVzaD1mdW5jdGlvbigpe3JldHVybiBmLmN1cnJlbnQ/ZShEYXRlLm5vdygpKTptLmN1cnJlbnR9LEF9LFtzLGgsdSxGLHgsdyxwLHldKTtyZXR1cm4gQX1mdW5jdGlvbiBpKHIsbil7cmV0dXJuIHI9PT1ufWZ1bmN0aW9uIGEocixuKXtyZXR1cm4gbn1mdW5jdGlvbiBvKG4sdCxvKXt2YXIgZj1vJiZvLmVxdWFsaXR5Rm58fGksbD1lKGEsbiksdj1sWzBdLG09bFsxXSxkPWModShmdW5jdGlvbihyKXtyZXR1cm4gbShyKX0sW21dKSx0LG8pLGc9cihuKTtyZXR1cm4gZihnLmN1cnJlbnQsbil8fChkKG4pLGcuY3VycmVudD1uKSxbdixkXX1mdW5jdGlvbiBmKHIsbix0KXt2YXIgZT12b2lkIDA9PT10P3t9OnQsdT1lLmxlYWRpbmcsaT1lLnRyYWlsaW5nO3JldHVybiBjKHIsbix7bWF4V2FpdDpuLGxlYWRpbmc6dm9pZCAwPT09dXx8dSx0cmFpbGluZzp2b2lkIDA9PT1pfHxpfSl9ZXhwb3J0e28gYXMgdXNlRGVib3VuY2UsYyBhcyB1c2VEZWJvdW5jZWRDYWxsYmFjayxmIGFzIHVzZVRocm90dGxlZENhbGxiYWNrfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-debounce/dist/index.module.js\n");

/***/ })

};
;