import React from 'react';
import ReactBEM from './ReactBEM';

export default class NavigationBar extends ReactBEM {
  render() {
    const completed = this.props.ui.questions.reduce(
      (sum, q) => { return q.completed ? sum + 1 : sum; },
      0
    );

    const percentageCompleted = Math.floor(completed * 100 / this.props.ui.questions.length);

    return (
      <div className={this.bemClass}>

        <div className={this.bemSubComponent('progress')}>
          <div className={this.bemSubComponent('progress', 'percentage')}>
            {percentageCompleted}% complete
          </div>

          <div className={this.bemSubComponent('progress', 'bar')}>
            <div
              className={this.bemSubComponent('progress', 'bar', 'fill')}
              style={{ width: `${percentageCompleted}%` }}
            />
          </div>
        </div>

        <div className={this.bemSubComponent('buttons')}>
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

      </div>
    );
  }
}

NavigationBar.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
};
