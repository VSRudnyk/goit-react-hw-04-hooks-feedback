import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h2 className={s.text}>Please leave feedback</h2>
      {options.map(option => (
        <button
          className={s.btn}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  clickonLeaveFeedbackFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
