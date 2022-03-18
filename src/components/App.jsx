import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const targetBtn = e.currentTarget.name;

    this.setState({
      [targetBtn]: this.state[targetBtn] + 1,
    });
  };

  countTotalFeedback = () => {
    const reviews = Object.values(this.state);
    return reviews.reduce((total, review) => total + review, 0);
  };

  countPositiveFeedbackPercentage = (good, totalFeedback) => {
    const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0;
    return positiveFeedbackPercentage.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return (
      <div className="container">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
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
        )}
      </div>
    );
  }
}

export default App;
