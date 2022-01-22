import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} type="button">
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
