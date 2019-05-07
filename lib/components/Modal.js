"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

require("../Grid.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  var showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return _react.default.createElement("div", {
    className: showHideClassName
  }, _react.default.createElement("section", {
    className: "modal-main"
  }, _react.default.createElement("img", {
    className: "imgModal",
    src: props.showImg.toString(),
    alt: "a"
  }), _react.default.createElement("button", {
    className: "threeDots"
  }, "..."), _react.default.createElement("div", {
    className: "buttonsModal"
  }, _react.default.createElement("button", {
    className: "send"
  }, "Enviar"), _react.default.createElement("button", {
    className: "save"
  }, "Guardar"))), _react.default.createElement("button", {
    className: "closeBtn",
    onClick: props.close
  }, " X "));
}

var _default = Modal;
exports.default = _default;