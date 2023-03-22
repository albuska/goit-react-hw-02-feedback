import React from 'react';
import { Button } from './FeedbackOptions.styled'
import PropTypes from 'prop-types'; 


const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
    {/* <h1>Please leave feedback</h1> */}
      <Button type="button" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </>
  );
};

export default FeedbackOptions; 

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired, 
}