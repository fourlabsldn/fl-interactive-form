import React from 'react';
import globals from './utils/globals';

/**
 * This class automatically calculate element classes and
 * adds it to this.bemClass property.
 * If the element is supposed to be created as a descendant of another
 * component, it should be created with <MyReactBEM cssPrefix={this.bemClass} />
 * @abstract @class ReactBEM
 */
class ReactBEM extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    if (props.cssPrefix) {
      this.bemClass = `${props.cssPrefix}-${lowerCaseFirstLetter(this.constructor.name)}`;
    } else {
      this.bemClass = `${globals.modulePrefix}_${this.constructor.name}`;
    }

    this.bemState = this.bemState.bind(this);
    this.bemSubComponent = this.bemSubComponent.bind(this);
  }

  bemState(state) {
    return `${this.bemClass}--${state}`;
  }

  bemSubComponent(...componentTree) {
    let className = `${this.bemClass}`;
    for (const componentName of componentTree) {
      className += `-${componentName}`;
    }
    return className;
  }

  bemSubComponentState(...args) {
    const state = args.pop();
    const subComponentClass = this.bemSubComponent(args);
    const subComponentState = `${subComponentClass}--${state}`;
    return subComponentState;
  }
}

function lowerCaseFirstLetter(word) {
  if (word && word.charAt(0)) {
    const wordHead = word.charAt(0).toLowerCase();
    const wordTail = word.slice(1);
    return wordHead + wordTail;
  }
  return '';
}

ReactBEM.propTypes = {
  cssPrefix: React.PropTypes.string,
};

export default ReactBEM;
