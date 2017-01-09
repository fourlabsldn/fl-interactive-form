import React from 'react';
import ReactBEM from '../react_helpers/ReactBEM';

export default class NavigationBar extends ReactBEM {

  render() {
    const completed = this.props.ui.questions.reduce(
      (sum, q) => { return q.completed ? sum + 1 : sum; },
      0
    );

    const activeQuestionIndex = this.props.ui.questions.findIndex(q => q.active);
    const inactiveStyle = { pointerEvents: 'none', opacity: .5 };
    const prevBtnStyle = activeQuestionIndex === 0 ? inactiveStyle : {};
    const nextBtnStyle = activeQuestionIndex === -1 ? inactiveStyle : {};


    const percentageCompleted = Math.floor(completed * 100 / this.props.ui.questions.length);

    const btnClick = (e, nextPrev) => {
      // Prevent button click from dismissing the keyboard on phones.
      e.preventDefault();
      e.stopPropagation();
      this.props.appControl.goToField(nextPrev);
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
            style={prevBtnStyle}
          >
            Prev
          </button>

          <button
            className={this.bemSubComponent('button')}
            onClick={e => btnClick(e, 'next')}
            style={nextBtnStyle}
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
