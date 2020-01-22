"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return e("p",
        // btn btn-outline-white
        {
          className: "border rounded p-2 px-3 mr-4 d-none d-md-inline-block text-white"
        }, "Спасибо за лайк!!!");
      }

      return e("button", {
        className: "btn btn-outline-white",
        onClick: function onClick() {
          return _this2.setState({ liked: true });
        }
      }, "Лайкнуть, что есть силы...");
    }
  }]);

  return LikeButton;
}(React.Component);

var Perc = function (_React$PureComponent) {
  _inherits(Perc, _React$PureComponent);

  function Perc() {
    _classCallCheck(this, Perc);

    return _possibleConstructorReturn(this, (Perc.__proto__ || Object.getPrototypeOf(Perc)).apply(this, arguments));
  }

  _createClass(Perc, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          _props$score = _props.score,
          score = _props$score === undefined ? 0 : _props$score,
          _props$total = _props.total,
          total = _props$total === undefined ? Math.max(1, score) : _props$total;

      return React.createElement(
        "div",
        { className: "white-text" },
        React.createElement(
          "h6",
          null,
          label
        ),
        React.createElement(
          "span",
          null,
          Math.round(score / total * 100),
          " %"
        )
      );
    }
  }]);

  return Perc;
}(React.PureComponent);

function Copyright(props) {
  return React.createElement(
    "p",
    { className: "white-text" },
    "Copyright ",
    props.company,
    ", 2020"
  );
}

// Изготовление компоненты с использованием React.CreateElement
ReactDOM.render(e("div", null, "This text is rendered by using React.createElement"), document.getElementById("content1"));

// Изготовление компоненты с использованием React.Component
var domContainer = document.querySelector("#content2");
ReactDOM.render(e(LikeButton), domContainer);

// Отрендить компоненту  на основе React.PureComponent
ReactDOM.render(React.createElement(Perc, { label: "Home Task is completed on ", score: "0.9999" }), document.getElementById("content3"));

// Отрендить функциональную компоненту
ReactDOM.render(React.createElement(Copyright, { company: "Vebkomas" }), document.getElementById("content4"));