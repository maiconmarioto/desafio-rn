import React from 'react';
import renderer from 'react-test-renderer';

import Alert from '../../src/components/Alert';

test('renders correctly', () => {
  const alert = renderer
    .create(
      <Alert
        confirmText="Tentar novamente"
        showCancel={false}
        onConfirm={() => {}}
        showAlert={true}
        title="Oh Não"
        message="Teste"
      />,
    )
    .toJSON();
  expect(alert).toMatchSnapshot();
});
