import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';
import globals from '../utils/globals';

export default class RadioBtns extends InputField {
  getResponse() {
    return this.props.config.answer;
  }

  isValidResponse(response) {
    return this.props.config.options[response] !== undefined;
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
    const focus = (el) => setTimeout(() => el.focus(), 10);


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
        focus(options[focusedIndex - 1]);
        skipJump = true;
      } else {
        jumpDirection = 'prev';
      }
    } else if (goDown) {
      if (options[focusedIndex + 1]) {
        focus(options[focusedIndex + 1]);
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
      this.sendResponseWithAnimation(response, jumpDirection);
    }
  }

  render() {
    const handleInputChange = () => {
      if (this.props.ui.active) {
        // set inactive
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }
    };

    const options = this.props.config.options.map((option, index) => {
      const optionClasses = [this.bemSubComponent('option'), globals.FOCUS_CLASS];
      if (index === this.getResponse()) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return (
        <div
          className={optionClasses.join(' ')}
          key={`${this.props.config.key}${index}`}
          onClick={() => this.sendResponseWithAnimation(index, 'next')}
          tabIndex="0"
        >
          {option}
        </div>
      );
    });

    return (
      <div
        className={this.bemClass}
        onKeyDown={this.keyListener}
        onChange={handleInputChange}
        onBlur={this.sendResponse}
      >
        {options}
      </ div>
    );
  }
}
