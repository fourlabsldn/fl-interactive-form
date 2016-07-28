import React from 'react';
import ReactDOM from 'react-dom';
import ReactBEM from '../../ReactBEM';
import globals from '../../utils/globals';

export default class OptionsInput extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
  }

  /**
   * @override
   */
  keyListener(e) { // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;
    const enter = 13;

    if (e.ctrlKey) { return; }
    if (e.shiftKey && e.keyCode !== tab) { return; }

    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${globals.FOCUS_CLASS}`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    const goUp = (e.keyCode === up) || (e.keyCode === tab && e.shiftKey);
    const goDown = (e.keyCode === down) || (e.keyCode === tab);

    let jumpDirection;
    let skipJump = false;

    if (e.keyCode === enter) {
      if (options[focusedIndex]) {
        options[focusedIndex].click();
        skipJump = true;
      } else {
        jumpDirection = 'next';
      }
    } else if (goUp) {
      if (options[focusedIndex - 1]) {
        this.props.appControl.focus(options[focusedIndex - 1]);
        skipJump = true;
      } else {
        jumpDirection = 'prev';
      }
    } else if (goDown) {
      if (options[focusedIndex + 1]) {
        this.props.appControl.focus(options[focusedIndex + 1]);
        skipJump = true;
      } else {
        jumpDirection = 'next';
      }
    } else {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    if (!skipJump) {
      const response = this.getResponse();
      this.saveResponseAndJumpToQuestion(response, jumpDirection);
    }
  }

  /**
   * To be overriden by subclasses
   * @method generateOptions
   * @param  {Array} optionsArray
   * @return {Array<ReactElement>}
   */
  generateOptions(options) {
    throw new Error('Should be implemented by subclass');
  }

  render() {
    const options = this.generateOptions(this.props.config.options);

    return (
      <div
        className={this.bemClass}
        onKeyDown={this.keyListener}
        onBlur={this.saveResponse}
      >
        {options}
      </ div>
    );
  }
}
