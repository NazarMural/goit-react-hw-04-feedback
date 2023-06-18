import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonBox, Table, Td, Th } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  removeStatistics,
}) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Good</Th>
            <Th>Neutral</Th>
            <Th>Bad</Th>
            <Th>Total</Th>
            <Th>Positive feedback</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{good}</Td>
            <Td>{neutral}</Td>
            <Td>{bad}</Td>
            <Td>{total}</Td>
            <Td>{positivePercentage}%</Td>
          </tr>
        </tbody>
      </Table>
      <ButtonBox>
        <Button onClick={removeStatistics}>Remove Statistics</Button>
      </ButtonBox>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
