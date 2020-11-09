import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Loading } from './Loading';

export default {
  component: Loading,
  title: 'Loading',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

// How to use select - make sure you import select from '@storybook/addon-knobs'
// const speeds = ['slow', 'medium', 'fast'];
// export const Success = () => <Loading endingMsg='Data Loaded!' outcome='success' speed={select('speed', speeds, 'slow')} />;
// export const Failure = () => <Loading endingMsg="Sorry, we weren't able to get that information" outcome='failure' speed={select('speed', speeds, 'slow')} />;

export const Success = () => <Loading endingMsg={text('Ending Message', 'Data Loaded!')} outcome="success" />;

export const Failure = () => (
  <Loading endingMsg={text('Ending Message', 'Sorry that did not work. Please try again!')} outcome="failure" />
);
