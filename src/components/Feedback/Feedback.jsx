const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <button name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
