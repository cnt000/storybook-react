import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Size from '.';

storiesOf('Size', module)
    .add('with isSelected', () => <Size onClick={action('clicked')} isSelected={true}>{'42'}</Size>)
    .add('with isDisabled', () => <Size onClick={action('clicked')} isDisabled={true}>{'46'}</Size>)
    .add('with not selected', () => <Size onClick={action('clicked')}>{'48'}</Size>)
    .add('with isDisabled and isSelected', () => <Size onClick={action('clicked')} isSelected={true} isDisabled={true}>{'46'}</Size>)
