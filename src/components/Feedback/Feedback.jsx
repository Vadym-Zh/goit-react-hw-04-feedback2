// import React, { Component } from 'react';
import { useState } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedebackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackContainer, FeedbackList } from './Feedback.styled';

// export class Feedback extends Component {
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const counter = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalValue = () => {
    return good + neutral + bad;
  };

  const positiveStatistic = () => {
    return Math.round((good / totalValue()) * 100);
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackList>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            increment={counter}
          />
        </FeedbackList>
      </Section>

      <Section title="Statistics">
        {totalValue() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalValue}
            positivePercentage={positiveStatistic}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </FeedbackContainer>
  );
};
