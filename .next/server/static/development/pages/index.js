module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BelowFold.js":
/*!*********************************!*\
  !*** ./components/BelowFold.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SVGIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVGIllustration */ "./components/SVGIllustration.js");
/* harmony import */ var _components_WaveSVG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WaveSVG */ "./components/WaveSVG.js");
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\BelowFold.js";




const BelowFoldContainerDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
  margin-top: -9vh;

  #sitting-on-lock {
    fill: #292a36;
  }

  #below-fold-root {
    background: linear-gradient( 180deg, rgb(185,228,139), rgb(131,189,70) );
    padding: 10vh 10vw;
    display: flex;
    flex-direction: column;
  }

  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2%;
  }

  .right {
    margin-top: 10vh;
  }

  p {
    color: white;
    width: 100%;
  }

  h4 a {
    color: white;
  }

  h1 {
    color: white;
    font-size: 3rem;
    margin: 0%;
  }

  /* desktop-specific */

  @media (min-width: 768px) {
    margin-top: 0vh;

    .col {
      width: 50%;
    }
    #below-fold-root {
      flex-direction: row;
    }

    .left {
      padding-right: 4%;
    }

    .right {
      padding-left: 4%;
      margin-top: 0;
    }
  }
`;

const BelowFold = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BelowFoldContainerDiv, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WaveSVG__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "below-fold-root",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/brunocrosier/password.kiwi",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "FULLY OPEN SOURCE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "100% secure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, "Every password on this page is created securely, randomly and on-demand by your own device."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "None of your data ever touches our server. No cookies. No tracking pixels. No sweat.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "col right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SVGIllustration__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  style: {
    color: "#8ac24f"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "built with \u2764 by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://twitter.com/bruno_crosier",
  style: {
    color: "#8ac24f"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, " Bruno"))));

/* harmony default export */ __webpack_exports__["default"] = (BelowFold);

/***/ }),

/***/ "./components/HeadTag.js":
/*!*******************************!*\
  !*** ./components/HeadTag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\HeadTag.js";



const HeadTag = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Secure Password Generator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/static/favicon.ico",
  async: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
  rel: "manifest",
  href: "/static/manifest.json",
  async: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "theme-color",
  content: "rgb(159, 209, 105)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Password Kiwi | Secure Password Generator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "title",
  content: "Password Kiwi | Secure Password Generator",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "description",
  content: "Generate strong, secure, random passwords \uD83D\uDD12 100% open source, and works offline.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "og:type",
  content: "website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "og:url",
  content: "https://password.kiwi/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "og:title",
  content: "Password Kiwi | Secure Password Generator",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "og:description",
  content: "Generate strong, secure, random passwords \uD83D\uDD12 100% open source, and works offline.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "og:image",
  content: "https://password.kiwi/og-image.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "twitter:card",
  content: "summary_large_image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "twitter:url",
  content: "https://password.kiwi/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "twitter:title",
  content: "Password Kiwi | Secure Password Generator",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "twitter:description",
  content: "Generate strong, secure, random passwords \uD83D\uDD12 100% open source, and works offline.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  property: "twitter:image",
  content: "https://password.kiwi/og-image.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

/***/ }),

/***/ "./components/SVGIllustration.js":
/*!***************************************!*\
  !*** ./components/SVGIllustration.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\SVGIllustration.js";


const StyledShape = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg`

  filter: hue-rotate(-110deg);

  .st0 {
    fill: #5793ce;
  }
  .st1 {
    fill: #c4d9e8;
  }
  .st2 {
    fill: #f0fbff;
  }
  .st3 {
    fill: #173d7a;
  }
  .st4 {
    fill: #ffffff;
  }
  .st5 {
    fill: #396caa;
  }
  .st6 {
    fill: #d3d0cf;
  }
  .st7 {
    fill: #f2f2f2;
  }
  .st8 {
    fill: #d1b6ff;
  }
  .st9 {
    fill: #a576f5;
  }
  .st10 {
    fill: #274f89;
  }
