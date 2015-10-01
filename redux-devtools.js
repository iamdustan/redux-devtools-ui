'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPopout = require('react-popout');

var _reactPopout2 = _interopRequireDefault(_reactPopout);

var _reduxDevtoolsLibReact = require('redux-devtools/lib/react');

var DockIcon = function DockIcon(_ref) {
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 16 : _ref$width;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 16 : _ref$height;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? 'rgb(79, 90, 101)' : _ref$color;
  return _react2['default'].createElement(
    'svg',
    { width: width, height: height, viewbox: '0 0 ' + width + ' ' + height },
    _react2['default'].createElement('line', { x1: 0, y1: 0, x2: 0, y2: height, strokeWidth: width / 4, stroke: color }),
    _react2['default'].createElement('line', { x1: 0, y1: 0, x2: width, y2: 0, strokeWidth: width / 4, stroke: color }),
    _react2['default'].createElement('line', { x1: 0, y1: height, x2: width, y2: height, strokeWidth: width / 4, stroke: color }),
    _react2['default'].createElement('line', { x1: width, y1: 0, x2: width, y2: height, strokeWidth: width / 1.25, stroke: color })
  );
};

var PopoutIcon = function PopoutIcon(_ref2) {
  var _ref2$width = _ref2.width;
  var width = _ref2$width === undefined ? 16 : _ref2$width;
  var _ref2$height = _ref2.height;
  var height = _ref2$height === undefined ? 16 : _ref2$height;
  var _ref2$strokeWidth = _ref2.strokeWidth;
  var strokeWidth = _ref2$strokeWidth === undefined ? 2 : _ref2$strokeWidth;
  var _ref2$color = _ref2.color;
  var color = _ref2$color === undefined ? 'rgb(79, 90, 101)' : _ref2$color;
  return _react2['default'].createElement(
    'svg',
    { width: width, height: height, viewbox: '0 0 ' + width + ' ' + height },
    _react2['default'].createElement('line', { x1: 0, y1: strokeWidth * 3, x2: strokeWidth * 1.5, y2: strokeWidth * 3, strokeWidth: strokeWidth, stroke: color }),
    _react2['default'].createElement('line', { x1: strokeWidth / 2, y1: strokeWidth * 3, x2: strokeWidth / 2, y2: height, strokeWidth: strokeWidth, stroke: color }),
    _react2['default'].createElement('line', { x1: strokeWidth / 2, y1: height - strokeWidth / 2, x2: width - strokeWidth * 2, y2: height - strokeWidth / 2, strokeWidth: strokeWidth, stroke: color }),
    _react2['default'].createElement('line', { x1: strokeWidth * 2.5, x2: strokeWidth * 2.5, y1: strokeWidth / 2, y2: height - strokeWidth * 1.5, strokeWidth: strokeWidth, stroke: color }),
    _react2['default'].createElement('line', { x1: strokeWidth * 2.5, y1: strokeWidth, x2: width, y2: strokeWidth, strokeWidth: strokeWidth * 1.5, stroke: color }),
    _react2['default'].createElement('line', { x1: strokeWidth * 2.5, y1: height - strokeWidth * 2, x2: width * 2.5, y2: height - strokeWidth * 2, strokeWidth: strokeWidth, stroke: color }),
    _react2['default'].createElement('line', {
      x1: width - strokeWidth / 2,
      x2: width - strokeWidth / 2,
      y1: strokeWidth,
      y2: height - strokeWidth * 2, strokeWidth: strokeWidth, stroke: color })
  );
};

var basePanelStyle = {
  fontSize: 17,
  overflow: 'hidden',
  opacity: 1,
  color: 'white',
  wordWrap: 'break-word',
  boxSizing: 'border-box',
  boxShadow: '-2px 0 7px 0 rgba(0, 0, 0, 0.5)'
};

var getPopoutStyle = function getPopoutStyle() {
  return _extends({}, basePanelStyle, {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  });
};

var getDockedStyle = function getDockedStyle(_ref3) {
  var top = _ref3.top;
  var bottom = _ref3.bottom;
  var left = _ref3.left;
  var right = _ref3.right;
  return _extends({}, basePanelStyle, {
    position: 'fixed',
    zIndex: 10000,
    left: left ? 0 : undefined,
    right: right ? 0 : undefined,
    top: top ? 0 : undefined,
    bottom: bottom ? 0 : undefined,
    maxHeight: bottom && top ? '100%' : '30%',
    maxWidth: left && right ? '100%' : '30%'
  });
};

