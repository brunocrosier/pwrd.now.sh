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
  content: "rgb(131,189,70)",
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
  content: "",
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
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\Logo.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1520030765",
  __self: undefined
}, "svg.jsx-1520030765{height:7vh;padding:0 1rem;}.st0.jsx-1520030765{fill:none;}.st1.jsx-1520030765{fill:#e7eced;}.st2.jsx-1520030765{fill:#683a02;}.st3.jsx-1520030765{fill:#7f4704;}.st4.jsx-1520030765{fill:#91cc04;}.st5.jsx-1520030765{fill:#79ab03;}.st6.jsx-1520030765{fill:#3a312a;}.st7.jsx-1520030765{fill:#c2fb3b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ1bm9cXERvY3VtZW50c1xcQ29kZVxcMDIwOFxccGFzc3dvcmRcXGNvbXBvbmVudHNcXExvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR08sQUFHc0IsQUFLRCxBQUdHLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLFVBcEJmLENBTGlCLEVBUWpCLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLGFBekJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQnJ1bm9cXERvY3VtZW50c1xcQ29kZVxcMDIwOFxccGFzc3dvcmRcXGNvbXBvbmVudHNcXExvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIGhlaWdodDogN3ZoO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0MCB7XHJcbiAgICAgICAgICBmaWxsOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3QxIHtcclxuICAgICAgICAgIGZpbGw6ICNlN2VjZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdDIge1xyXG4gICAgICAgICAgZmlsbDogIzY4M2EwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0MyB7XHJcbiAgICAgICAgICBmaWxsOiAjN2Y0NzA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Q0IHtcclxuICAgICAgICAgIGZpbGw6ICM5MWNjMDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdDUge1xyXG4gICAgICAgICAgZmlsbDogIzc5YWIwMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0NiB7XHJcbiAgICAgICAgICBmaWxsOiAjM2EzMTJhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3Q3IHtcclxuICAgICAgICAgIGZpbGw6ICNjMmZiM2I7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzE3LjggNDg2LjRcIj5cclxuICAgICAgPGRlZnMgLz5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0MFwiXHJcbiAgICAgICAgICBkPVwiTTIzOC4zLDE2Ny43di01M2MwLTQzLjEtMzYuNC03OS40LTc5LjQtNzkuNHMtNzkuNCwzNi40LTc5LjQsNzkuNHY1M2gxNy43djEzLjRjMTktOCwzOS45LTEyLjUsNjEuOC0xMi41XHJcblx0XHRjMjEuOSwwLDQyLjgsNC40LDYxLjgsMTIuNXYtMTMuNEgyMzguM3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0MVwiXHJcbiAgICAgICAgICBkPVwiTTc5LjQsMTE0LjhjMC00My4xLDM2LjQtNzkuNCw3OS40LTc5LjRzNzkuNCwzNi40LDc5LjQsNzkuNHY1M2gzNS4zdi01M0MyNzMuNyw1MS45LDIyMS43LDAsMTU4LjksMFxyXG5cdFx0UzQ0LjEsNTEuOSw0NC4xLDExNC44djUzaDM1LjNWMTE0Ljh6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdDJcIlxyXG4gICAgICAgICAgZD1cIk05Ny4xLDE4MS4xdi0xMy40SDc5LjRINDQuMUgyNi41djcyQzQzLjcsMjEzLjgsNjguMiwxOTMuMyw5Ny4xLDE4MS4xelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3QyXCJcclxuICAgICAgICAgIGQ9XCJNMjIwLjcsMTY3Ljd2MTMuNGMyOC45LDEyLjIsNTMuNCwzMi43LDcwLjYsNTguNnYtNzJoLTE3LjdoLTM1LjNIMjIwLjd6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdDNcIlxyXG4gICAgICAgICAgZD1cIk0yOTEuMywyMzkuN2MtMTcuMi0yNS44LTQxLjctNDYuNC03MC42LTU4LjZjLTE5LTgtMzkuOS0xMi41LTYxLjgtMTIuNWMtMjEuOSwwLTQyLjgsNC40LTYxLjgsMTIuNVxyXG5cdFx0Yy0yOC45LDEyLjItNTMuNCwzMi43LTcwLjYsNTguNkM5LjgsMjY0LjgsMCwyOTUsMCwzMjcuNWMwLDg3LjgsNzEuMSwxNTguOSwxNTguOSwxNTguOXMxNTguOS03MS4xLDE1OC45LTE1OC45XHJcblx0XHRDMzE3LjgsMjk1LDMwOCwyNjQuOCwyOTEuMywyMzkuN3ogTTE1OS42LDQ2Ni43Yy0zLjgsMC03LjYtMC4yLTExLjMtMC41YzEtMC4xLDEuOS0wLjIsMi45LTAuM0M3OS4xLDQ2MS42LDIyLDQwMS44LDIyLDMyOC43XHJcblx0XHRjMC0zMi4yLDExLTYxLjcsMjkuNS04NS4yTDY1LjgsMjI4YzIyLjctMjEuMSw1Mi40LTM0LjYsODUuMy0zNi42Yy0xLTAuMS0xLjktMC4yLTIuOS0wLjNjMy43LTAuMyw3LjUtMC41LDExLjMtMC41djBcclxuXHRcdGM3Ni4xLDAsMTM4LDYxLjksMTM4LDEzOEMyOTcuNiw0MDQuOCwyMzUuNyw0NjYuNywxNTkuNiw0NjYuN3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0NFwiXHJcbiAgICAgICAgICBkPVwiTTI3NC45LDMyOC43YzAtNzEuMy01NC4zLTEzMC4xLTEyMy44LTEzNy4zYy0zMi45LDItNjIuNywxNS41LTg1LjMsMzYuNmwtMTQuMywxNS41XHJcblx0XHRDMzMsMjY2LjksMjIsMjk2LjUsMjIsMzI4LjdjMCw3My4xLDU3LjEsMTMyLjksMTI5LjIsMTM3LjNDMjIwLjYsNDU4LjgsMjc0LjksNDAwLDI3NC45LDMyOC43eiBNMTAzLjMsMzMxLjRcclxuXHRcdGM2LjUsMCwxMS43LDMuMywxMS43LDcuM2MwLDQtNS4yLDcuMy0xMS43LDcuM2MtNi41LDAtMTEuNy0zLjMtMTEuNy03LjNDOTEuNiwzMzQuNyw5Ni44LDMzMS40LDEwMy4zLDMzMS40eiBNMjA0LjQsMzczLjNcclxuXHRcdGM0LjYsNC42LDYsMTAuNiwzLjEsMTMuNGMtMi45LDIuOS04LjksMS41LTEzLjQtMy4xcy02LTEwLjYtMy4xLTEzLjRTMTk5LjgsMzY4LjcsMjA0LjQsMzczLjN6IE0xOTEsMzA3LjJcclxuXHRcdGMtMi45LTIuOS0xLjUtOC45LDMuMS0xMy40czEwLjYtNiwxMy40LTMuMWMyLjksMi45LDEuNSw4LjktMy4xLDEzLjRDMTk5LjgsMzA4LjcsMTkzLjgsMzEwLjEsMTkxLDMwNy4yeiBNMjA0LDMzOC43XHJcblx0XHRjMC00LDUuMi03LjMsMTEuNy03LjNjNi41LDAsMTEuNywzLjMsMTEuNyw3LjNjMCw0LTUuMiw3LjMtMTEuNyw3LjNDMjA5LjIsMzQ2LDIwNCwzNDIuNywyMDQsMzM4Ljd6IE0xNzcuMywyNzIuM3YzOC4xXHJcblx0XHRjOS40LDUuOSwxNS42LDE2LjQsMTUuNiwyOC4zYzAsMTguNS0xNSwzMy41LTMzLjUsMzMuNWMtMTguNSwwLTMzLjUtMTUtMzMuNS0zMy41YzAtMTEuOSw2LjItMjIuNCwxNS42LTI4LjN2LTM4LjFcclxuXHRcdGMwLTguMyw2LjctMTUsMTUtMTVoNS43QzE3MC42LDI1Ny4zLDE3Ny4zLDI2NCwxNzcuMywyNzIuM3ogTTEyOCwzMDcuMmMtMi45LDIuOS04LjksMS41LTEzLjQtMy4xYy00LjYtNC42LTYtMTAuNi0zLjEtMTMuNFxyXG5cdFx0czguOS0xLjUsMTMuNCwzLjF2MEMxMjkuNSwyOTguNCwxMzAuOSwzMDQuNCwxMjgsMzA3LjJ6IE0xMjgsMzcwLjJMMTI4LDM3MC4yYzIuOSwyLjksMS41LDguOS0zLjEsMTMuNGMtNC42LDQuNi0xMC42LDYtMTMuNCwzLjFcclxuXHRcdGMtMi45LTIuOS0xLjUtOC45LDMuMS0xMy40QzExOS4xLDM2OC43LDEyNS4yLDM2Ny4zLDEyOCwzNzAuMnogTTE1Mi4yLDM5NC45YzAtNi41LDMuMy0xMS43LDcuMy0xMS43YzQsMCw3LjMsNS4yLDcuMywxMS43XHJcblx0XHRzLTMuMywxMS43LTcuMywxMS43QzE1NS41LDQwNi42LDE1Mi4yLDQwMS40LDE1Mi4yLDM5NC45elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3Q1XCJcclxuICAgICAgICAgIGQ9XCJNMTU5LjYsMTkwLjdMMTU5LjYsMTkwLjdjLTMuOCwwLTcuNiwwLjItMTEuMywwLjVjMSwwLjEsMS45LDAuMiwyLjksMC4zYzY5LjQsNy4xLDEyMy44LDY2LDEyMy44LDEzNy4zXHJcblx0XHRjMCw3MS4zLTU0LjMsMTMwLjEtMTIzLjgsMTM3LjNjLTEsMC4xLTEuOSwwLjItMi45LDAuM2MzLjcsMC4zLDcuNSwwLjUsMTEuMywwLjVjNzYuMSwwLDEzOC02MS45LDEzOC0xMzhcclxuXHRcdEMyOTcuNiwyNTIuNiwyMzUuNywxOTAuNywxNTkuNiwxOTAuN3pcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMTUzLjAzNjcgMjI4LjQ0ODQpXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0NlwiXHJcbiAgICAgICAgICBjeD1cIjE5OS4yXCJcclxuICAgICAgICAgIGN5PVwiMjk5XCJcclxuICAgICAgICAgIHJ4PVwiMTEuN1wiXHJcbiAgICAgICAgICByeT1cIjcuM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3Q2XCJcclxuICAgICAgICAgIGQ9XCJNMjI3LjQsMzM4LjdjMC00LTUuMi03LjMtMTEuNy03LjNjLTYuNSwwLTExLjcsMy4zLTExLjcsNy4zYzAsNCw1LjIsNy4zLDExLjcsNy4zXHJcblx0XHRDMjIyLjIsMzQ2LDIyNy40LDM0Mi43LDIyNy40LDMzOC43elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3Q2XCJcclxuICAgICAgICAgIGQ9XCJNMTk0LjEsMzgzLjZjNC42LDQuNiwxMC42LDYsMTMuNCwzLjFjMi45LTIuOSwxLjUtOC45LTMuMS0xMy40Yy00LjYtNC42LTEwLjYtNi0xMy40LTMuMVxyXG5cdFx0UzE4OS41LDM3OSwxOTQuMSwzODMuNnpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0NlwiXHJcbiAgICAgICAgICBkPVwiTTE2Ni44LDM5NC45YzAtNi41LTMuMy0xMS43LTcuMy0xMS43Yy00LDAtNy4zLDUuMi03LjMsMTEuN3MzLjMsMTEuNyw3LjMsMTEuN1xyXG5cdFx0QzE2My41LDQwNi42LDE2Ni44LDQwMS40LDE2Ni44LDM5NC45elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3Q2XCJcclxuICAgICAgICAgIGQ9XCJNMTAzLjMsMzQ2YzYuNSwwLDExLjctMy4zLDExLjctNy4zYzAtNC01LjItNy4zLTExLjctNy4zYy02LjUsMC0xMS43LDMuMy0xMS43LDcuM1xyXG5cdFx0QzkxLjYsMzQyLjcsOTYuOCwzNDYsMTAzLjMsMzQ2elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3Q2XCJcclxuICAgICAgICAgIGQ9XCJNMTExLjUsMzg2LjdjMi45LDIuOSw4LjksMS41LDEzLjQtMy4xYzQuNi00LjYsNi0xMC42LDMuMS0xMy40djBjLTIuOS0yLjktOC45LTEuNS0xMy40LDMuMVxyXG5cdFx0QzExMCwzNzcuOCwxMDguNiwzODMuOSwxMTEuNSwzODYuN3pcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0NlwiXHJcbiAgICAgICAgICBkPVwiTTExMS41LDI5MC43Yy0yLjksMi45LTEuNSw4LjksMy4xLDEzLjRjNC42LDQuNiwxMC42LDYsMTMuNCwzLjFzMS41LTguOS0zLjEtMTMuNHYwXHJcblx0XHRDMTIwLjQsMjg5LjIsMTE0LjMsMjg3LjgsMTExLjUsMjkwLjd6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Q3XCJcclxuICAgICAgICAgICAgZD1cIk0xNDEuNiwyNzIuM3YzOC4xYy05LjQsNS45LTE1LjYsMTYuNC0xNS42LDI4LjNjMCwxOC41LDE1LDMzLjUsMzMuNSwzMy41YzE4LjUsMCwzMy41LTE1LDMzLjUtMzMuNVxyXG5cdFx0XHRjMC0xMS45LTYuMi0yMi40LTE1LjYtMjguM3YtMzguMWMwLTguMy02LjctMTUtMTUtMTVoLTUuN0MxNDguMywyNTcuMywxNDEuNiwyNjQsMTQxLjYsMjcyLjN6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICA8Lz5cclxuKVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\Logo.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
  viewBox: "0 0 317.8 486.4",
  className: "jsx-1520030765",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
  className: "jsx-1520030765",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
  className: "jsx-1520030765",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M238.3,167.7v-53c0-43.1-36.4-79.4-79.4-79.4s-79.4,36.4-79.4,79.4v53h17.7v13.4c19-8,39.9-12.5,61.8-12.5\r c21.9,0,42.8,4.4,61.8,12.5v-13.4H238.3z",
  className: "jsx-1520030765" + " " + "st0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M79.4,114.8c0-43.1,36.4-79.4,79.4-79.4s79.4,36.4,79.4,79.4v53h35.3v-53C273.7,51.9,221.7,0,158.9,0\r S44.1,51.9,44.1,114.8v53h35.3V114.8z",
  className: "jsx-1520030765" + " " + "st1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M97.1,181.1v-13.4H79.4H44.1H26.5v72C43.7,213.8,68.2,193.3,97.1,181.1z",
  className: "jsx-1520030765" + " " + "st2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M220.7,167.7v13.4c28.9,12.2,53.4,32.7,70.6,58.6v-72h-17.7h-35.3H220.7z",
  className: "jsx-1520030765" + " " + "st2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M291.3,239.7c-17.2-25.8-41.7-46.4-70.6-58.6c-19-8-39.9-12.5-61.8-12.5c-21.9,0-42.8,4.4-61.8,12.5\r c-28.9,12.2-53.4,32.7-70.6,58.6C9.8,264.8,0,295,0,327.5c0,87.8,71.1,158.9,158.9,158.9s158.9-71.1,158.9-158.9\r C317.8,295,308,264.8,291.3,239.7z M159.6,466.7c-3.8,0-7.6-0.2-11.3-0.5c1-0.1,1.9-0.2,2.9-0.3C79.1,461.6,22,401.8,22,328.7\r c0-32.2,11-61.7,29.5-85.2L65.8,228c22.7-21.1,52.4-34.6,85.3-36.6c-1-0.1-1.9-0.2-2.9-0.3c3.7-0.3,7.5-0.5,11.3-0.5v0\r c76.1,0,138,61.9,138,138C297.6,404.8,235.7,466.7,159.6,466.7z",
  className: "jsx-1520030765" + " " + "st3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M274.9,328.7c0-71.3-54.3-130.1-123.8-137.3c-32.9,2-62.7,15.5-85.3,36.6l-14.3,15.5\r C33,266.9,22,296.5,22,328.7c0,73.1,57.1,132.9,129.2,137.3C220.6,458.8,274.9,400,274.9,328.7z M103.3,331.4\r c6.5,0,11.7,3.3,11.7,7.3c0,4-5.2,7.3-11.7,7.3c-6.5,0-11.7-3.3-11.7-7.3C91.6,334.7,96.8,331.4,103.3,331.4z M204.4,373.3\r c4.6,4.6,6,10.6,3.1,13.4c-2.9,2.9-8.9,1.5-13.4-3.1s-6-10.6-3.1-13.4S199.8,368.7,204.4,373.3z M191,307.2\r c-2.9-2.9-1.5-8.9,3.1-13.4s10.6-6,13.4-3.1c2.9,2.9,1.5,8.9-3.1,13.4C199.8,308.7,193.8,310.1,191,307.2z M204,338.7\r c0-4,5.2-7.3,11.7-7.3c6.5,0,11.7,3.3,11.7,7.3c0,4-5.2,7.3-11.7,7.3C209.2,346,204,342.7,204,338.7z M177.3,272.3v38.1\r c9.4,5.9,15.6,16.4,15.6,28.3c0,18.5-15,33.5-33.5,33.5c-18.5,0-33.5-15-33.5-33.5c0-11.9,6.2-22.4,15.6-28.3v-38.1\r c0-8.3,6.7-15,15-15h5.7C170.6,257.3,177.3,264,177.3,272.3z M128,307.2c-2.9,2.9-8.9,1.5-13.4-3.1c-4.6-4.6-6-10.6-3.1-13.4\r s8.9-1.5,13.4,3.1v0C129.5,298.4,130.9,304.4,128,307.2z M128,370.2L128,370.2c2.9,2.9,1.5,8.9-3.1,13.4c-4.6,4.6-10.6,6-13.4,3.1\r c-2.9-2.9-1.5-8.9,3.1-13.4C119.1,368.7,125.2,367.3,128,370.2z M152.2,394.9c0-6.5,3.3-11.7,7.3-11.7c4,0,7.3,5.2,7.3,11.7\r s-3.3,11.7-7.3,11.7C155.5,406.6,152.2,401.4,152.2,394.9z",
  className: "jsx-1520030765" + " " + "st4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M159.6,190.7L159.6,190.7c-3.8,0-7.6,0.2-11.3,0.5c1,0.1,1.9,0.2,2.9,0.3c69.4,7.1,123.8,66,123.8,137.3\r c0,71.3-54.3,130.1-123.8,137.3c-1,0.1-1.9,0.2-2.9,0.3c3.7,0.3,7.5,0.5,11.3,0.5c76.1,0,138-61.9,138-138\r C297.6,252.6,235.7,190.7,159.6,190.7z",
  className: "jsx-1520030765" + " " + "st5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -153.0367 228.4484)",
  cx: "199.2",
  cy: "299",
  rx: "11.7",
  ry: "7.3",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M227.4,338.7c0-4-5.2-7.3-11.7-7.3c-6.5,0-11.7,3.3-11.7,7.3c0,4,5.2,7.3,11.7,7.3\r C222.2,346,227.4,342.7,227.4,338.7z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M194.1,383.6c4.6,4.6,10.6,6,13.4,3.1c2.9-2.9,1.5-8.9-3.1-13.4c-4.6-4.6-10.6-6-13.4-3.1\r S189.5,379,194.1,383.6z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M166.8,394.9c0-6.5-3.3-11.7-7.3-11.7c-4,0-7.3,5.2-7.3,11.7s3.3,11.7,7.3,11.7\r C163.5,406.6,166.8,401.4,166.8,394.9z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M103.3,346c6.5,0,11.7-3.3,11.7-7.3c0-4-5.2-7.3-11.7-7.3c-6.5,0-11.7,3.3-11.7,7.3\r C91.6,342.7,96.8,346,103.3,346z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M111.5,386.7c2.9,2.9,8.9,1.5,13.4-3.1c4.6-4.6,6-10.6,3.1-13.4v0c-2.9-2.9-8.9-1.5-13.4,3.1\r C110,377.8,108.6,383.9,111.5,386.7z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M111.5,290.7c-2.9,2.9-1.5,8.9,3.1,13.4c4.6,4.6,10.6,6,13.4,3.1s1.5-8.9-3.1-13.4v0\r C120.4,289.2,114.3,287.8,111.5,290.7z",
  className: "jsx-1520030765" + " " + "st6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
  className: "jsx-1520030765",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: "M141.6,272.3v38.1c-9.4,5.9-15.6,16.4-15.6,28.3c0,18.5,15,33.5,33.5,33.5c18.5,0,33.5-15,33.5-33.5\r c0-11.9-6.2-22.4-15.6-28.3v-38.1c0-8.3-6.7-15-15-15h-5.7C148.3,257.3,141.6,264,141.6,272.3z",
  className: "jsx-1520030765" + " " + "st7",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}))))));

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
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use-scroll-position */ "react-use-scroll-position");
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-fittext */ "react-fittext");
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_fittext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_BelowFold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BelowFold */ "./components/BelowFold.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-use-clipboard */ "react-use-clipboard");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_use_clipboard__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\pages\\index.js";
