`;

const SVGIllustration = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledShape, {
  id: "sitting-on-lock",
  width: "100%",
  viewBox: "0 0 293.4 247.5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: "251.4",
  y: "218.8",
  transform: "matrix(0.2483 0.9687 -0.9687 0.2483 404.2873 -77.9051)",
  className: "st0",
  width: "1.9",
  height: "5.5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: "248.6",
  y: "221.4",
  transform: "matrix(0.2482 0.9687 -0.9687 0.2482 404.8356 -73.2332)",
  className: "st0",
  width: "1.9",
  height: "5.5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: "245.9",
  y: "224.1",
  transform: "matrix(0.2482 0.9687 -0.9687 0.2482 405.3608 -68.5732)",
  className: "st0",
  width: "1.9",
  height: "5.5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: "243.2",
  y: "226.8",
  transform: "matrix(0.2483 0.9687 -0.9687 0.2483 405.8789 -63.9173)",
  className: "st0",
  width: "1.9",
  height: "5.5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st1",
  d: "M136.4,55.1L86,84.6c-12.8-3.9-29.1-2.7-39.8,3.6c-13.1,7.7-13,20,0.2,27.4c3,1.7,6.3,3,9.9,3.9\r c2.5,0.6,5.2,1.1,7.9,1.4c10.5,1,21.7-0.8,29.7-5.6c9.8-5.7,12.2-14,7.3-21l7-4.1l-0.2-4.4l7.3-0.1l-0.2-4.1l7.3-0.1l-0.2-4.1\r l7.3-0.1l-0.2-4.1l7.3-0.1l-0.2-4.1l7.8-0.1l2.4-1.4l2.6-10.9L136.4,55.1z M65.5,111.6c-3.4,2-8.9,2-12.4,0.1\r c-3.4-1.9-3.5-5.1-0.1-7.1c3.4-2,8.9-2,12.4-0.1C68.9,106.4,68.9,109.6,65.5,111.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st1",
  d: "M164,242.1L96,203c-4.6-2.6-4-7.3,1.3-10.3l66-38.1c5.3-3.1,13.3-3.4,17.9-0.7l68,39.1c4.6,2.6,4,7.3-1.3,10.3\r l-66,38.1C176.6,244.4,168.6,244.7,164,242.1z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M243.7,153.5l-11.8-6.8l43.3-25c2-1.2,2-3.1,0-4.3L231,91.9c-2-1.2-5.4-1.2-7.4,0l-43.3,25l-11.8-6.8\r l43.3-25c8.5-4.9,22.4-4.9,30.9,0l44.3,25.6c8.5,4.9,8.5,12.9,0,17.9L243.7,153.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M262.7,156.5c0-6.3-3.8-13.6-8.5-16.3l-78.5-45.3c-2.1-1.2-4-1.3-5.5-0.5l0,0l-93.7,54.5l90.6,68.3\r l92.3-53.6c0.3-0.1,0.6-0.3,0.8-0.5l0,0l0,0C261.7,161.9,262.7,159.6,262.7,156.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M167,217.2l92.3-53.6c0.3-0.1,0.6-0.3,0.8-0.5l0,0l0,0c1.5-1.2,2.5-3.5,2.5-6.6c0-3-0.9-6.2-2.3-9.1\r l-105.3,60.8L167,217.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M161.1,216.9l-78.5-45.3c-4.7-2.7-8.5-10-8.5-16.3l0,0c0-6.3,3.8-9.2,8.5-6.4l78.5,45.3\r c4.7,2.7,8.5,10,8.5,16.3l0,0C169.6,216.7,165.8,219.6,161.1,216.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M149.4,201.6l-9.4-5.4c-0.9-0.5-1.7-2-1.7-3.2l0,0c0-1.3,0.8-1.8,1.7-1.3l9.4,5.4c0.9,0.5,1.7,2,1.7,3.2l0,0\r C151.1,201.6,150.3,202.2,149.4,201.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
  className: "st5",
  points: "78.5,42 94.6,51.2 111.1,41.5 111,37.3 110.9,37.4 110.9,37.1 118.2,37.1 118.1,32.9 125.3,32.9 \r 125.3,28.8 132.5,28.7 132.4,24.6 139.6,24.5 139.6,20.4 147.2,20.3 149.6,18.9 152.2,8.1 152.2,3.9 150.9,7.9 139.3,6.4 \t\t\t",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
  className: "st2",
  points: "94.6,47 111,37.3 110.8,32.9 118.1,32.9 118,28.7 125.3,28.7 125.1,24.6 132.4,24.5 \r 132.2,20.4 139.6,20.3 139.4,16.2 147.2,16.1 149.6,14.7 152.2,3.9 139.3,2.2 78.4,37.8 \t\t\t\t\t\t\t\t",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M105.5,40.6c-1.7-2.4-4.1-4.6-7.5-6.4c-2.3-1.3-5-2.4-7.7-3.3l-11.9,7L94.6,47L105.5,40.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
  className: "st0",
  points: "151.8,5.7 152.2,3.9 150,3.6 98.6,33.7 101.3,35.3 \t\t\t\t\t\t\t\t",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
  className: "st6",
  points: "39.5,55.3 39.3,49.3 41.2,53.3 \t\t\t\t\t\t\t\t",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M49.4,68.7c13.2,7.5,34.5,7.3,47.5-0.3c6.6-3.8,9.8-8.8,9.7-13.8l0,0l-0.2-6.3l-1.1,1.2\r c-1.5-3.1-4.4-6.1-8.7-8.5c-13.2-7.5-34.5-7.3-47.5,0.3C36.2,48.9,36.3,61.2,49.4,68.7z M68.5,57.6c3.4,1.9,3.5,5.1,0.1,7.1\r c-3.4,2-8.9,2-12.4,0.1c-3.4-1.9-3.5-5.1,0-7.1C59.5,55.6,65,55.6,68.5,57.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st7",
  d: "M49.3,62.8c13.2,7.5,34.5,7.3,47.5-0.3c13.1-7.7,13-20-0.2-27.4c-13.2-7.5-34.5-7.3-47.5,0.3\r C36,43,36.1,55.3,49.3,62.8z M68.3,51.6c3.4,1.9,3.5,5.1,0.1,7.1c-3.4,2-8.9,2-12.4,0.1c-3.4-1.9-3.5-5.1-0.1-7.1\r C59.3,49.7,64.9,49.6,68.3,51.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M64.5,66c-2.9,0.5-6.1,0.1-8.4-1.2c-2.5-1.4-3.2-3.4-2.1-5.2l-6-4.7c0,0-3.1-3.5-6.2-7\r c-4.8,7-2.3,15.3,7.6,20.9c4.3,2.5,9.2,3.9,14.7,4.7L64.5,66z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M49.3,62.8c3,1.7,6.3,3,9.9,3.9c2.5,0.6,5.2,1.1,7.9,1.4c10.5,1,21.7-0.8,29.7-5.6\r c13.1-7.7,13-20-0.2-27.4c-13.2-7.5-34.5-7.3-47.5,0.3C36,43,36.1,55.3,49.3,62.8z M68.3,51.6c3.4,1.9,3.5,5.1,0.1,7.1\r c-3.4,2-8.9,2-12.4,0.1c-3.4-1.9-3.5-5.1-0.1-7.1C59.3,49.7,64.9,49.6,68.3,51.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M43,49.2c0.6-3.8,3.5-7.6,8.5-10.5c11.6-6.8,30.6-7,42.3-0.3c5.8,3.3,8.8,7.7,8.8,12.1\r c0.8-5-2.1-10.1-8.7-13.9c-11.7-6.7-30.7-6.5-42.3,0.3C45.9,40.2,43,44.7,43,49.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M35.1,103.5c-2.4,0-4.6-0.6-6.6-1.7c-4.7-2.7-7.3-8.1-7.4-15.2C21,73.7,30,57.8,41.2,51.2\r c6.1-3.6,12.1-4.1,16.8-1.4c2,1.1,3.7,2.8,4.9,4.9c1.6,2.8,2.5,6.2,2.5,10.3c0.1,12.9-8.9,28.8-20.1,35.4\r C41.8,102.4,38.3,103.5,35.1,103.5z M51.4,52.9c-2.4,0-5,0.8-7.8,2.5c-9.9,5.8-17.8,19.8-17.7,31.2c0,5.3,1.8,9.3,5,11.1\r c3.2,1.8,7.5,1.3,12.1-1.4c9.9-5.8,17.8-19.8,17.7-31.2c0-3.1-0.7-5.9-1.9-7.9l0,0C58,55.7,57,54.7,55.7,54\r C54.4,53.2,53,52.9,51.4,52.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
})))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M57.6,63.4l9.4,2.3l1.3-7c-3.4,2-8.9,2-12.4,0.1L57.6,63.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M49.3,62.8c3,1.7,6.3,3,9.9,3.9c2.5,0.6,5.2,1.1,7.9,1.4c10.5,1,21.7-0.8,29.7-5.6l-38.2-0.9L49.3,62.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M63.4,67.6c0,0-4.1-0.7-8.3-2.1v5.9c2,0.7,5.3,1.7,8.2,2.1C72,74.6,63.4,67.6,63.4,67.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M57.3,66.1c-1.7-0.5-3.6-1.2-5.4-2c-5.1-2.4,1.4,6.5,1.4,6.5s1.7,0.7,4.1,1.4V66.1z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
  className: "st0",
  points: "153.1,169.1 136.4,179.9 128.3,178.6 148.2,169 ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M132.9,223.6c0,0-4.8-2.4-7.8,1.2c-3,3.6-7.2,12.2-7.3,17.9c-0.1,5.8,4.6,5.4,7.4,4\r c2.8-1.4,10.9-13.2,11.4-15.5c0.5-2.3-0.6-5.5-1.4-6.1C134.5,224.5,132.9,223.6,132.9,223.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M134,222.4l0.2,5c0,1.1-0.5,2.1-1.4,2.6c-0.8,0.5-2.1,0.8-3.7,0.6c-3.6-0.6-4-1.6-4.2-6.6\r C124.6,219,134,222.4,134,222.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M115.3,214c0,0-4.8-2.4-7.8,1.2c-3,3.6-7.2,12.2-7.3,17.9c-0.1,5.8,4.6,5.4,7.4,4\r c2.8-1.4,10.9-13.2,11.4-15.5c0.5-2.3-0.6-5.5-1.4-6.1C116.9,214.9,115.3,214,115.3,214z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M116.3,212.8l0.2,5c0,1.1-0.5,2.1-1.4,2.6c-0.8,0.5-2.1,0.8-3.7,0.6c-3.6-0.6-4-1.6-4.2-6.6\r C107,209.4,116.3,212.8,116.3,212.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M159.3,121.2c-1.4-23.2-25.1,3.4-25.1,3.4L118,140.5l-14.6,16c-2.9,3.1-4.2,7.4-3.6,11.6l5.9,45\r c0.3,2.2,2.2,3.9,4.4,3.8c0.6,0,1.4-0.1,2.2-0.2c5.3-0.8,4.9-5.8,4.9-5.8l-1.1-42.1l30.7-18.5\r C146.7,150.4,160.7,144.4,159.3,121.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M127.8,160.9l-4.4-1.6c-0.1,0-7.4,7.1-7.4,9.5l3.3,1.1l8.2-8L127.8,160.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M153.1,169.1c0,0,18.2-10.4,20.4-14.8c0.9-1.7,2.2-3.5-3.1-6.1l-24.3,17.3l1.1,6L153.1,169.1z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M176.9,130.2c-1.5-23.2-25.1,3.4-25.1,3.4l-16.2,15.9l-14.6,16c-2.9,3.1-4.2,7.4-3.6,11.6l5.9,45\r c0.3,2.2,2.2,3.9,4.4,3.8c0.6,0,1.4-0.1,2.2-0.2c5.3-0.8,4.9-5.8,4.9-5.8l-1.1-42.1l30.7-18.5\r C164.4,159.3,178.3,151.4,176.9,130.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M162.9,55.6c18,7.4,17.6,18.1,17.6,18.1s-3.5,38.9-2.3,64.9c0.5,10.9-57.7,11.7-49-17.3\r c10.2-34.2,6.4-61.8,11.2-66C145.1,51.1,158.3,53.7,162.9,55.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 297
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M168.7,65c-0.9,3.6-5.7,5.6-10.7,4.3s-8.2-5.3-7.3-8.9c0.9-3.6,5.7-5.6,10.7-4.3\r C166.4,57.4,169.6,61.4,168.7,65z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M161.1,70.6c-1.1,0-2.1-0.1-3.2-0.4c-2.6-0.7-4.8-2-6.3-3.9c-1.5-1.9-2.1-4.1-1.6-6.1\r c1.1-4.1,6.3-6.3,11.7-4.9c2.6,0.7,4.8,2,6.3,3.9c1.6,1.9,2.1,4.1,1.6,6.1C168.7,68.5,165.2,70.6,161.1,70.6z M158.4,56.6\r c-3.3,0-6.1,1.6-6.8,4c-0.4,1.5,0.1,3.1,1.3,4.6c1.3,1.5,3.2,2.7,5.4,3.3c4.5,1.2,8.8-0.5,9.6-3.7c0.4-1.5-0.1-3.1-1.3-4.6\r c-1.3-1.5-3.2-2.7-5.4-3.3C160.2,56.7,159.3,56.6,158.4,56.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M155.7,54.8c0,0,0.2,0.7-0.2,6.4c-0.1,1.8,6.2,3.5,7.8,1.8c1.6-1.6,1-3.3,1.4-9.4\r C165.1,47.6,155.7,54.8,155.7,54.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st9",
  d: "M164.7,53.7c0,0-1.5,5.6-9.1,7.8l0.1-5.1L164.7,53.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M169.5,39.3c1.9,7.4-2.5,14.9-9.9,16.8c-7.4,1.9-14.9-2.5-16.8-9.9c-1.9-7.4,2.5-14.9,9.9-16.8\r C160.1,27.5,167.6,31.9,169.5,39.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st9",
  d: "M159.3,43.3c0,0-7.6,3.3-12.9,3.3c-5.3,0-4.1-4.4-4.1-4.4L158,40L159.3,43.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M144.9,44.2c0,0,6.6-2.8,12.4-1.6c1.4,0.3,2.6,1,3.5,2.1c0.3,0.4,0.7,0.7,1.1,0.8c1,0.2,2.7-4,4.7-4.1\r c2-0.1,3.3,1.3,1.7,4c-1.6,2.6-1.1,5.6-0.3,6c0.8,0.4,8.8-5.7,1.7-19.7c-7.1-14-25-6.5-27.8-3.6c0,0-2.9,2.6-5.3,0.3\r C136.5,28.1,133.8,48.2,144.9,44.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M170.4,102.1v10.5c0,1.2-0.5,2.4-1.4,3.2l-21.6,19.7l2.5,3.8l28.5-20.7c1.3-1,2.2-2.5,2.4-4.1l1.9-18.3\r L170.4,102.1z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M179,68.4c0,0,6.6,9.9,9,35.8c0,0-11.2,3.6-17.5,1.6C164.1,103.7,179,68.4,179,68.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M169.2,80.9c0,0-2.6,13.7-2.7,20.2c0,1.8,1,3.4,2.7,4l0,0V80.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 352
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M163.6,149.2l-4.8-0.6l-30.8-17.8c-1-0.6-2.7-0.5-3.9,0.2l-21.8,12.6l-2.9-0.4v2.9l0,0c0,0.4,0.2,0.7,0.7,1\r l34.9,20.2c1,0.6,2.7,0.5,3.9-0.2l23.8-13.7c0.6-0.4,1-0.8,0.9-1.3h0V149.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 353
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M140.5,137.9l-2.2-1.3h-24.1l-11.9,6.8l-2.9-0.4v2.9l0,0c0,0.4,0.2,0.7,0.7,1l34.9,20.2\r c0.5,0.3,1.3,0.4,2,0.4L140.5,137.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 358
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M100.8,143.3l-1.3-0.2v2.9l0,0c0,0.4,0.2,0.7,0.7,1l0.6,0.4V143.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st10",
  d: "M135.4,167.3c0.9,0.4,2.3,0.3,3.3-0.2v-4.9h-3.3V167.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 367
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M135.1,164.3l-34.9-20.2c-1-0.6-0.9-1.6,0.3-2.2l23.8-13.7c1.1-0.7,2.9-0.7,3.9-0.2l34.9,20.2\r c1,0.6,0.9,1.6-0.3,2.2l-23.8,13.7C137.8,164.8,136.1,164.9,135.1,164.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M134.5,161.2l-29-16.8c-0.8-0.5-0.7-1.3,0.2-1.9l12.7-7.2c0.9-0.5,2.4-0.6,3.2-0.1l29,16.8\r c0.8,0.5,0.7,1.3-0.2,1.9l-12.7,7.2C136.7,161.7,135.3,161.7,134.5,161.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M125.5,127.5l-0.4,2.4c-0.3,2.1-0.3,4.1,0.2,6.2l0.4,2.1c0.2,1.2,1.2,2.1,2.4,2.3l0,0c0.9,0.2,1.8-0.5,1.9-1.4\r l0.6-5.2c0,0,1.3,1.7,2,1.7c0.6,0-0.7-5.2-2.2-8.1C129,124.7,125.5,127.5,125.5,127.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 382
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M137.4,89.2l-3.7,7.4c-0.9,1.8-1.4,3.7-1.5,5.6l-1.6,25.4l-4.9-0.1L123.3,99c-0.1-0.9,0-1.8,0.1-2.6l2.6-14.4\r L137.4,89.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 387
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 392
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M133.9,166.2l-2.9-3.8l-30.8-17.8c-1-0.6-1.8-2.1-1.8-3.4l0-25.2l-1.8-2.3l1.7-1l0,0c0.3-0.2,0.7-0.2,1.2,0.1\r l34.9,20.2c1,0.6,1.8,2.1,1.8,3.4l0,27.5c0,0.7-0.3,1.3-0.7,1.5h0L133.9,166.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 393
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M112.6,151.8l-2.2-1.3l-12-20.9l0-13.7l-1.8-2.3l1.7-1l0,0c0.3-0.2,0.7-0.2,1.2,0.1l34.9,20.2\r c0.5,0.3,1,0.9,1.3,1.5L112.6,151.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 398
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M97.4,114.7l-0.8-1l1.7-1l0,0c0.3-0.2,0.7-0.2,1.2,0.1l0.6,0.4L97.4,114.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 403
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st10",
  d: "M134.7,133.2c0.8,0.6,1.4,1.8,1.5,2.9l-3.4,2l-1.6-2.8L134.7,133.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M132.7,133.9l-34.9-20.2c-1-0.6-1.8,0-1.8,1.4l0,27.5c0,1.3,0.8,2.8,1.8,3.4l34.9,20.2c1,0.6,1.8,0,1.8-1.4\r l0-27.5C134.5,136,133.7,134.5,132.7,133.9z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 411
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st8",
  d: "M149.9,139.2l-0.6,1.2c-0.6,1.3-1.7,2.5-2.9,3.2l-3.5,2.1c-1.1,0.7-2.4,0.7-3.5,0.1c0,0-0.1,0-0.1-0.1\r c-1.1-0.7-1.2-2.3-0.3-3.2l3.6-3.7c0,0-2,1.6-2.6,0.9c-0.4-0.5,2-2.7,3.8-2.8c1.8-0.1,3.6-1.5,3.6-1.5L149.9,139.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 417
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M140.7,55.2c0,0-13.3,14.5-18.6,27.7c0,0,4.5,8.2,15.7,11.4C148.9,97.5,140.7,55.2,140.7,55.2z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M135.2,93.5l2.2-20.8l-5.1,19.5C133.2,92.6,134.2,93.1,135.2,93.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 426
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M150.7,52.3l-3.6-1c0,0,1.7,2.7,4.2,3.4c2.5,0.7,2.9-1.4,2.9-1.4L150.7,52.3z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 430
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M82.9,20.4c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C92.9,15.9,88.4,20.4,82.9,20.4z\r M82.9,2.6c-4.3,0-7.8,3.5-7.8,7.8c0,4.3,3.5,7.8,7.8,7.8c4.3,0,7.8-3.5,7.8-7.8C90.7,6.1,87.2,2.6,82.9,2.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 435
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M285,92.4c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1s7.1,3.2,7.1,7.1S288.9,92.4,285,92.4z M285,80.4\r c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9C289.9,82.6,287.7,80.4,285,80.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 440
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M52.6,220.5l-4.8-9.8l9.8-4.8l4.8,9.8L52.6,220.5z M50.7,211.7l2.9,5.9l5.9-2.9l-2.9-5.9L50.7,211.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M194.6,68.8l-4.8-9.8l9.8-4.8l4.8,9.8L194.6,68.8z M192.7,60l2.9,5.9l5.9-2.9l-2.9-5.9L192.7,60z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 449
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: "35.8",
  y: "161.6",
  transform: "matrix(0.8974 -0.4412 0.4412 0.8974 -68.4872 33.7432)",
  className: "st0",
  width: "5",
  height: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 453
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 461
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st3",
  d: "M215.8,15.7L189,0.3c-0.5-0.3-1-0.3-1.4-0.1c0,0,0,0,0,0l-2.6,1.5c0,0,1.1,0.4,1.8,0.7v19.5\r c0,1.6,1,3.4,2.2,4.1l25.6,14.8v2.3l2.6-1.5l0,0c0.4-0.3,0.7-0.9,0.7-1.7V19.8C217.9,18.2,217,16.4,215.8,15.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st5",
  d: "M213.1,42.8l-26.7-15.4c-1.2-0.7-2.2-2.5-2.2-4.1V3.4c0-1.6,1-2.3,2.2-1.6l26.7,15.4c1.2,0.7,2.2,2.5,2.2,4.1\r v19.9C215.3,42.8,214.3,43.5,213.1,42.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 468
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 474
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M195.4,20.5c0,1.2-0.8,1.6-1.8,1c-1-0.6-1.8-2-1.8-3.1c0-1.2,0.8-1.6,1.8-1C194.6,18,195.4,19.4,195.4,20.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 475
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M200.8,23.7c0,1.2-0.8,1.6-1.8,1s-1.8-2-1.8-3.1c0-1.2,0.8-1.6,1.8-1C200,21.1,200.8,22.5,200.8,23.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 479
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M206.3,26.9c0,1.2-0.8,1.6-1.8,1c-1-0.6-1.8-2-1.8-3.1c0-1.2,0.8-1.6,1.8-1C205.5,24.3,206.3,25.7,206.3,26.9\r z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 483
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 490
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 491
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st0",
  d: "M30.9,184.8L4.7,169.7c-0.5-0.3-1-0.3-1.4-0.1c0,0,0,0,0,0L0.8,171c0,0,1.1,0.4,1.8,0.7v19.1\r c0,1.6,0.9,3.4,2.1,4l25.1,14.5v2.2l2.6-1.5l0,0c0.4-0.3,0.7-0.8,0.7-1.7v-19.5C33,187.3,32.1,185.5,30.9,184.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 492
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st2",
  d: "M28.3,211.5L2.1,196.3c-1.2-0.7-2.1-2.5-2.1-4v-19.5c0-1.6,0.9-2.3,2.1-1.6l26.2,15.1c1.2,0.7,2.1,2.5,2.1,4\r v19.5C30.5,211.4,29.5,212.1,28.3,211.5z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 497
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 503
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M10.9,189.6c0,1.1-0.8,1.6-1.8,1c-1-0.6-1.8-1.9-1.8-3.1c0-1.1,0.8-1.6,1.8-1\r C10.1,187.1,10.9,188.5,10.9,189.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 504
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M16.3,192.7c0,1.1-0.8,1.6-1.8,1c-1-0.6-1.8-1.9-1.8-3.1c0-1.1,0.8-1.6,1.8-1\r C15.5,190.2,16.3,191.6,16.3,192.7z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 509
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "st4",
  d: "M21.7,195.8c0,1.1-0.8,1.6-1.8,1c-1-0.6-1.8-1.9-1.8-3.1c0-1.1,0.8-1.6,1.8-1\r C20.9,193.3,21.7,194.7,21.7,195.8z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 514
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (SVGIllustration);

/***/ }),

/***/ "./components/Switch.js":
/*!******************************!*\
  !*** ./components/Switch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\Switch.js";




const StyledSwitch = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1___default.a)`
  .MuiSwitch-colorPrimary.Mui-checked {
    color: #89c14d;
  }
  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background: #89c14d;
  }
