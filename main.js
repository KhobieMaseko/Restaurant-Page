/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Playfair Display', serif;
}

body {
  background-color: #0a0a0a;
  color: #f0f0f0;
  min-height: 100vh;
  padding-bottom: 40px; /* Space for photo credit */
}

/* Header Styles */
header {
  padding: 2rem;
  background-color: rgba(10, 10, 10, 0.8);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

button {
  background: none;
  border: none;
  color: #f0f0f0;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
}

button:hover {
  color: #c9a227;
  transform: translateY(-2px);
}

button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c9a227;
  transition: width 0.3s ease;
}

button:hover::after {
  width: 100%;
}

/* Content Area */
#content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hero Section */
.hero-image-container {
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: zoomIn 1s ease-out;
}

@keyframes zoomIn {
  from { transform: scale(0.98); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.hero-image {
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-image:hover {
  transform: scale(1.02);
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: rgba(20, 20, 20, 0.7);
  border-radius: 8px;
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.hero:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #c9a227;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: normal;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Photo Credit */
.photo-credit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.9);
  color: #aaa;
  text-align: center;
  padding: 10px;
  font-size: 0.8rem;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.photo-credit a {
  color: #c9a227;
  text-decoration: none;
  transition: color 0.3s ease;
}

.photo-credit a:hover {
  color: #e8c252;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  #content {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .hero {
    padding: 2rem 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,oBAAoB,EAAE,2BAA2B;AACnD;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,uCAAuC;EACvC,gBAAgB;EAChB,MAAM;EACN,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,OAAO,UAAU,EAAE,2BAA2B,EAAE;EAChD,KAAK,UAAU,EAAE,wBAAwB,EAAE;AAC7C;;AAEA,iBAAiB;AACjB;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,yCAAyC;EACzC,6BAA6B;AAC/B;;AAEA;EACE,OAAO,sBAAsB,EAAE,UAAU,EAAE;EAC3C,KAAK,mBAAmB,EAAE,UAAU,EAAE;AACxC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,uCAAuC;EACvC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,iCAAiC;EACjC,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA,sBAAsB;AACtB;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["/* Global Styles */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Playfair Display', serif;\r\n}\r\n\r\nbody {\r\n  background-color: #0a0a0a;\r\n  color: #f0f0f0;\r\n  min-height: 100vh;\r\n  padding-bottom: 40px; /* Space for photo credit */\r\n}\r\n\r\n/* Header Styles */\r\nheader {\r\n  padding: 2rem;\r\n  background-color: rgba(10, 10, 10, 0.8);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  color: #f0f0f0;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  padding: 0.5rem 1rem;\r\n  transition: all 0.3s ease;\r\n  position: relative;\r\n}\r\n\r\nbutton:hover {\r\n  color: #c9a227;\r\n  transform: translateY(-2px);\r\n}\r\n\r\nbutton::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #c9a227;\r\n  transition: width 0.3s ease;\r\n}\r\n\r\nbutton:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n/* Content Area */\r\n#content {\r\n  padding: 2rem;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  animation: fadeIn 0.5s ease-out;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; transform: translateY(10px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n/* Hero Section */\r\n.hero-image-container {\r\n  margin-bottom: 2rem;\r\n  overflow: hidden;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\r\n  animation: zoomIn 1s ease-out;\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from { transform: scale(0.98); opacity: 0; }\r\n  to { transform: scale(1); opacity: 1; }\r\n}\r\n\r\n.hero-image {\r\n  width: 100%;\r\n  max-height: 60vh;\r\n  object-fit: cover;\r\n  transition: transform 0.5s ease;\r\n}\r\n\r\n.hero-image:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.hero {\r\n  text-align: center;\r\n  padding: 4rem 2rem;\r\n  background-color: rgba(20, 20, 20, 0.7);\r\n  border-radius: 8px;\r\n  margin-top: 2rem;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.hero:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nh1 {\r\n  font-size: 4rem;\r\n  margin-bottom: 1rem;\r\n  color: #c9a227;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.8rem;\r\n  margin-bottom: 2rem;\r\n  font-weight: normal;\r\n}\r\n\r\np {\r\n  font-size: 1.2rem;\r\n  line-height: 1.6;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Photo Credit */\r\n.photo-credit {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(10, 10, 10, 0.9);\r\n  color: #aaa;\r\n  text-align: center;\r\n  padding: 10px;\r\n  font-size: 0.8rem;\r\n  z-index: 1000;\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n.photo-credit a {\r\n  color: #c9a227;\r\n  text-decoration: none;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.photo-credit a:hover {\r\n  color: #e8c252;\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  nav {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n\r\n  #content {\r\n    padding: 1rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .hero {\r\n    padding: 2rem 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/pexels-hasan-kurt-154798938-10749578.jpg":
/*!*************************************************************!*\
  !*** ./src/images/pexels-hasan-kurt-154798938-10749578.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d635dcea63f09152ed2d.jpg";

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contactTitle.style.color = '#c9a227';
    contactTitle.style.marginBottom = '2rem';
    contactTitle.style.textAlign = 'center';

    const contactInfo = document.createElement('div');
    contactInfo.style.display = 'grid';
    contactInfo.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    contactInfo.style.gap = '2rem';
    contactInfo.style.marginTop = '2rem';

    const address = document.createElement('div');
    address.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Address</h2>
      <p>123 Gourmet Avenue</p>
      <p>Candor District</p>
      <p>Metropolis, MP 12345</p>
    `;

    const hours = document.createElement('div');
    hours.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Hours</h2>
      <p><strong>Dinner:</strong> Tuesday - Sunday, 6pm - 11pm</p>
      <p><strong>Brunch:</strong> Sunday, 11am - 3pm</p>
      <p>Closed Mondays</p>
    `;

    const reservations = document.createElement('div');
    reservations.innerHTML = `
      <h2 style="color: #c9a227; margin-bottom: 1rem;">Reservations</h2>
      <p><strong>Phone:</strong> (555) 123-4567</p>
      <p><strong>Email:</strong> reservations@yoli.com</p>
      <p>Reservations recommended 4-6 weeks in advance</p>
    `;

    contactInfo.appendChild(address);
    contactInfo.appendChild(hours);
    contactInfo.appendChild(reservations);

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);
    content.appendChild(contactSection);
  }


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Create hero image section
  const heroImageContainer = document.createElement('div');
  heroImageContainer.classList.add('hero-image-container');

  const heroImage = document.createElement('img');
  heroImage.src = __webpack_require__(/*! ../images/pexels-hasan-kurt-154798938-10749578.jpg */ "./src/images/pexels-hasan-kurt-154798938-10749578.jpg");
  heroImage.alt = 'Elegant restaurant interior';
  heroImage.classList.add('hero-image');
  heroImageContainer.appendChild(heroImage);

  // Create text content
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const headline = document.createElement('h1');
  headline.textContent = 'Yoli';

  const subhead = document.createElement('h2');
  subhead.textContent = 'Fine Dining Redefined';

  const description = document.createElement('p');
  description.textContent = 'Experience culinary excellence in our intimate setting where every dish tells a story. Our Michelin-starred chefs create unforgettable tasting menus using the finest seasonal ingredients.';

  const reservationBtn = document.createElement('button');
  reservationBtn.textContent = 'Make Reservation';
  reservationBtn.classList.add('reservation-btn');
  reservationBtn.addEventListener('click', () => {
    document.getElementById('contact').click();
  });

  hero.appendChild(headline);
  hero.appendChild(subhead);
  hero.appendChild(description);
  hero.appendChild(reservationBtn);

  // Add elements to DOM
  content.appendChild(heroImageContainer);
  content.appendChild(hero);

  // Add photo credit (only once)
  if (!document.querySelector('.photo-credit')) {
    addPhotoCredit();
  }
}

function addPhotoCredit() {
  const footer = document.createElement('div');
  footer.classList.add('photo-credit');
  footer.innerHTML = `
    Photo by <a href="https://www.pexels.com/photo/white-ceramic-mug-with-coffee-beside-brown-dried-leaf-10749578/" target="_blank" rel="noopener noreferrer">hasan kurt</a>
  `;
  document.body.appendChild(footer);
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuTitle.style.color = '#c9a227';
    menuTitle.style.marginBottom = '2rem';
    menuTitle.style.textAlign = 'center';

    menuSection.appendChild(menuTitle);

    const courses = [
      {
        name: 'Tasting Menu',
        items: [
          { name: 'Amuse-Bouche', description: 'Seasonal bite to awaken the palate', price: 'AED 20' },
          { name: 'Foie Gras', description: 'Seared with rhubarb compote and brioche', price: 'AED 38' },
          { name: 'Turbot', description: 'Poached with champagne sauce and caviar', price: 'AED 48' },
          { name: 'Wagyu Beef', description: 'A5 grade with truffle jus and heirloom vegetables', price: 'AED 68' },
          { name: 'Dessert', description: 'Chocolate soufflé with vanilla bean ice cream', price: 'AED 18' }
        ]
      },
      {
        name: 'À La Carte',
        items: [
          { name: 'Scallops', description: 'Seared with cauliflower purée and black truffle', price: 'AED 42' },
          { name: 'Risotto', description: 'Wild mushroom with parmesan foam', price: 'AED 38' },
          { name: 'Lobster', description: 'Thermidor style with cognac cream', price: 'AED 58' },
          { name: 'Venison', description: 'Roasted with juniper berries and red wine reduction', price: 'AED 52' }
        ]
      }
    ];

    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course');

      const courseName = document.createElement('h2');
      courseName.textContent = course.name;
      courseName.style.margin = '2rem 0 1rem';
      courseName.style.color = '#c9a227';

      courseDiv.appendChild(courseName);

      const itemsList = document.createElement('ul');
      course.items.forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.style.listStyle = 'none';
        itemLi.style.margin = '1rem 0';
        itemLi.style.paddingBottom = '0.5rem';
        itemLi.style.borderBottom = '1px solid #333';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.style.marginBottom = '0.5rem';

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemDesc.style.color = '#aaa';
        itemDesc.style.fontSize = '0.9rem';

        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.style.textAlign = 'right';
        itemPrice.style.marginTop = '0.5rem';

        itemLi.appendChild(itemName);
        itemLi.appendChild(itemDesc);
        if (item.price) itemLi.appendChild(itemPrice);
        itemsList.appendChild(itemLi);
      });

      courseDiv.appendChild(itemsList);
      menuSection.appendChild(courseDiv);
    });

    content.appendChild(menuSection);
  }


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");





