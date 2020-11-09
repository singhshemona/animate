import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Progress } from './Progress';

export default {
  component: Progress,
  title: 'Progress',
};

export const Success = () => <Progress endingMsg={text('Ending Message', 'Data Loaded!')} outcome="success" />;

export const Failure = () => (
  <Progress endingMsg={text('Ending Message', 'Sorry that did not work. Please try again!')} outcome="failure" />
);
