import React, { Component } from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false };
    mouseOver = () => this.setState({ showTooltip: true });
    mouseOut = () => this.setState({ showTooltip: false });
    render() {
      return (
        <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
