import React, { Component } from 'react';

class Toggle extends Component {
  state = { on: false }

  toggle = _ => this.setState(({ on }) => ({ on: !on }));
  
  render() {
    const { children } = this.props;

    return children({ 
      on: this.state.on,
      toggle: this.toggle
    }); 
  }
}

export default Toggle;