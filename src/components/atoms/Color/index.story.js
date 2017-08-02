import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Color from '.';

storiesOf('Color', module)
    .add('green', () => <Color  onClick={action('clicked')} color={'green'} />)
    .add('blue', () => <Color  onClick={action('clicked')} color={'blue'} />)
    .add('blue isSelected', () => <Color onClick={action('clicked')} color={'blue'} isSelected={true} />)
    .add('blue isDisabled', () => <Color onClick={action('clicked')} color={'blue'} isDisabled={true} />)
    .add('blue isDisabled and isSelected', () => <Color onClick={action('clicked')} color={'blue'} isSelected={true} isDisabled={true} />)