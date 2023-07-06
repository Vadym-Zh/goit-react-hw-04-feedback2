// import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsContainer,
  StatisticsSum,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StatisticsList>
        <StatisticsItem review="good">
          <p>Good: {good}</p>
        </StatisticsItem>
        <StatisticsItem review="neutral">
          <p>Neutral: {neutral}</p>
        </StatisticsItem>
        <StatisticsItem review="bad">
          <p>Bad: {bad}</p>
        </StatisticsItem>
      </StatisticsList>
      <StatisticsContainer>
        <StatisticsSum>Total: {total()}</StatisticsSum>
        <StatisticsSum>
          Positive feedback: {positivePercentage()}%
        </StatisticsSum>
      </StatisticsContainer>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
