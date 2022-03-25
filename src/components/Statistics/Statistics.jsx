import PropTypes from 'prop-types';
import s from './Statisitcs.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      {options.map(([key, value]) => (
        <p key={key} className={s.text}>
          {key}: {value}
        </p>
      ))}
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>Positive Feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
