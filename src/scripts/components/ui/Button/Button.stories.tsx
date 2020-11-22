import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Small/Button',
};

export const Default = () => (
  <Button
    activeMessage={text('While pressed', 'Action is Done!')}
    deactiveMessage={text('Not yet pressed', 'Do some action')}
  />
);
