import React from 'react';
import renderer from 'react-test-renderer';

import BackgroundImage from '../../src/components/BackgroundImage';

test('renders correctly', () => {
  const alert = renderer
    .create(
      <BackgroundImage opacity={1} src="https://via.placeholder.com/350x65" />,
    )
    .toJSON();
  expect(alert).toMatchSnapshot();
});
