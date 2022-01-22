import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = statisticsItems => {
  const { good, neutral, bad, total, positivePercentage } = statisticsItems;
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total ? total : 0}</p>
      <p>positive feedback: {positivePercentage ? positivePercentage : 0} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
