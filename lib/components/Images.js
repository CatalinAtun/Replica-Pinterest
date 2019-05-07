"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Images.css");

require("../Grid.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Images =
/*#__PURE__*/
function (_Component) {
  _inherits(Images, _Component);

  function Images(props) {
    var _this;

    _classCallCheck(this, Images);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Images).call(this, props));
    _this.state = {
      images: [],
      charge: false
    };
    return _this;
  }

  _createClass(Images, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://api.unsplash.com/search/photos?page=1&per_page=100&query=cats&client_id=7bcae6bf47cd6f664f54e9bff5508dfcabcb5cfe40c52b2ae6ebaa512471ad8f").then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          images: json.results
        });
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      var _this3 = this;

      if (this.props.componentUpdate !== this.state.charge) {
        this.setState(_objectSpread({}, this.state, {
          charge: true
        }));
        fetch("https://api.unsplash.com/search/photos?page=2&per_page=100&query=cats&client_id=7bcae6bf47cd6f664f54e9bff5508dfcabcb5cfe40c52b2ae6ebaa512471ad8f").then(function (res) {
          return res.json();
        }).then(function (json) {
          _this3.setState({
            charge: true,
            images: _this3.state.images.concat(json.results)
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var img = this.state.images.map(function (item) {
        return _react.default.createElement("img", {
          className: "cards",
          src: item.urls.small,
          alt: "",
          key: item.id,
          onClick: function onClick() {
            return _this4.props.modalOpen(item.urls.small);
          }
        });
      });
      return _react.default.createElement("div", {
        className: "cardsDiv"
      }, img);
    }
  }]);

  return Images;
}(_react.Component);

var _default = Images;
exports.default = _default;