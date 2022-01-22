import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import { feedbackTypes } from 'constants/feedback-types';

export const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackTypes} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={0}
          neutral={0}
          bad={0}
          total={0}
          positivePercentage={0}
        />
      </Section>
    </>
  );
};
