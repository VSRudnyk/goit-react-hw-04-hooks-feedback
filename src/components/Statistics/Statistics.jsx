const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <p>Statistics</p>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {totalFeedback}</span>
      <span>Positive Feedback: {positivePercentage}%</span>
    </>
  );
};

export default Statistics;
