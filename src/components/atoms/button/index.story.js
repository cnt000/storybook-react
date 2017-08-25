import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button')
  .add('Size with isSelected', () =>
    <Button type={'size'} onClick={action('clicked')} isSelected={true}>
      {'42'}
    </Button>,
  )
  .add('Size with isDisabled', () =>
    <Button type={'size'} onClick={action('clicked')} isDisabled={true}>
      {'46'}
    </Button>,
  )
  .add('Size with not selected', () =>
    <Button type={'size'} onClick={action('clicked')}>
      {'48'}
    </Button>,
  )
  .add('Size with isDisabled and isSelected', () =>
    <Button
      type={'size'}
      onClick={action('clicked')}
      isSelected={true}
      isDisabled={true}
    >
      {'46'}
    </Button>,
  )
  .add('Color green', () =>
    <Button type={'color'} onClick={action('clicked')} value={'green'} />,
  )
  .add('Color blue', () =>
    <Button type={'color'} onClick={action('clicked')} value={'blue'} />,
  )
  .add('Color blue isSelected', () =>
    <Button
      type={'color'}
      onClick={action('clicked')}
      value={'blue'}
      isSelected={true}
    />,
  )
  .add('Color blue isDisabled', () =>
    <Button
      type={'color'}
      onClick={action('clicked')}
      value={'blue'}
      isDisabled={true}
    />,
  )
  .add('Color blue isDisabled and isSelected', () =>
    <Button
      type={'color'}
      onClick={action('clicked')}
      value={'blue'}
      isSelected={true}
      isDisabled={true}
    />,
  );
