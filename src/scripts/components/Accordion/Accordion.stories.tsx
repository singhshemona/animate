import React from 'react';

import { Accordion } from './Accordion';

export default {
  component: Accordion,
  title: 'Components/Large/Accordion',
};

export const Default = () => <Accordion indicator={false} />;

export const WithIndicator = () => <Accordion indicator={true} />;