function initializeWebsite() {
  // Load home page by default
  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Add event listeners for tab switching
  document.getElementById('home').addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
  document.getElementById('menu').addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
  document.getElementById('contact').addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"]);

  // Highlight active tab
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

initializeWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsWUFBWTtBQUNyQixPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxxQkFBcUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVkseUJBQXlCLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGdDQUFnQyxpQ0FBaUMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtB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QkFBbUIsRUFBQzs7Ozs7OztVQ3hCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUI7QUFDQTtBQUNNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVE7QUFDVjtBQUNBO0FBQ0EsNERBQTRELHFEQUFRO0FBQ3BFLDREQUE0RCxxREFBUTtBQUNwRSwrREFBK0Qsd0RBQVc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgU3R5bGVzICovXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7IC8qIFNwYWNlIGZvciBwaG90byBjcmVkaXQgKi9cclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxlcyAqL1xyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjgpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNjOWEyMjc7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG5idXR0b246OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YTIyNztcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBDb250ZW50IEFyZWEgKi9cclxuI2NvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmhlcm8taW1hZ2UtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGFuaW1hdGlvbjogem9vbUluIDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLmhlcm8taW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDYwdmg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmhlcm8taW1hZ2U6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC43KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaGVybzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjYzlhMjI3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIFBob3RvIENyZWRpdCAqL1xyXG4ucGhvdG8tY3JlZGl0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMTAsIDEwLCAwLjkpO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcbi5waG90by1jcmVkaXQgYSB7XHJcbiAgY29sb3I6ICNjOWEyMjc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnBob3RvLWNyZWRpdCBhOmhvdmVyIHtcclxuICBjb2xvcjogI2U4YzI1MjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8ge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUUsMkJBQTJCO0FBQ25EOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtFQUNoRCxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUM3Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTyxzQkFBc0IsRUFBRSxVQUFVLEVBQUU7RUFDM0MsS0FBSyxtQkFBbUIsRUFBRSxVQUFVLEVBQUU7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2xvYmFsIFN0eWxlcyAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4OyAvKiBTcGFjZSBmb3IgcGhvdG8gY3JlZGl0ICovXFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC44KTtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYzlhMjI3O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlhMjI3O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IEFyZWEgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cXHJcXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxyXFxufVxcclxcblxcclxcbi8qIEhlcm8gU2VjdGlvbiAqL1xcclxcbi5oZXJvLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYW5pbWF0aW9uOiB6b29tSW4gMXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyBvcGFjaXR5OiAwOyB9XFxyXFxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8taW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA0cmVtIDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm86aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgY29sb3I6ICNjOWEyMjc7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQaG90byBDcmVkaXQgKi9cXHJcXG4ucGhvdG8tY3JlZGl0IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDEwLCAxMCwgMC45KTtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvdG8tY3JlZGl0IGEge1xcclxcbiAgY29sb3I6ICNjOWEyMjc7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5waG90by1jcmVkaXQgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2U4YzI1MjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgbmF2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICBjb250YWN0VGl0bGUuc3R5bGUuY29sb3IgPSAnI2M5YTIyNyc7XHJcbiAgICBjb250YWN0VGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzJyZW0nO1xyXG4gICAgY29udGFjdFRpdGxlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0SW5mby5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgY29udGFjdEluZm8uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSknO1xyXG4gICAgY29udGFjdEluZm8uc3R5bGUuZ2FwID0gJzJyZW0nO1xyXG4gICAgY29udGFjdEluZm8uc3R5bGUubWFyZ2luVG9wID0gJzJyZW0nO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2M5YTIyNzsgbWFyZ2luLWJvdHRvbTogMXJlbTtcIj5BZGRyZXNzPC9oMj5cclxuICAgICAgPHA+MTIzIEdvdXJtZXQgQXZlbnVlPC9wPlxyXG4gICAgICA8cD5DYW5kb3IgRGlzdHJpY3Q8L3A+XHJcbiAgICAgIDxwPk1ldHJvcG9saXMsIE1QIDEyMzQ1PC9wPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2M5YTIyNzsgbWFyZ2luLWJvdHRvbTogMXJlbTtcIj5Ib3VyczwvaDI+XHJcbiAgICAgIDxwPjxzdHJvbmc+RGlubmVyOjwvc3Ryb25nPiBUdWVzZGF5IC0gU3VuZGF5LCA2cG0gLSAxMXBtPC9wPlxyXG4gICAgICA8cD48c3Ryb25nPkJydW5jaDo8L3N0cm9uZz4gU3VuZGF5LCAxMWFtIC0gM3BtPC9wPlxyXG4gICAgICA8cD5DbG9zZWQgTW9uZGF5czwvcD5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNlcnZhdGlvbnMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2M5YTIyNzsgbWFyZ2luLWJvdHRvbTogMXJlbTtcIj5SZXNlcnZhdGlvbnM8L2gyPlxyXG4gICAgICA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAoNTU1KSAxMjMtNDU2NzwvcD5cclxuICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gcmVzZXJ2YXRpb25zQHlvbGkuY29tPC9wPlxyXG4gICAgICA8cD5SZXNlcnZhdGlvbnMgcmVjb21tZW5kZWQgNC02IHdlZWtzIGluIGFkdmFuY2U8L3A+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKTtcclxuXHJcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xyXG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XHJcbiAgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBDcmVhdGUgaGVybyBpbWFnZSBzZWN0aW9uXHJcbiAgY29uc3QgaGVyb0ltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVyb0ltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1hZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGhlcm9JbWFnZS5zcmMgPSByZXF1aXJlKCcuLi9pbWFnZXMvcGV4ZWxzLWhhc2FuLWt1cnQtMTU0Nzk4OTM4LTEwNzQ5NTc4LmpwZycpO1xyXG4gIGhlcm9JbWFnZS5hbHQgPSAnRWxlZ2FudCByZXN0YXVyYW50IGludGVyaW9yJztcclxuICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWFnZScpO1xyXG4gIGhlcm9JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xyXG5cclxuICAvLyBDcmVhdGUgdGV4dCBjb250ZW50XHJcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG5cclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnWW9saSc7XHJcblxyXG4gIGNvbnN0IHN1YmhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHN1YmhlYWQudGV4dENvbnRlbnQgPSAnRmluZSBEaW5pbmcgUmVkZWZpbmVkJztcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRXhwZXJpZW5jZSBjdWxpbmFyeSBleGNlbGxlbmNlIGluIG91ciBpbnRpbWF0ZSBzZXR0aW5nIHdoZXJlIGV2ZXJ5IGRpc2ggdGVsbHMgYSBzdG9yeS4gT3VyIE1pY2hlbGluLXN0YXJyZWQgY2hlZnMgY3JlYXRlIHVuZm9yZ2V0dGFibGUgdGFzdGluZyBtZW51cyB1c2luZyB0aGUgZmluZXN0IHNlYXNvbmFsIGluZ3JlZGllbnRzLic7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVzZXJ2YXRpb25CdG4udGV4dENvbnRlbnQgPSAnTWFrZSBSZXNlcnZhdGlvbic7XHJcbiAgcmVzZXJ2YXRpb25CdG4uY2xhc3NMaXN0LmFkZCgncmVzZXJ2YXRpb24tYnRuJyk7XHJcbiAgcmVzZXJ2YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmNsaWNrKCk7XHJcbiAgfSk7XHJcblxyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoc3ViaGVhZCk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkJ0bik7XHJcblxyXG4gIC8vIEFkZCBlbGVtZW50cyB0byBET01cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlcm9JbWFnZUNvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcclxuXHJcbiAgLy8gQWRkIHBob3RvIGNyZWRpdCAob25seSBvbmNlKVxyXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWNyZWRpdCcpKSB7XHJcbiAgICBhZGRQaG90b0NyZWRpdCgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGhvdG9DcmVkaXQoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Bob3RvLWNyZWRpdCcpO1xyXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICBQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by93aGl0ZS1jZXJhbWljLW11Zy13aXRoLWNvZmZlZS1iZXNpZGUtYnJvd24tZHJpZWQtbGVhZi0xMDc0OTU3OC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+aGFzYW4ga3VydDwvYT5cclxuICBgO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUuY29sb3IgPSAnI2M5YTIyNyc7XHJcbiAgICBtZW51VGl0bGUuc3R5bGUubWFyZ2luQm90dG9tID0gJzJyZW0nO1xyXG4gICAgbWVudVRpdGxlLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdUYXN0aW5nIE1lbnUnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6ICdBbXVzZS1Cb3VjaGUnLCBkZXNjcmlwdGlvbjogJ1NlYXNvbmFsIGJpdGUgdG8gYXdha2VuIHRoZSBwYWxhdGUnLCBwcmljZTogJ0FFRCAyMCcgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ0ZvaWUgR3JhcycsIGRlc2NyaXB0aW9uOiAnU2VhcmVkIHdpdGggcmh1YmFyYiBjb21wb3RlIGFuZCBicmlvY2hlJywgcHJpY2U6ICdBRUQgMzgnIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdUdXJib3QnLCBkZXNjcmlwdGlvbjogJ1BvYWNoZWQgd2l0aCBjaGFtcGFnbmUgc2F1Y2UgYW5kIGNhdmlhcicsIHByaWNlOiAnQUVEIDQ4JyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnV2FneXUgQmVlZicsIGRlc2NyaXB0aW9uOiAnQTUgZ3JhZGUgd2l0aCB0cnVmZmxlIGp1cyBhbmQgaGVpcmxvb20gdmVnZXRhYmxlcycsIHByaWNlOiAnQUVEIDY4JyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnRGVzc2VydCcsIGRlc2NyaXB0aW9uOiAnQ2hvY29sYXRlIHNvdWZmbMOpIHdpdGggdmFuaWxsYSBiZWFuIGljZSBjcmVhbScsIHByaWNlOiAnQUVEIDE4JyB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ8OAIExhIENhcnRlJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiAnU2NhbGxvcHMnLCBkZXNjcmlwdGlvbjogJ1NlYXJlZCB3aXRoIGNhdWxpZmxvd2VyIHB1csOpZSBhbmQgYmxhY2sgdHJ1ZmZsZScsIHByaWNlOiAnQUVEIDQyJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnUmlzb3R0bycsIGRlc2NyaXB0aW9uOiAnV2lsZCBtdXNocm9vbSB3aXRoIHBhcm1lc2FuIGZvYW0nLCBwcmljZTogJ0FFRCAzOCcgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ0xvYnN0ZXInLCBkZXNjcmlwdGlvbjogJ1RoZXJtaWRvciBzdHlsZSB3aXRoIGNvZ25hYyBjcmVhbScsIHByaWNlOiAnQUVEIDU4JyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnVmVuaXNvbicsIGRlc2NyaXB0aW9uOiAnUm9hc3RlZCB3aXRoIGp1bmlwZXIgYmVycmllcyBhbmQgcmVkIHdpbmUgcmVkdWN0aW9uJywgcHJpY2U6ICdBRUQgNTInIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY291cnNlcy5mb3JFYWNoKGNvdXJzZSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvdXJzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb3Vyc2VEaXYuY2xhc3NMaXN0LmFkZCgnY291cnNlJyk7XHJcblxyXG4gICAgICBjb25zdCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgY291cnNlTmFtZS50ZXh0Q29udGVudCA9IGNvdXJzZS5uYW1lO1xyXG4gICAgICBjb3Vyc2VOYW1lLnN0eWxlLm1hcmdpbiA9ICcycmVtIDAgMXJlbSc7XHJcbiAgICAgIGNvdXJzZU5hbWUuc3R5bGUuY29sb3IgPSAnI2M5YTIyNyc7XHJcblxyXG4gICAgICBjb3Vyc2VEaXYuYXBwZW5kQ2hpbGQoY291cnNlTmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBpdGVtc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICBjb3Vyc2UuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGl0ZW1MaS5zdHlsZS5saXN0U3R5bGUgPSAnbm9uZSc7XHJcbiAgICAgICAgaXRlbUxpLnN0eWxlLm1hcmdpbiA9ICcxcmVtIDAnO1xyXG4gICAgICAgIGl0ZW1MaS5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzAuNXJlbSc7XHJcbiAgICAgICAgaXRlbUxpLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgIzMzMyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICBpdGVtTmFtZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMC41cmVtJztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGl0ZW1EZXNjLnN0eWxlLmNvbG9yID0gJyNhYWEnO1xyXG4gICAgICAgIGl0ZW1EZXNjLnN0eWxlLmZvbnRTaXplID0gJzAuOXJlbSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIGl0ZW1QcmljZS5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xyXG4gICAgICAgIGl0ZW1QcmljZS5zdHlsZS5tYXJnaW5Ub3AgPSAnMC41cmVtJztcclxuXHJcbiAgICAgICAgaXRlbUxpLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgICAgICBpdGVtTGkuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgICAgIGlmIChpdGVtLnByaWNlKSBpdGVtTGkuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbUxpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb3Vyc2VEaXYuYXBwZW5kQ2hpbGQoaXRlbXNMaXN0KTtcclxuICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY291cnNlRGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG4gIH1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL21vZHVsZXMvY29udGFjdCc7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcclxuICAvLyBMb2FkIGhvbWUgcGFnZSBieSBkZWZhdWx0XHJcbiAgbG9hZEhvbWUoKTtcclxuXHJcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdGFiIHN3aXRjaGluZ1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xyXG5cclxuICAvLyBIaWdobGlnaHQgYWN0aXZlIHRhYlxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJyk7XHJcbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==