`;

const MySwitch = ({
  checked,
  onChange,
  name,
  setHasBeenCopied
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSwitch, {
    checked: checked,
    onChange: () => {
      onChange(!checked);
      setHasBeenCopied(false);
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  label: name,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (MySwitch);

/***/ }),

/***/ "./components/WaveSVG.js":
/*!*******************************!*\
  !*** ./components/WaveSVG.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\WaveSVG.js";


const StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg`
  fill: #b9e48b;
`;

const WaveSVG = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSvg, {
  x: "0px",
  y: "0px",
  width: "100%",
  viewBox: "0 0 595.3 24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M446.5,18c74.4,0,111.6-4.5,148.8-9v15H0V9c37.2-4.5,74.4-9,148.8-9C297.6,0,297.6,18,446.5,18z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (WaveSVG);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomatic */ "randomatic");
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomatic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeadTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeadTag */ "./components/HeadTag.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use-scroll-position */ "react-use-scroll-position");
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-fittext */ "react-fittext");
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_fittext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BelowFold__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BelowFold */ "./components/BelowFold.js");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-use-clipboard */ "react-use-clipboard");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_use_clipboard__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_input_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-input-slider */ "react-input-slider");
/* harmony import */ var react_input_slider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_input_slider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Switch */ "./components/Switch.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\pages\\index.js";

















const Home = () => {
  const initialPassword = false !== undefined ? randomatic__WEBPACK_IMPORTED_MODULE_2___default()("Aa0!", 10) : null;
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPassword);
  const [snackbarIsOpen, setSnackbarIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [areSymbolsAllowed, setAreSymbolsAllowed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [areNumbersAllowed, setAreNumbersAllowed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [areLettersAllowed, setAreLettersAllowed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [sliderValue, setSliderValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(13);
  const [hasBeenCopied, setHasBeenCopied] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const scrollYProgress = Object(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_8__["useScrollYPosition"])();
  const [isCopied, setCopied] = react_use_clipboard__WEBPACK_IMPORTED_MODULE_11___default()(password);

  const generatePassword = () => {
    let randomizeValue = "";

    if (areLettersAllowed) {
      randomizeValue = randomizeValue + "Aa";
    }

    if (areNumbersAllowed) {
      randomizeValue = randomizeValue + "0";
    }

    if (areSymbolsAllowed) {
      randomizeValue = randomizeValue + "!";
    }

    if (randomizeValue === "") {
      setPassword(":(");
    } else {
      setPassword(randomatic__WEBPACK_IMPORTED_MODULE_2___default()(randomizeValue, sliderValue));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    generatePassword();
  }, [areLettersAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    generatePassword();
  }, [areNumbersAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    generatePassword();
  }, [areSymbolsAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    generatePassword();
  }, [sliderValue]);

  const handleSnackbarClose = () => setSnackbarIsOpen(false);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HeadTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app-container",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "menu-bar",
    className: "jsx-2921363383" + " " + ((scrollYProgress < 1 ? "" : "scrolled-menu-bar") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/logo.svg",
    alt: "password.kiwi logo",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "main-box",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "input-component",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fittext__WEBPACK_IMPORTED_MODULE_9___default.a, {
    compressor: 1.5,
    maxFontSize: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: "#8ac24f"
    },
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "secure password generator")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, {
    id: "generated-password-input",
    name: "generated-password",
    "aria-label": "generated-password",
    className: "input-gradient-bg",
    onClick: () => {
      setCopied();
      setHasBeenCopied(true);
      setSnackbarIsOpen(true);
    },
    whileHover: {
      scale: 1.05
    },
    whileTap: {
      scale: 0.95,
      filter: "blur(3px)"
    },
    transition: {
      ease: "easeOut",
      duration: 0.3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, password), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    id: "click-to-copy",
    onClick: () => {
      if (!hasBeenCopied) {
        setCopied(password);
        setHasBeenCopied(true);
        setSnackbarIsOpen(true);
      } else {
        generatePassword();
        setHasBeenCopied(false);
      }
    },
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "click to ", hasBeenCopied ? "generate" : "copy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "5vh 0",
      display: "flex",
      justifyContent: "space-evenly"
    },
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
    checked: areSymbolsAllowed,
    onChange: setAreSymbolsAllowed,
    name: "Symbols",
    setHasBeenCopied: setHasBeenCopied,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
    checked: areNumbersAllowed,
    onChange: setAreNumbersAllowed,
    name: "Numbers",
    setHasBeenCopied: setHasBeenCopied,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Switch__WEBPACK_IMPORTED_MODULE_13__["default"], {
    checked: areLettersAllowed,
    onChange: setAreLettersAllowed,
    name: "Letters",
    setHasBeenCopied: setHasBeenCopied,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_input_slider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      display: "flex",
      alignSelf: "center",
      minWidth: "60%"
    },
    styles: {
      active: {
        backgroundColor: "#c2dea4"
      },
      thumb: {
        width: 20,
        height: 20,
        backgroundColor: "#89c14d"
      }
    },
    axis: "x",
    xstep: 1,
    xmin: 8,
    xmax: 30,
    x: sliderValue,
    onChange: ({
      x
    }) => {
      setSliderValue(x);
      setHasBeenCopied(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, sliderValue, " characters"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSnack, {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    open: snackbarIsOpen,
    autoHideDuration: 1000,
    message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "message-id",
      className: "jsx-2921363383",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: undefined
    }, "copied to clipboard!"),
    onClose: handleSnackbarClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BelowFold__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2921363383",
    __self: undefined
  }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ1bm9cXERvY3VtZW50c1xcQ29kZVxcMDIwOFxccGFzc3dvcmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTWtCLEFBR29CLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxCcnVub1xcRG9jdW1lbnRzXFxDb2RlXFwwMjA4XFxwYXNzd29yZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCByYW5kb21pemUgZnJvbSBcInJhbmRvbWF0aWNcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IEhlYWRUYWcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFRhZ1wiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiXHJcbmltcG9ydCB7IHVzZVNjcm9sbFlQb3NpdGlvbiB9IGZyb20gXCJyZWFjdC11c2Utc2Nyb2xsLXBvc2l0aW9uXCJcclxuaW1wb3J0IFJlYWN0Rml0VGV4dCBmcm9tIFwicmVhY3QtZml0dGV4dFwiXHJcbmltcG9ydCBCZWxvd0ZvbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmVsb3dGb2xkXCJcclxuaW1wb3J0IHVzZUNsaXBib2FyZCBmcm9tIFwicmVhY3QtdXNlLWNsaXBib2FyZFwiXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LWlucHV0LXNsaWRlclwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU3dpdGNoXCJcclxuaW1wb3J0IHsgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsUGFzc3dvcmQgPVxyXG4gICAgcHJvY2Vzcy5icm93c2VyICE9PSB1bmRlZmluZWQgPyByYW5kb21pemUoXCJBYTAhXCIsIDEwKSA6IG51bGxcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKGluaXRpYWxQYXNzd29yZClcclxuICBjb25zdCBbc25hY2tiYXJJc09wZW4sIHNldFNuYWNrYmFySXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthcmVTeW1ib2xzQWxsb3dlZCwgc2V0QXJlU3ltYm9sc0FsbG93ZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbYXJlTnVtYmVyc0FsbG93ZWQsIHNldEFyZU51bWJlcnNBbGxvd2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2FyZUxldHRlcnNBbGxvd2VkLCBzZXRBcmVMZXR0ZXJzQWxsb3dlZF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGUoMTMpXHJcbiAgY29uc3QgW2hhc0JlZW5Db3BpZWQsIHNldEhhc0JlZW5Db3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHNjcm9sbFlQcm9ncmVzcyA9IHVzZVNjcm9sbFlQb3NpdGlvbigpXHJcblxyXG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChwYXNzd29yZClcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGxldCByYW5kb21pemVWYWx1ZSA9IFwiXCJcclxuXHJcbiAgICBpZiAoYXJlTGV0dGVyc0FsbG93ZWQpIHtcclxuICAgICAgcmFuZG9taXplVmFsdWUgPSByYW5kb21pemVWYWx1ZSArIFwiQWFcIlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmVOdW1iZXJzQWxsb3dlZCkge1xyXG4gICAgICByYW5kb21pemVWYWx1ZSA9IHJhbmRvbWl6ZVZhbHVlICsgXCIwXCJcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJlU3ltYm9sc0FsbG93ZWQpIHtcclxuICAgICAgcmFuZG9taXplVmFsdWUgPSByYW5kb21pemVWYWx1ZSArIFwiIVwiXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJhbmRvbWl6ZVZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHNldFBhc3N3b3JkKFwiOihcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBhc3N3b3JkKHJhbmRvbWl6ZShyYW5kb21pemVWYWx1ZSwgc2xpZGVyVmFsdWUpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdlbmVyYXRlUGFzc3dvcmQoKVxyXG4gIH0sIFthcmVMZXR0ZXJzQWxsb3dlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZW5lcmF0ZVBhc3N3b3JkKClcclxuICB9LCBbYXJlTnVtYmVyc0FsbG93ZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2VuZXJhdGVQYXNzd29yZCgpXHJcbiAgfSwgW2FyZVN5bWJvbHNBbGxvd2VkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdlbmVyYXRlUGFzc3dvcmQoKVxyXG4gIH0sIFtzbGlkZXJWYWx1ZV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNuYWNrYmFyQ2xvc2UgPSAoKSA9PiBzZXRTbmFja2JhcklzT3BlbihmYWxzZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8SGVhZFRhZyAvPlxyXG5cclxuICAgICAgPEFwcENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGlkPVwiYXBwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYmFyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3JvbGxZUHJvZ3Jlc3MgPCAxID8gXCJcIiA6IFwic2Nyb2xsZWQtbWVudS1iYXJcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJwYXNzd29yZC5raXdpIGxvZ29cIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImlucHV0LWNvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgIDxSZWFjdEZpdFRleHQgY29tcHJlc3Nvcj17MS41fSBtYXhGb250U2l6ZT17NDV9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiM4YWMyNGZcIiB9fT5zZWN1cmUgcGFzc3dvcmQgZ2VuZXJhdG9yPC9oMT5cclxuICAgICAgICAgICAgICA8L1JlYWN0Rml0VGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cclxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZXJhdGVkLXBhc3N3b3JkLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5lcmF0ZWQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImdlbmVyYXRlZC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncmFkaWVudC1iZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvcGllZCgpXHJcbiAgICAgICAgICAgICAgICAgIHNldEhhc0JlZW5Db3BpZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgc2V0U25hY2tiYXJJc09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSwgZmlsdGVyOiBcImJsdXIoM3B4KVwiIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICBpZD1cImNsaWNrLXRvLWNvcHlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWhhc0JlZW5Db3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3BpZWQocGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzQmVlbkNvcGllZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNuYWNrYmFySXNPcGVuKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQYXNzd29yZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzQmVlbkNvcGllZChmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBjbGljayB0byB7aGFzQmVlbkNvcGllZCA/IFwiZ2VuZXJhdGVcIiA6IFwiY29weVwifVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1dmggMFwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthcmVTeW1ib2xzQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEFyZVN5bWJvbHNBbGxvd2VkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiU3ltYm9sc1wiXHJcbiAgICAgICAgICAgICAgICAgIHNldEhhc0JlZW5Db3BpZWQ9e3NldEhhc0JlZW5Db3BpZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthcmVOdW1iZXJzQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEFyZU51bWJlcnNBbGxvd2VkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTnVtYmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgIHNldEhhc0JlZW5Db3BpZWQ9e3NldEhhc0JlZW5Db3BpZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthcmVMZXR0ZXJzQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEFyZUxldHRlcnNBbGxvd2VkfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTGV0dGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgIHNldEhhc0JlZW5Db3BpZWQ9e3NldEhhc0JlZW5Db3BpZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCI2MCVcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjMmRlYTRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB0aHVtYjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODljMTRkXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGF4aXM9XCJ4XCJcclxuICAgICAgICAgICAgICAgIHhzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgeG1pbj17OH1cclxuICAgICAgICAgICAgICAgIHhtYXg9ezMwfVxyXG4gICAgICAgICAgICAgICAgeD17c2xpZGVyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgeCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNsaWRlclZhbHVlKHgpXHJcbiAgICAgICAgICAgICAgICAgIHNldEhhc0JlZW5Db3BpZWQoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+e3NsaWRlclZhbHVlfSBjaGFyYWN0ZXJzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxTdHlsZWRTbmFja1xyXG4gICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9wZW49e3NuYWNrYmFySXNPcGVufVxyXG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj5jb3BpZWQgdG8gY2xpcGJvYXJkITwvc3Bhbj59XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVNuYWNrYmFyQ2xvc2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCZWxvd0ZvbGQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BcHBDb250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Hb29nbGUrU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgI21lbnUtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMxYWMzZTEzODtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigxNTksIDIwOSwgMTA1KTsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMTQ4LCAyMDEsIDkyKSwgcmdiKDE1OSwgMjA5LCAxMDUpKTtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICB9XHJcblxyXG4gIC5zY3JvbGxlZC1tZW51LWJhciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAjMzEzMTMxMzggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNtYWluLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTEzdmg7XHJcbiAgfVxyXG5cclxuICBidXR0b24jZ2VuZXJhdGVkLXBhc3N3b3JkLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwdnc7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggIzQ0NDQ0NDQyO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uI2dlbmVyYXRlZC1wYXNzd29yZC1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgfVxyXG4gIGJ1dHRvbiNnZW5lcmF0ZWQtcGFzc3dvcmQtaW5wdXQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAjbWVudS1iYXIgPiBpbWcge1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG4gIH1cclxuICBwIHtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgfVxyXG4gICNhcHAtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI5ZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDUsIDI0NSwgMjQ1KSk7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYsXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjOGFjMjRmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBoNCNjbGljay10by1jb3B5IHtcclxuICAgIGNvbG9yOiAjOGFjMjRmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJ2aCA4dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29sZmF4XCI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjaW5wdXQtY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXZoO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdyYWRpZW50LWJnIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNmRlZywgI2ZmZmZmZiAwJSwgI2FmYWZhZiAxMDAlKTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncmFkaWVudC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjNkZWcsIHJnYigxODUsIDIyOCwgMTM5KSwgcmdiKDEzMSwgMTg5LCA3MCkpO1xyXG4gIH1cclxuXHJcbiAgLmNsaXAtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2lucHV0LWNvbXBvbmVudCB7XHJcbiAgICAgIHdpZHRoOiA2N3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICNtYWluLWJveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAjZ2VuZXJhdGVkLXBhc3N3b3JkLWlucHV0IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3R5bGVkU25hY2sgPSBzdHlsZWQoU25hY2tiYXIpYFxyXG4gIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIHBhZGRpbmc6IDZweCAzNnB4O1xyXG4gIH1cclxuICAuTXVpVHlwb2dyYXBoeS1yb290IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyM2RlZywgcmdiKDE4NSwgMjI4LCAxMzkpLCByZ2IoMTMxLCAxODksIDcwKSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjMDQwNDA0NjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\pages\\index.js */"));
};

const AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div`
  @import url("https://fonts.googleapis.com/css?family=Google+Sans:400,700&display=swap");

  #menu-bar {
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 10;
    box-shadow: 0px 0px 1px #1ac3e138;
    /* background: rgb(159, 209, 105); */
    background: linear-gradient(0deg, rgb(148, 201, 92), rgb(159, 209, 105));
    height: 10vh;
  }

  .scrolled-menu-bar {
    box-shadow: 0px 0px 7px #31313138 !important;
  }

  #main-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100vh;
    margin-top: -13vh;
  }

  button#generated-password-input {
    border-radius: 50vw;
    font-size: 30px;
    height: 80px;
    text-align: center;
    letter-spacing: 5px;
    border: 0px solid transparent;
    box-shadow: 0px 2px 10px #44444442;
    padding: 10px 40px 10px 40px;
    font-weight: 700;
    color: white;
    -webkit-tap-highlight-color: transparent;
    justify-self: center;
    align-self: center;
    max-width: 100%;

    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
  }

  button#generated-password-input:focus {
    outline: 1px transparent solid;
  }
  button#generated-password-input:hover {
    cursor: pointer;
  }
  #menu-bar > img {
    padding: 1vh;
  }
  p {
    -webkit-tap-highlight-color: transparent;
    font-size: 1.05rem;
  }
  #app-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 100vh;
    background: linear-gradient(129deg, rgb(255, 255, 255), rgb(245, 245, 245));
  }

  body {
    margin: 0px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: "Google Sans", sans-serif;
  }

  p {
    font-family: "Google Sans", sans-serif;
  }

  a {
    color: #8ac24f;
    text-decoration: none;
    font-weight: bold;
  }

  h4#click-to-copy {
    color: #8ac24f;
    text-transform: uppercase;
    letter-spacing: 7px;
    opacity: 0.8;
    cursor: pointer;
  }

  .text-container {
    display: flex;
    padding: 2vh 8vw;
    border-radius: 20px;
    font-family: "Colfax";
    align-self: center;
    max-width: 100%;
  }

  #input-component {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 5vh;
    align-self: center;
  }

  .gradient-bg {
    background: linear-gradient(26deg, #ffffff 0%, #afafaf 100%);
  }

  .input-gradient-bg {
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
  }

  .clip-text {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    #input-component {
      width: 67vw;
    }

    #main-box {
      margin-top: -10vh;
    }
  }

  @media (orientation: landscape) {
    #generated-password-input {
      max-width: 50vw;
    }
  }
`;
const StyledSnack = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7___default.a)`
  div {
    background: transparent;
    flex-grow: 0;
    padding: 6px 36px;
  }
  .MuiTypography-root {
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
    box-shadow: 0px 2px 5px #04040463;
    border-radius: 30px;
    justify-content: center;
  }
  span {
    font-family: "Google Sans";
    font-weight: 700;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bruno\Documents\Code\0208\password\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "randomatic":
/*!*****************************!*\
  !*** external "randomatic" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("randomatic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-fittext":
/*!********************************!*\
  !*** external "react-fittext" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fittext");

/***/ }),

/***/ "react-input-slider":
/*!*************************************!*\
  !*** external "react-input-slider" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-input-slider");

/***/ }),

/***/ "react-use-clipboard":
/*!**************************************!*\
  !*** external "react-use-clipboard" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-clipboard");

/***/ }),

/***/ "react-use-scroll-position":
/*!********************************************!*\
  !*** external "react-use-scroll-position" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-scroll-position");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map