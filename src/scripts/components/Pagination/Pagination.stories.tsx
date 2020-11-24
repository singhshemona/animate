import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: 'Components/Large/Pagination',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const slides = [1, 2, 3, 4, 5, 6];

export const Default = () => <Pagination numberOfItems={select('slide', slides, 4)} />;
