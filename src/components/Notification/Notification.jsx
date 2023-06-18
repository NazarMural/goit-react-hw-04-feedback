import React from 'react';
import PropTypes from 'prop-types';
import { Notifi } from './Notification.styled';

const Notification = ({ message }) => {
  return <Notifi>{message}</Notifi>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
