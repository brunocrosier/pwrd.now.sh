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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: AppContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\AppContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "AppContainer___StyledDiv",
  componentId: "sc-54tjst-0"
})(["display:flex;flex-direction:column;align-content:center;min-height:100vh;#main-box{display:flex;flex-direction:column;text-align:center;align-self:center;justify-content:center;justify-items:center;width:100%;background:linear-gradient( 223deg,rgb(139,228,170),rgb(99,181,16) );}button#generated-password-input{border-radius:15px;font-size:30px;text-align:center;letter-spacing:5px;border:0px solid transparent;box-shadow:0px 2px 10px #44444442;padding:40px;font-weight:700;color:#5d5d5d;-webkit-tap-highlight-color:transparent;justify-self:center;align-self:center;width:100%;overflow:hidden;white-space:nowrap;display:block;text-overflow:ellipsis;}button#generated-password-input:focus{outline:1px transparent solid;}button#generated-password-input:hover{cursor:pointer;}p{-webkit-tap-highlight-color:transparent;font-size:1.05rem;}*{font-family:\"Google Sans\",sans-serif!important;}a{color:#8ac24f;text-decoration:none;font-weight:bold;}button.header-buttons{background:linear-gradient(23deg,#1e1e1e,#393939);box-shadow:0px 2px 5px #04040463;border-radius:30px;justify-content:center;border:none;margin-top:20px;width:max-content;padding:0px 30px;align-self:center;}button.header-buttons:hover{cursor:pointer;}h4#click-to-copy{color:white;text-transform:uppercase;letter-spacing:7px;opacity:0.8;cursor:pointer;-webkit-tap-highlight-color:transparent;}.text-container{display:flex;padding:2vh 8vw;border-radius:20px;font-family:\"Colfax\";align-self:center;max-width:100%;}#input-component{display:flex;flex-direction:column;max-width:100%;padding:5vh;align-self:center;}#input-component h1{font-size:2em;}.gradient-bg{background:linear-gradient(26deg,#ffffff 0%,#afafaf 100%);}.input-gradient-bg{background:linear-gradient(23deg,white,#eaeaea);}.MuiFormControlLabel-label{color:white;text-transform:lowercase;font-weight:800;}.css-suomlp-Slider{cursor:pointer;}*:focus{outline:none;}@media (min-width:768px){#input-component{width:67vw;}#input-component h1{font-size:3em;}}@media (orientation:landscape){#generated-password-input{max-width:50vw;}}"]);

const AppContainer = ({
  children
}) => __jsx(_StyledDiv, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, children);

/***/ }),

/***/ "./components/BottomHalf/BelowFold.js":
/*!********************************************!*\
  !*** ./components/BottomHalf/BelowFold.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/BottomHalf/Footer.js");








var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\BottomHalf\\BelowFold.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var _StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("section").withConfig({
  displayName: "BelowFold___StyledSection",
  componentId: "sc-14o6yqz-0"
})(["display:flex;flex-direction:column;background:linear-gradient(180deg,white,#eaeaea);p{color:#4a4646;width:100%;}"]);

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "BelowFold___StyledDiv",
  componentId: "sc-14o6yqz-1"
})(["padding:10vh 10vw 13vh 10vw;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;"]);

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "BelowFold___StyledDiv2",
  componentId: "sc-14o6yqz-2"
})(["width:100%;display:flex;flex-direction:column;"]);

var _StyledA = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("a").withConfig({
  displayName: "BelowFold___StyledA",
  componentId: "sc-14o6yqz-3"
})(["display:flex;align-items:center;"]);

var _StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("img").withConfig({
  displayName: "BelowFold___StyledImg",
  componentId: "sc-14o6yqz-4"
})(["height:15px;padding:0px 15px;"]);

var _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("h1").withConfig({
  displayName: "BelowFold___StyledH",
  componentId: "sc-14o6yqz-5"
})(["color:#5dd26d;font-size:3rem;margin:0%;"]);

var _StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "BelowFold___StyledDiv3",
  componentId: "sc-14o6yqz-6"
})(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);

var _StyledImg2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("img").withConfig({
  displayName: "BelowFold___StyledImg2",
  componentId: "sc-14o6yqz-7"
})(["max-width:50%;"]);

const BelowFold = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_StyledSection, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(_StyledDiv, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx(_StyledDiv2, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, __jsx(_StyledA, {
  href: "https://github.com/brunocrosier/password.kiwi",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, "FULLY OPEN SOURCE"), __jsx(_StyledImg, {
  src: "/github-logo.svg",
  alt: "GitHub logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }
})), __jsx(_StyledH, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 11
  }
}, "100% secure"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }
}, "Every password on this page is created securely, randomly and on-demand by your own device."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}, "None of your data ever touches our server. No cookies. No tracking pixels. No sweat."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 11
  }
}, "In fact, this website even works while your device is offline. Go ahead and turn on Airplane Mode on, and see for yourself!")), __jsx(_StyledDiv3, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }
}, __jsx(_StyledImg2, {
  src: "/password-kiwi-logo.svg",
  alt: "Password Kiwi logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 11
  }
})))), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (BelowFold);

/***/ }),

