import React from 'react';
import { Paragraph } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neurtal: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total()}</Paragraph>
      <Paragraph>Positive feedback: {positivePercentage()}%</Paragraph>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
