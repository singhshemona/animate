import React from 'react';

import { Menu } from './Menu';

export default {
  component: Menu,
  title: 'Components/Large/Menu',
};

export const TwoLevels = () => <Menu levels={2} />;

export const ThreeLevels = () => <Menu levels={3} />;
