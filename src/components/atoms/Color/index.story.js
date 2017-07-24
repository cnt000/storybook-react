import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Color from '.';

storiesOf('Color', module)
    .add('green', () => <Color color={'green'} />)
    .add('blue', () => <Color color={'blue'} />)
    .add('blue selected', () => <Color color={'blue'} isSelected={true}/>)
