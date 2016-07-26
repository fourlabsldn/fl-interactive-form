import React from 'react';
import ReactBEM from './ReactBEM';

export default class NavigationBar extends ReactBEM {

  render() {
    const completed = this.props.ui.questions.reduce(
      (sum, q) => { return q.completed ? sum + 1 : sum; },
      0
    );

    const percentageCompleted = Math.floor(completed * 100 / this.props.ui.questions.length);

    const btnClick = (e, nextPrev) => {
      // Prevent button click from dismissing the keyboard on phones.
      e.preventDefault();
      e.stopPropagation();
      this.props.appControl.focusQuestion(nextPrev);
    };

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
            onClick={e => btnClick(e, 'prev')}
          >
            Prev
          </button>

          <button
            className={this.bemSubComponent('button')}
            onClick={e => btnClick(e, 'next')}
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
