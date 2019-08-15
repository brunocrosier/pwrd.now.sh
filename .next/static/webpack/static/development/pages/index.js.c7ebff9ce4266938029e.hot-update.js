webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! randomatic */ "./node_modules/randomatic/index.js");
/* harmony import */ var randomatic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomatic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_HeadTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HeadTag */ "./components/HeadTag.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use-scroll-position */ "./node_modules/react-use-scroll-position/index.js");
/* harmony import */ var react_use_scroll_position__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-fittext */ "./node_modules/react-fittext/lib/ReactFitText.js");
/* harmony import */ var react_fittext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_fittext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_BelowFold__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/BelowFold */ "./components/BelowFold.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");


var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Mosh Node\\0208\\password\\pages\\index.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  div {\n    background: transparent;\n    flex-grow: 0;\n    padding: 6px 36px;\n  }\n  .MuiTypography-root {\n    background: ", ";\n  }\n  span {\n    font-family: \"Josefin Sans\";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  #menu-bar {\n    display: flex;\n    align-content: center;\n    flex-direction: column;\n    justify-content: center;\n    position: sticky;\n    top: 0px;\n    z-index: 10;\n    box-shadow: 0px 0px 1px #1ac3e138;\n    background: #00000014;\n    height: 10vh;\n  }\n\n  .scrolled-menu-bar {\n    box-shadow: 0px 0px 7px #31313138 !important;\n    background: linear-gradient(0deg, #202025, #282935) !important;\n  }\n\n  #main-box {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-self: center;\n    justify-content: center;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    margin-top: -13vh;\n    background-image: url(\"../static/shape-1.png\");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: top right;\n  }\n\n  input#generated-password-input {\n    border-radius: 50vw;\n    font-size: 30px;\n    height: 80px;\n    text-align: center;\n    letter-spacing: 5px;\n    border: 0px solid transparent;\n    box-shadow: 0px 2px 10px #44444442;\n    padding: 10px 0px 5px 0px;\n    font-weight: 700;\n    color: white;\n    -webkit-tap-highlight-color: transparent;\n    justify-self: center;\n    align-self: center;\n    max-width: 100%;\n  }\n  input#generated-password-input ::selection {\n    background: transparent;\n  }\n  input#generated-password-input:focus {\n    outline: 1px transparent solid;\n  }\n  input#generated-password-input:hover {\n    cursor: pointer;\n  }\n  h1#menu-title {\n    padding: 1vh 0vh;\n    color: white;\n    text-align: center;\n    display: flex;\n    align-items: center;\n  }\n  p {\n    /* width: max-content; */\n    -webkit-tap-highlight-color: transparent;\n    font-size: 1.05rem;\n  }\n  #app-container {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    min-height: 100vh;\n    background: linear-gradient(129deg, #292929, #272727);\n  }\n\n  body {\n    margin: 0px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input {\n    font-family: \"Josefin Sans\", sans-serif;\n  }\n\n  p {\n    font-family: \"Josefin Sans\", sans-serif;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    font-weight: bold;\n  }\n\n  h4#click-to-copy {\n    color: ", ";\n    text-transform: uppercase;\n    letter-spacing: 7px;\n    opacity: 0.8;\n  }\n\n  .text-container {\n    display: flex;\n    padding: 2vh 8vw;\n    border-radius: 20px;\n    font-family: \"Colfax\";\n    align-self: center;\n    max-width: 100%;\n  }\n\n  #input-component {\n    display: flex;\n    flex-direction: column;\n    /* position: sticky;\n    top: 10vh; */\n    z-index: 2;\n    padding: 5vh;\n    width: 100vw;\n    align-self: center;\n    background: linear-gradient(45deg, #335fdc52, #4c4c4c08);\n    border-radius: 20px;\n    box-shadow: 0px 5px 5px #18191957;\n  }\n\n  .gradient-bg {\n    background: ", ";\n  }\n\n  .input-gradient-bg {\n    background: ", ";\n  }\n\n  .clip-text {\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  @media (min-width: 768px) {\n    #input-component {\n      width: 67vw;\n    }\n\n    #main-box {\n      margin-top: -10vh;\n    }\n  }\n\n  @media (orientation: landscape) {\n    #generated-password-input {\n      max-width: 50vw;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var Home = function Home() {
  var initialPassword = randomatic__WEBPACK_IMPORTED_MODULE_3___default()("Aa0!", 10);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialPassword),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      snackbarIsOpen = _useState4[0],
      setSnackbarIsOpen = _useState4[1];

  var passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var scrollYProgress = Object(react_use_scroll_position__WEBPACK_IMPORTED_MODULE_10__["useScrollYPosition"])();
  var themes = {
    "default": {
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
      inputGradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputBoxShadow: "#0a0a0a42",
      overlayBoxShadow: "#0a0a0a42",
      snackbarBackground: "#5eab3e"
    }
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(themes.dark),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      colorScheme = _useState6[0],
      setColorScheme = _useState6[1];

  var generateAndCopyPassword = function generateAndCopyPassword(pattern, length) {
    setPassword(randomatic__WEBPACK_IMPORTED_MODULE_3___default()("Aa0!", 10));
    passwordInputRef.current.select();
    document.execCommand("copy");
    setSnackbarIsOpen(true);
  };

  var handleSnackbarClose = function handleSnackbarClose() {
    return setSnackbarIsOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_HeadTag__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AppContainer, {
    colorScheme: colorScheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "app-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    id: "menu-bar",
    animate: {
      opacity: 1,
      filter: "blur(0px)"
    },
    initial: {
      opacity: 0,
      filter: "blur(10px)"
    },
    transition: {
      ease: "easeOut",
      duration: 0.2
    },
    className: scrollYProgress < 1 ? "" : "scrolled-menu-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    id: "menu-title",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.reload();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "password.kiwi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    id: "main-box",
    animate: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)"
    },
    initial: {
      scale: 0.5,
      opacity: 0,
      filter: "blur(10px)"
    },
    transition: {
      ease: "easeOut",
      duration: 0.2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "input-component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_fittext__WEBPACK_IMPORTED_MODULE_11___default.a, {
    compressor: 1.3,
    maxFontSize: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    style: {
      color: "white",
      textShadow: "0px 1px 3px #1face1"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "secure password generator")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].input, {
    id: "generated-password-input",
    name: "generated-password",
    "aria-label": "generated-password",
    className: "input-gradient-bg",
    type: "text",
    readOnly: "readonly",
    ref: passwordInputRef,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onClick: function onClick() {
      return generateAndCopyPassword();
    },
    spellCheck: false,
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
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    id: "click-to-copy",
    style: {
      color: "white"
    },
    onClick: function onClick() {
      return generateAndCopyPassword();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "click to copy"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledSnack, {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    colorScheme: colorScheme,
    open: snackbarIsOpen,
    autoHideDuration: 1000,
    message: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      id: "message-id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "copied to clipboard!"),
    onClose: handleSnackbarClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BelowFold__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))));
};

var AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.darkgray;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.darkgray;
}, function (_ref3) {
  var colorScheme = _ref3.colorScheme;
  return "linear-gradient(".concat(colorScheme.gradientBg, ")");
}, function (_ref4) {
  var colorScheme = _ref4.colorScheme;
  return "linear-gradient(".concat(colorScheme.inputGradientBg, ")");
});
var StyledSnack = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject2(), function (_ref5) {
  var colorScheme = _ref5.colorScheme;
  return "linear-gradient(".concat(colorScheme.inputGradientBg, ")");
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c7ebff9ce4266938029e.hot-update.js.map