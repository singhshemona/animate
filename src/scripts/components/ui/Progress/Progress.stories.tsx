import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Progress } from './Progress';

export default {
  component: Progress,
  title: 'Progress',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Success = () => <Progress endingMsg={text('Ending Message', 'Data Loaded!')} outcome="success" />;

export const Failure = () => (
  <Progress endingMsg={text('Ending Message', "Sorry, that didn't work. Please try again!")} outcome="failure" />
);
