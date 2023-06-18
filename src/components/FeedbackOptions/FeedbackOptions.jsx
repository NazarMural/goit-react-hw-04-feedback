import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ nameButtons, onLeaveFeedback }) => {
  return (
    <ListButton>
      {nameButtons.map(nameButton => {
        return (
          <li key={nameButton}>
            <Button
              onClick={() => {
                onLeaveFeedback(nameButton);
              }}
            >
              {nameButton.charAt(0).toUpperCase() + nameButton.slice(1)}
            </Button>
          </li>
        );
      })}
    </ListButton>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  nameButtons: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