/***/ "./components/BottomHalf/Footer.js":
/*!*****************************************!*\
  !*** ./components/BottomHalf/Footer.js ***!
  \*****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\BottomHalf\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var _StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("footer").withConfig({
  displayName: "Footer___StyledFooter",
  componentId: "sc-1ribt4x-0"
})(["display:flex;justify-content:center;align-self:center;margin-top:-60px;"]);

var _StyledA = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("a").withConfig({
  displayName: "Footer___StyledA",
  componentId: "sc-1ribt4x-1"
})(["color:#5dd26d;"]);

const Footer = () => __jsx(_StyledFooter, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "designed & built with \uD83E\uDD50 by", __jsx(_StyledA, {
  href: "https://twitter.com/bruno_crosier",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, " ", "Bruno")));

/***/ }),

/***/ "./components/Switch.js":
/*!******************************!*\
  !*** ./components/Switch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\Switch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var _StyledSwitch = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Switch___StyledSwitch",
  componentId: "p0dhef-0"
})([".MuiSwitch-colorPrimary.Mui-checked{color:white;}.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track{background:white;}"]);

const MySwitch = ({
  checked,
  onChange,
  name
}) => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
  control: __jsx(_StyledSwitch, {
    checked: checked,
    onChange: () => {
      onChange(!checked);
    },
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }),
  label: name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MySwitch);

/***/ }),

/***/ "./components/TopHalf/TopHalf.js":
/*!***************************************!*\
  !*** ./components/TopHalf/TopHalf.js ***!
  \***************************************/
/*! exports provided: TopHalf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHalf", function() { return TopHalf; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Switch */ "./components/Switch.js");
/* harmony import */ var react_input_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-slider */ "react-input-slider");
/* harmony import */ var react_input_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useTopHalf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useTopHalf */ "./components/TopHalf/useTopHalf.js");






var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\components\\TopHalf\\TopHalf.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var _StyledSnackbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"]).withConfig({
  displayName: "TopHalf___StyledSnackbar",
  componentId: "jk2zp9-0"
})(["div{flex-grow:0;padding:6px 36px;}.MuiTypography-root{background:linear-gradient(23deg,#1e1e1e,#393939);box-shadow:0px 2px 5px #04040463;border-radius:30px;justify-content:center;}span{font-weight:700;}"]);

var _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("h1").withConfig({
  displayName: "TopHalf___StyledH",
  componentId: "jk2zp9-1"
})(["color:white;text-shadow:0px 1px 4px #00800094;"]);

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "TopHalf___StyledDiv",
  componentId: "jk2zp9-2"
})(["margin:5vh 0;display:flex;justify-content:space-evenly;"]);

var _StyledSlider = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_input_slider__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "TopHalf___StyledSlider",
  componentId: "jk2zp9-3"
})(["display:flex;align-self:center;min-width:60%;"]);

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("p").withConfig({
  displayName: "TopHalf___StyledP",
  componentId: "jk2zp9-4"
})(["color:white;font-weight:800;"]);

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "TopHalf___StyledDiv2",
  componentId: "jk2zp9-5"
})(["font-size:0;margin:0;img{width:100%;}"]);

