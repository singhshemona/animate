import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Accordion />;
