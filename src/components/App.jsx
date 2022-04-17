import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Feedback';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackType = { good, neutral, bad };

  const leaveFeedback = e => {
    const targetBtn = e.currentTarget.name;

    switch (targetBtn) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const reviews = Object.values(feedbackType);
    return reviews.reduce((total, review) => total + review, 0);
  };

  const countPositiveFeedbackPercentage = (good, totalFeedback) => {
    const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0;
    return positiveFeedbackPercentage.toFixed();
  };

  const totalFeedback = countTotalFeedback();
  const options = Object.keys(feedbackType);
  const optionsEntries = Object.entries(feedbackType);

  return (
    <div className="container">
      <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />

      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          options={optionsEntries}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            totalFeedback
          )}
        />
      )}
    </div>
  );
};

export default App;
