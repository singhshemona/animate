import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Loading } from './Loading';

export default {
  component: Loading,
  title: 'Loading',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const speeds = ['slow', 'medium', 'fast'];

export const Success = () => <Loading outcome="success" speed={select('speed', speeds, 'slow')} />;

export const Failure = () => <Loading outcome="failure" speed={select('speed', speeds, 'slow')} />;
