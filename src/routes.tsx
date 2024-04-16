import React from 'react';
import { ReduxPage, StatePage } from './@pages/index';

const routes = [
  {
    path: '',
    element: <StatePage />,
  },
  {
    path: 'redux',
    element: <ReduxPage />,
  },
];

export default routes;