const Home = () => {
  const initialPassword = false !== undefined ? randomatic__WEBPACK_IMPORTED_MODULE_2___default()("Aa0!", 10) : null;
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPassword);
  const [snackbarIsOpen, setSnackbarIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const scrollYProgress = Object(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_9__["useScrollYPosition"])();
  const [isCopied, setCopied] = react_use_clipboard__WEBPACK_IMPORTED_MODULE_13___default()(password);
  const themes = {
    default: {
      name: "default",
      topbarcolor: "#333333",
      background: "white",
      gradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputGradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputBoxShadow: "#ffffff42",
      overlayBoxShadow: "#a3b1d842",
      snackbarBackground: "#333333"
    },
    dark: {
      name: "dark",
      topbarcolor: "#2f3437",
      background: "#2f3437",
      gradientBg: "26deg,#ffffff 0%,#afafaf 100%",
      inputGradientBg: "23deg,rgb(185,228,139),rgb(131,189,70)",
      inputBoxShadow: "#0a0a0a42",
      overlayBoxShadow: "#0a0a0a42",
      snackbarBackground: "#5eab3e"
    }
  };
  const [colorscheme, setcolorscheme] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(themes.dark);

  const generateAndCopyPassword = (pattern, length) => {
    setPassword(randomatic__WEBPACK_IMPORTED_MODULE_2___default()("Aa0!", 10));
    passwordInputRef.current.select();
    document.execCommand("copy");
    setSnackbarIsOpen(true);
  };

  const handleSnackbarClose = () => setSnackbarIsOpen(false);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HeadTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppContainer, {
    colorscheme: colorscheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app-container",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "menu-bar",
    className: "jsx-2921363383" + " " + ((scrollYProgress < 1 ? "" : "scrolled-menu-bar") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "menu-title",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.reload(),
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "password.kiwi", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "main-box",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "input-component",
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fittext__WEBPACK_IMPORTED_MODULE_10___default.a, {
    compressor: 1.5,
    maxFontSize: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: "#8ac24f"
    },
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "secure password generator")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, {
    id: "generated-password-input",
    name: "generated-password",
    "aria-label": "generated-password",
    className: "input-gradient-bg",
    onClick: () => {
      setCopied();
      setPassword(randomatic__WEBPACK_IMPORTED_MODULE_2___default()("Aa0!", 10));
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
      lineNumber: 85
    },
    __self: undefined
  }, password), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    id: "click-to-copy" // onClick={() => generateAndCopyPassword()}
    ,
    className: "jsx-2921363383",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "click to copy"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSnack, {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    colorscheme: colorscheme,
    open: snackbarIsOpen,
    autoHideDuration: 1000,
    message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "message-id",
      className: "jsx-2921363383",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: undefined
    }, "copied to clipboard!"),
    onClose: handleSnackbarClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BelowFold__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2921363383",
    __self: undefined
  }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ1bm9cXERvY3VtZW50c1xcQ29kZVxcMDIwOFxccGFzc3dvcmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SGtCLEFBR29CLFNBQ1giLCJmaWxlIjoiQzpcXFVzZXJzXFxCcnVub1xcRG9jdW1lbnRzXFxDb2RlXFwwMjA4XFxwYXNzd29yZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHJhbmRvbWl6ZSBmcm9tIFwicmFuZG9tYXRpY1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgSGVhZFRhZyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkVGFnXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCJcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiXHJcbmltcG9ydCB7IHVzZVNjcm9sbFlQb3NpdGlvbiB9IGZyb20gXCJyZWFjdC11c2Utc2Nyb2xsLXBvc2l0aW9uXCJcclxuaW1wb3J0IFJlYWN0Rml0VGV4dCBmcm9tIFwicmVhY3QtZml0dGV4dFwiXHJcbmltcG9ydCBCZWxvd0ZvbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmVsb3dGb2xkXCJcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9nb1wiXHJcblxyXG5pbXBvcnQgdXNlQ2xpcGJvYXJkIGZyb20gXCJyZWFjdC11c2UtY2xpcGJvYXJkXCJcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFBhc3N3b3JkID1cclxuICAgIHByb2Nlc3MuYnJvd3NlciAhPT0gdW5kZWZpbmVkID8gcmFuZG9taXplKFwiQWEwIVwiLCAxMCkgOiBudWxsXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShpbml0aWFsUGFzc3dvcmQpXHJcblxyXG4gIGNvbnN0IFtzbmFja2JhcklzT3Blbiwgc2V0U25hY2tiYXJJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICBjb25zdCBzY3JvbGxZUHJvZ3Jlc3MgPSB1c2VTY3JvbGxZUG9zaXRpb24oKVxyXG5cclxuICBjb25zdCBbaXNDb3BpZWQsIHNldENvcGllZF0gPSB1c2VDbGlwYm9hcmQocGFzc3dvcmQpXHJcblxyXG4gIGNvbnN0IHRoZW1lcyA9IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgbmFtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgIHRvcGJhcmNvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICBncmFkaWVudEJnOiBcIjI2ZGVnLCAjMDBkYmRlIDAlLCAjZmMwMGZmIDEwMCVcIixcclxuICAgICAgaW5wdXRHcmFkaWVudEJnOiBcIjI2ZGVnLCAjMDBkYmRlIDAlLCAjZmMwMGZmIDEwMCVcIixcclxuICAgICAgaW5wdXRCb3hTaGFkb3c6IFwiI2ZmZmZmZjQyXCIsXHJcbiAgICAgIG92ZXJsYXlCb3hTaGFkb3c6IFwiI2EzYjFkODQyXCIsXHJcbiAgICAgIHNuYWNrYmFyQmFja2dyb3VuZDogXCIjMzMzMzMzXCJcclxuICAgIH0sXHJcbiAgICBkYXJrOiB7XHJcbiAgICAgIG5hbWU6IFwiZGFya1wiLFxyXG4gICAgICB0b3BiYXJjb2xvcjogXCIjMmYzNDM3XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzJmMzQzN1wiLFxyXG4gICAgICBncmFkaWVudEJnOiBcIjI2ZGVnLCNmZmZmZmYgMCUsI2FmYWZhZiAxMDAlXCIsXHJcbiAgICAgIGlucHV0R3JhZGllbnRCZzogXCIyM2RlZyxyZ2IoMTg1LDIyOCwxMzkpLHJnYigxMzEsMTg5LDcwKVwiLFxyXG4gICAgICBpbnB1dEJveFNoYWRvdzogXCIjMGEwYTBhNDJcIixcclxuICAgICAgb3ZlcmxheUJveFNoYWRvdzogXCIjMGEwYTBhNDJcIixcclxuICAgICAgc25hY2tiYXJCYWNrZ3JvdW5kOiBcIiM1ZWFiM2VcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2NvbG9yc2NoZW1lLCBzZXRjb2xvcnNjaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZXMuZGFyaylcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVBbmRDb3B5UGFzc3dvcmQgPSAocGF0dGVybiwgbGVuZ3RoKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChyYW5kb21pemUoXCJBYTAhXCIsIDEwKSlcclxuICAgIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKVxyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpXHJcbiAgICBzZXRTbmFja2JhcklzT3Blbih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU25hY2tiYXJDbG9zZSA9ICgpID0+IHNldFNuYWNrYmFySXNPcGVuKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxIZWFkVGFnIC8+XHJcblxyXG4gICAgICA8QXBwQ29udGFpbmVyIGNvbG9yc2NoZW1lPXtjb2xvcnNjaGVtZX0+XHJcbiAgICAgICAgPGRpdiBpZD1cImFwcC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51LWJhclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2Nyb2xsWVByb2dyZXNzIDwgMSA/IFwiXCIgOiBcInNjcm9sbGVkLW1lbnUtYmFyXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cIm1lbnUtdGl0bGVcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucmVsb2FkKCl9PlxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkLmtpd2lcclxuICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1haW4tYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICA8UmVhY3RGaXRUZXh0IGNvbXByZXNzb3I9ezEuNX0gbWF4Rm9udFNpemU9ezQ1fT5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjOGFjMjRmXCIgfX0+c2VjdXJlIHBhc3N3b3JkIGdlbmVyYXRvcjwvaDE+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdEZpdFRleHQ+XHJcblxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cImdlbmVyYXRlZC1wYXNzd29yZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZXJhdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJnZW5lcmF0ZWQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JhZGllbnQtYmdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb3BpZWQoKVxyXG4gICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChyYW5kb21pemUoXCJBYTAhXCIsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgc2V0U25hY2tiYXJJc09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSwgZmlsdGVyOiBcImJsdXIoM3B4KVwiIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICBpZD1cImNsaWNrLXRvLWNvcHlcIlxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gZ2VuZXJhdGVBbmRDb3B5UGFzc3dvcmQoKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBjbGljayB0byBjb3B5XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8U3R5bGVkU25hY2tcclxuICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjb2xvcnNjaGVtZT17Y29sb3JzY2hlbWV9XHJcbiAgICAgICAgICAgIG9wZW49e3NuYWNrYmFySXNPcGVufVxyXG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXs8c3BhbiBpZD1cIm1lc3NhZ2UtaWRcIj5jb3BpZWQgdG8gY2xpcGJvYXJkITwvc3Bhbj59XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVNuYWNrYmFyQ2xvc2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCZWxvd0ZvbGQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BcHBDb250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Hb29nbGUrU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgI21lbnUtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMxYWMzZTEzODtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyM2RlZywgcmdiKDE4NSwgMjI4LCAxMzkpLCByZ2IoMTMxLCAxODksIDcwKSk7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsZWQtbWVudS1iYXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggIzMxMzEzMTM4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDIzZGVnLFxyXG4gICAgICByZ2IoMTg1LCAyMjgsIDEzOSksXHJcbiAgICAgIHJnYigxMzEsIDE4OSwgNzApXHJcbiAgICApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbWFpbi1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IC0xM3ZoO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL3NoYXBlLTIucG5nXCIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiNnZW5lcmF0ZWQtcGFzc3dvcmQtaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTB2dztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjNDQ0NDQ0NDI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiNnZW5lcmF0ZWQtcGFzc3dvcmQtaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gIH1cclxuICBidXR0b24jZ2VuZXJhdGVkLXBhc3N3b3JkLWlucHV0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaDEjbWVudS10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxdmggMHZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjNzlhYjAzOyAqL1xyXG4gIH1cclxuICBwIHtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgfVxyXG4gICNhcHAtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI5ZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDUsIDI0NSwgMjQ1KSk7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYsXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjOGFjMjRmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBoNCNjbGljay10by1jb3B5IHtcclxuICAgIGNvbG9yOiAjOGFjMjRmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJ2aCA4dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ29sZmF4XCI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjaW5wdXQtY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmc6IDV2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzNWZkYzUyLCAjNGM0YzRjMDgpOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCA1cHggNXB4ICMxODE5MTk1NzsgKi9cclxuICB9XHJcblxyXG4gIC5ncmFkaWVudC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IGNvbG9yc2NoZW1lIH0pID0+XHJcbiAgICAgIGBsaW5lYXItZ3JhZGllbnQoJHtjb2xvcnNjaGVtZS5ncmFkaWVudEJnfSlgfTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncmFkaWVudC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IGNvbG9yc2NoZW1lIH0pID0+XHJcbiAgICAgIGBsaW5lYXItZ3JhZGllbnQoJHtjb2xvcnNjaGVtZS5pbnB1dEdyYWRpZW50Qmd9KWB9O1xyXG4gIH1cclxuXHJcbiAgLmNsaXAtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2lucHV0LWNvbXBvbmVudCB7XHJcbiAgICAgIHdpZHRoOiA2N3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICNtYWluLWJveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAjZ2VuZXJhdGVkLXBhc3N3b3JkLWlucHV0IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3R5bGVkU25hY2sgPSBzdHlsZWQoU25hY2tiYXIpYFxyXG4gIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIHBhZGRpbmc6IDZweCAzNnB4O1xyXG4gIH1cclxuICAuTXVpVHlwb2dyYXBoeS1yb290IHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgY29sb3JzY2hlbWUgfSkgPT5cclxuICAgICAgYGxpbmVhci1ncmFkaWVudCgke2NvbG9yc2NoZW1lLmlucHV0R3JhZGllbnRCZ30pYH07XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\pages\\index.js */"));
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
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
    height: 10vh;
  }

  .scrolled-menu-bar {
    box-shadow: 0px 0px 7px #31313138 !important;
    background: linear-gradient(
      23deg,
      rgb(185, 228, 139),
      rgb(131, 189, 70)
    ) !important;
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
    /* background-image: url("../static/shape-2.png"); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
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
  }

  button#generated-password-input:focus {
    outline: 1px transparent solid;
  }
  button#generated-password-input:hover {
    cursor: pointer;
  }
  h1#menu-title {
    padding: 1vh 0vh;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-shadow: 0px 1px 2px #79ab03; */
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
    z-index: 2;
    padding: 5vh;
    width: 100vw;
    align-self: center;
    /* background: linear-gradient(45deg, #335fdc52, #4c4c4c08); */
    border-radius: 20px;
    /* box-shadow: 0px 5px 5px #18191957; */
  }

  .gradient-bg {
    background: ${({
  colorscheme
}) => `linear-gradient(${colorscheme.gradientBg})`};
  }

  .input-gradient-bg {
    background: ${({
  colorscheme
}) => `linear-gradient(${colorscheme.inputGradientBg})`};
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
const StyledSnack = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a)`
  div {
    background: transparent;
    flex-grow: 0;
    padding: 6px 36px;
  }
  .MuiTypography-root {
    background: ${({
  colorscheme
}) => `linear-gradient(${colorscheme.inputGradientBg})`};
    box-shadow: none;
    border-radius: 30px;
  }
  span {
    font-family: "Google Sans";
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

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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