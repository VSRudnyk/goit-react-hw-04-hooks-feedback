import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const targetBtn = e.currentTarget.name;

    this.setState(prevState => ({
      ...prevState,
      [targetBtn]: prevState[targetBtn] + 1,
    }));
  };

  countPositiveFeedbackPercentage = (good, totalFeedback) => {
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;
    return positiveFeedbackPercentage.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const reviews = Object.values(this.state);
    let totalFeedback = reviews.reduce((total, review) => total + review, 0);

    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage(
            good,
            totalFeedback
          )}
        />
      </div>
    );
  }
}

export default App;
