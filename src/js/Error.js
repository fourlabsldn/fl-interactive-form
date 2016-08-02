import React from 'react';
import ReactBEM from './ReactBEM';

export default class Error extends ReactBEM {

  render() {
    const classes = [this.bemClass];
    if (this.props.speechBubble) {
      classes.push(this.bemState('speechBubble'));
    }

    return <div className={classes.join(' ')}> {this.props.children} </div>;
  }
}
