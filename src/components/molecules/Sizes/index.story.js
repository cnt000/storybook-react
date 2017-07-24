import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Sizes from '.';

storiesOf('Sizes', module)
    .add('Sizes OOO', () => <Sizes />)
    .add('Sizes IT selected 44', () => <Sizes classType={'IT'} sizes={[40, 42, 44, 46, 48]} selected={44} />)
    .add('Sizes US not selected', () => <Sizes classType={'US'} sizes={[6, 7, 8, 9, 10]} />)
