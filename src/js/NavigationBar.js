import React from 'react';
import ReactBEM from './ReactBEM';

export default class NavigationBar extends ReactBEM {
  render() {
    return (
      <div className={this.bemClass}>

        <button
          className={this.bemSubComponent('button')}
          onClick={() => this.props.appControl.focusQuestion('prev')}
        >
          Prev
        </button>

        <button
          className={this.bemSubComponent('button')}
          onClick={() => this.props.appControl.focusQuestion('next')}
        >
          Next
        </button>
      </div>
    );
  }
}

NavigationBar.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
};
