import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Size from '.';

storiesOf('Size', module)
    .add('with text selected', () => <Size onClick={action('clicked')} isSelected={true}>{'42'}</Size>)
    .add('with emoji NOT selected', () => <Size onClick={action('clicked')}>🤐</Size>)