const TopHalf = () => {
  const {
    password,
    snackbarIsOpen,
    setSnackbarIsOpen,
    areSymbolsAllowed,
    setAreSymbolsAllowed,
    areNumbersAllowed,
    setAreNumbersAllowed,
    areLettersAllowed,
    setAreLettersAllowed,
    sliderValue,
    setSliderValue,
    setCopied,
    generatePassword
  } = Object(_useTopHalf__WEBPACK_IMPORTED_MODULE_6__["useTopHalf"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_StyledSnackbar, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    open: snackbarIsOpen,
    autoHideDuration: 1000,
    message: __jsx("span", {
      id: "message-id",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }
    }, "copied to clipboard!"),
    onClose: () => setSnackbarIsOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "main-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "input-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_StyledH, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "secure password generator")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, {
    id: "generated-password-input",
    name: "generated-password",
    "aria-label": "generated-password",
    className: "input-gradient-bg",
    onClick: () => {
      setCopied();
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, password), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].button, {
    className: "header-buttons",
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
    onClick: () => generatePassword(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h4", {
    id: "click-to-copy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "regenerate")), __jsx(_StyledDiv, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: areSymbolsAllowed,
    onChange: setAreSymbolsAllowed,
    name: "Symbols",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: areNumbersAllowed,
    onChange: setAreNumbersAllowed,
    name: "Numbers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx(_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: areLettersAllowed,
    onChange: setAreLettersAllowed,
    name: "Letters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })), __jsx(_StyledSlider, {
    styles: {
      active: {
        backgroundColor: "white"
      },
      thumb: {
        width: 20,
        height: 20,
        backgroundColor: "white"
      },
      track: {
        backgroundColor: "#ffffff3b"
      }
    },
    axis: "x",
    xstep: 1,
    xmin: 8,
    xmax: 30,
    x: sliderValue,
    onChange: ({
      x
    }) => setSliderValue(x),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), __jsx(_StyledP, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, sliderValue, " characters")), __jsx(_StyledDiv2, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Wave.svg",
    alt: "wave separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./components/TopHalf/useTopHalf.js":
/*!******************************************!*\
  !*** ./components/TopHalf/useTopHalf.js ***!
  \******************************************/
/*! exports provided: useTopHalf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTopHalf", function() { return useTopHalf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomatic */ "randomatic");
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomatic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-clipboard */ "react-use-clipboard");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_clipboard__WEBPACK_IMPORTED_MODULE_2__);



const useTopHalf = () => {
  const initialPassword = false ? undefined : null;
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialPassword);
  const {
    0: snackbarIsOpen,
    1: setSnackbarIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: areSymbolsAllowed,
    1: setAreSymbolsAllowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: areNumbersAllowed,
    1: setAreNumbersAllowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: areLettersAllowed,
    1: setAreLettersAllowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: sliderValue,
    1: setSliderValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(13);
  const [isCopied, setCopied] = react_use_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(password);

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
      setPassword(randomatic__WEBPACK_IMPORTED_MODULE_1___default()(randomizeValue, sliderValue));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    generatePassword();
  }, [areLettersAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    generatePassword();
  }, [areNumbersAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    generatePassword();
  }, [areSymbolsAllowed]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    generatePassword();
  }, [sliderValue]);
  return {
    password,
    setPassword,
    snackbarIsOpen,
    setSnackbarIsOpen,
    areSymbolsAllowed,
    setAreSymbolsAllowed,
    areNumbersAllowed,
    setAreNumbersAllowed,
    areLettersAllowed,
    setAreLettersAllowed,
    sliderValue,
    setSliderValue,
    setCopied,
    generatePassword
  };
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BottomHalf_BelowFold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BottomHalf/BelowFold */ "./components/BottomHalf/BelowFold.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_TopHalf_TopHalf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopHalf/TopHalf */ "./components/TopHalf/TopHalf.js");
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Code\\0208\\password\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { CssBaseline } from "@material-ui/core"

const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_components_TopHalf_TopHalf__WEBPACK_IMPORTED_MODULE_3__["TopHalf"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_components_BottomHalf_BelowFold__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map