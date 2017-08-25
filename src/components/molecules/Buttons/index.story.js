import React from 'react';
import { storiesOf } from '@storybook/react';
import Buttons from '.';

storiesOf('Buttons')
  .add('Buttons Colors green, orange, lime, selected green', () =>
    <Buttons
      type={'color'}
      values={['green', 'orange', 'lime']}
      selected={'green'}
    />,
  )
  .add('Buttons Colors green, orange, lime, not selected', () =>
    <Buttons type={'color'} values={['green', 'orange', 'lime']} />,
  )
  .add(
    'Buttons Colors green, orange, lime, selected green disabled lime and orange',
    () =>
      <Buttons
        type={'color'}
        values={['green', 'orange', 'lime', 'brown']}
        selected={'green'}
        disabled={['lime', 'orange']}
      />,
  )
  .add('Buttons Colors green, orange, lime, not selected disabled brown', () =>
    <Buttons
      type={'color'}
      values={['green', 'orange', 'lime', 'brown']}
      disabled={['brown']}
    />,
  )
  .add('Sizes OOO', () => <Buttons type={'size'} />)
  .add('Sizes IT selected 44 disabled 46, 48', () =>
    <Buttons
      type={'size'}
      classType={'IT'}
      values={[40, 42, 44, 46, 48]}
      selected={44}
      disabled={[46, 48]}
    />,
  )
  .add('Sizes US not selected', () =>
    <Buttons type={'size'} classType={'US'} values={[6, 7, 8, 9, 10]} />,
  );
