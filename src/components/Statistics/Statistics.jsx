import PropTypes from 'prop-types';
import { Title, Text } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <Title>Statistics</Title>
      {options.map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}
      <Text>Total: {total}</Text>
      <Text>Positive Feedback: {positivePercentage}%</Text>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
