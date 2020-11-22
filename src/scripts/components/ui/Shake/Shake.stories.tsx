import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Shake } from './Shake';

export default {
  component: Shake,
  title: 'Components/Small/Shake',
};

export const Default = () => (
  <Shake
    prompt={text('Prompt', 'Enter some text here. If it remains empty, the form will be mad.')}
    confirmation={text('Confirmation Message', 'Thank you for completing the form!')}
    error={text('Error Message', 'Please enter something.')}
  />
);
