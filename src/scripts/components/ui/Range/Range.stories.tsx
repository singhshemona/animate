import React from 'react';

import { Range } from './Range';

export default {
  component: Range,
  title: 'Components/Small/Range',
};

export const HideValue = () => <Range showValue={false} />;

export const ShowValue = () => <Range showValue={true} />;
