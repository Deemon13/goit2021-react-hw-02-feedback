import React, { Component } from 'react';

// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

import { feedbackTypes } from 'constants/feedback-types';
// import { Component } from 'react/cjs/react.development';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    return (good * 100) / this.countTotalFeedback();
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercent = +this.countPositiveFeedbackPercentage().toFixed(2);
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <>
            {feedbackTypes.map(el => (
              <button
                key={el}
                type="button"
                onClick={() => this.handleClick(el)}
              >
                {el}
              </button>
            ))}
          </>
        </section>
        <section title="Statistics">
          <h2>Statistics</h2>
          {total > 0 ? (
            <>
              <p>good: {this.state.good}</p>
              <p>neutral: {this.state.neutral}</p>
              <p>bad: {this.state.bad}</p>
              <p>total: {total ? total : 0}</p>
              <p>
                positive feedback: {positivePercent ? positivePercent : 0} %
              </p>
            </>
          ) : (
            <p>There is no feedback</p>
          )}
        </section>
      </>
    );
  }
}