var getAppStyles = function getAppStyles(devtoolsState) {
  return devtoolsState === 'docked' ? {
    marginRight: '30%'
  } : {};
};

var buttonStyles = {
  background: 'linear-gradient(to bottom, #efefef, #e0e0e0)',
  border: 0,
  borderLeft: '1px solid #d0d0d0',
  borderTop: '1px solid #d0d0d0',
  fontSize: '0.666em',
  padding: '0.6666em'
};

var App = (function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props, context);

    // oneOf(['closed', 'docked', 'popout']),
    this.state = { devtools: 'closed' };
  }

  _createClass(App, [{
    key: 'set',
    value: function set(prop, value) {
      var _this = this;

      return function (_) {
        return _this.setState(_defineProperty({}, prop, value));
      };
    }
  }, {
    key: 'renderDevtools',
    value: function renderDevtools() {
      if (this.state.devtools === 'closed') return;
      var store = this.props.store;

      if (this.state.devtools === 'docked') {
        return _react2['default'].createElement(
          _reduxDevtoolsLibReact.DebugPanel,
          { getStyle: getDockedStyle, top: true, right: true, bottom: true },
          _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: store, monitor: _reduxDevtoolsLibReact.LogMonitor })
        );
      }

      if (this.state.devtools === 'popout') {
        var buttonStyle = {
          background: 'transparent',
          border: 0,
          borderLeft: '2px solid rgb(79, 90, 101)',
          color: '#BEBEBE',
          fontSize: '0.875em',
          padding: '0.416666em'
        };

        return(
          // note: onClosing doesn't work in all browers ahem firefox this ba
          _react2['default'].createElement(
            _reactPopout2['default'],
            { title: 'Redux Devtools' },
            _react2['default'].createElement(
              _reduxDevtoolsLibReact.DebugPanel,
              { getStyle: getPopoutStyle },
              _react2['default'].createElement(
                'div',
                { style: { background: '#2A2F3A', borderBottom: '2px solid rgb(79, 90, 101)', display: 'flex' } },
                _react2['default'].createElement(
                  'div',
                  { style: _extends({}, buttonStyle, { flexGrow: 100, font: 'inherit', fontFamily: 'sans-serif' }) },
                  this.props.title
                ),
                _react2['default'].createElement(
                  'button',
                  { style: buttonStyle, onClick: this.set('devtools', 'docked') },
                  _react2['default'].createElement(DockIcon, { width: '16', height: '16', color: '#BEBEBE' })
                ),
                _react2['default'].createElement(
                  'button',
                  { style: buttonStyle, onClick: this.set('devtools', 'closed') },
                  '×'
                )
              ),
              _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: store, monitor: _reduxDevtoolsLibReact.LogMonitor })
            )
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var store = _props.store;
      var children = _props.children;

      if (process.env.NODE_ENV === 'production') {
        return children;
      }

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { style: {
              position: 'fixed',
              bottom: 0,
              right: 0,
              zIndex: 10001
            } },
          _react2['default'].createElement(
            'button',
            { style: buttonStyles, onClick: this.set('devtools', 'closed') },
            '×'
          ),
          _react2['default'].createElement(
            'button',
            { style: buttonStyles, onClick: this.set('devtools', 'docked') },
            _react2['default'].createElement(DockIcon, { width: 10, height: 10 })
          ),
          _react2['default'].createElement(
            'button',
            { style: buttonStyles, onClick: this.set('devtools', 'popout') },
            _react2['default'].createElement(PopoutIcon, { width: 10, height: 10, strokeWidth: 1.333 })
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: getAppStyles(this.state.devtools) },
          children
        ),
        this.renderDevtools()
      );
    }
  }]);

  return App;
})(_react.Component);

exports['default'] = App;

App.propTypes = {
  title: _react.PropTypes.string,
  store: _react.PropTypes.any.isRequired
};

App.defaultProps = {
  title: 'Redux Devtools'
};
module.exports = exports['default'];
