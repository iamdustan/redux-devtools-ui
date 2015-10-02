/** @flow */
import React, {Component, PropTypes} from 'react';
import Popout from 'react-popout';

import {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react';

const DockIcon = ({
  width = 16,
  height = 16,
  color = 'rgb(79, 90, 101)'
}) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <line x1={0} y1={0} x2={0} y2={height} strokeWidth={width / 4} stroke={color} />
    <line x1={0} y1={0} x2={width} y2={0} strokeWidth={width / 4} stroke={color} />
    <line x1={0} y1={height} x2={width} y2={height} strokeWidth={width / 4} stroke={color} />
    <line x1={width} y1={0} x2={width} y2={height} strokeWidth={width / 1.25} stroke={color} />
  </svg>
);

const PopoutIcon = ({
  width = 16,
  height = 16,
  strokeWidth = 2,
  color = 'rgb(79, 90, 101)'
}) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <line x1={0} y1={strokeWidth * 3} x2={strokeWidth * 1.5} y2={strokeWidth * 3} strokeWidth={strokeWidth} stroke={color} />
    <line x1={strokeWidth / 2} y1={strokeWidth * 3} x2={strokeWidth / 2} y2={height} strokeWidth={strokeWidth} stroke={color} />
    <line x1={strokeWidth / 2} y1={height - strokeWidth / 2} x2={width - strokeWidth * 2} y2={height - strokeWidth / 2} strokeWidth={strokeWidth} stroke={color} />

    <line x1={strokeWidth * 2.5} x2={strokeWidth * 2.5} y1={strokeWidth / 2} y2={height - strokeWidth * 1.5} strokeWidth={strokeWidth} stroke={color} />
    <line x1={strokeWidth * 2.5} y1={strokeWidth} x2={width} y2={strokeWidth} strokeWidth={strokeWidth * 1.5} stroke={color} />
    <line x1={strokeWidth * 2.5} y1={height - strokeWidth * 2} x2={width * 2.5} y2={height - strokeWidth * 2} strokeWidth={strokeWidth} stroke={color} />
    <line
      x1={width - strokeWidth / 2}
      x2={width - strokeWidth / 2}
      y1={strokeWidth}
      y2={height - strokeWidth * 2} strokeWidth={strokeWidth} stroke={color} />
  </svg>
);

const basePanelStyle = {
  fontSize: 17,
  overflow: 'hidden',
  opacity: 1,
  color: 'white',
  wordWrap: 'break-word',
  boxSizing: 'border-box',
  boxShadow: '-2px 0 7px 0 rgba(0, 0, 0, 0.5)'
};

const getPopoutStyle = () => ({
  ...basePanelStyle,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
});

const getDockedStyle = ({top, bottom, left, right}) => ({
  ...basePanelStyle,
  position: 'fixed',
  zIndex: 10000,
  left: left ? 0 : undefined,
  right: right ? 0 : undefined,
  top: top ? 0 : undefined,
  bottom: bottom ? 0 : undefined,
  maxHeight: bottom && top ? '100%' : '30%',
  maxWidth: left && right ? '100%' : '30%'
});

const getAppStyles = devtoolsState => devtoolsState === 'docked' ? {
  marginRight: '30%'
} : {};

const buttonStyles = {
  background: 'linear-gradient(to bottom, #efefef, #e0e0e0)',
  border: 0,
  borderLeft: '1px solid #d0d0d0',
  borderTop: '1px solid #d0d0d0',
  fontSize: '0.666em',
  padding: '0.6666em'
};

export default class App extends Component {
  constructor (props, context) {
    super(props, context);

    // oneOf(['closed', 'docked', 'popout']),
    this.state = {devtools: 'closed'};
  }

  set (prop:string, value:any):void {
    return _ => this.setState({[prop]: value});
  }

  renderDevtools ():?ReactElement {
    if (this.state.devtools === 'closed') return;
    const {store} = this.props;

    if (this.state.devtools === 'docked') {
      return (
        <DebugPanel getStyle={getDockedStyle} top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }

    if (this.state.devtools === 'popout') {
      let buttonStyle = {
        background: 'transparent',
        border: 0,
        borderLeft: '2px solid rgb(79, 90, 101)',
        color: '#BEBEBE',
        fontSize: '0.875em',
        padding: '0.416666em'
      };

      return (
        // note: onClosing doesn't work in all browers ahem firefox this ba
        <Popout title="Redux Devtools">
          <DebugPanel getStyle={getPopoutStyle}>
            <div style={{background: '#2A2F3A', borderBottom: '2px solid rgb(79, 90, 101)', display: 'flex'}}>
              <div style={{...buttonStyle, flexGrow: 100, font: 'inherit', fontFamily: 'sans-serif'}}>{this.props.title}</div>
              <button style={buttonStyle} onClick={this.set('devtools', 'docked')}>
                <DockIcon width="16" height="16" color="#BEBEBE" />
              </button>
              <button style={buttonStyle} onClick={this.set('devtools', 'closed')}>×</button>
            </div>
            <DevTools store={store} monitor={LogMonitor} />
          </DebugPanel>
        </Popout>
      );
    }
  }

  render ():ReactElement {
    let {store, children} = this.props;

    if (process.env.NODE_ENV === 'production') {
      return children;
    }

    return (
      <div>
        <div style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          zIndex: 10001
        }}>
          <button style={buttonStyles} onClick={this.set('devtools', 'closed')}>×</button>
          <button style={buttonStyles} onClick={this.set('devtools', 'docked')}><DockIcon width={10} height={10} /></button>
          <button style={buttonStyles} onClick={this.set('devtools', 'popout')}><PopoutIcon width={10} height={10} strokeWidth={1.333} /></button>
        </div>
        <div style={getAppStyles(this.state.devtools)}>{children}</div>
        {this.renderDevtools()}
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  store: PropTypes.any.isRequired
};

App.defaultProps = {
  title: 'Redux Devtools'
};

