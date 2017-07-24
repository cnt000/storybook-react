import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Colors from '.';

storiesOf('Colors', module)
    .add('Colors green orange lime selected green', () => <Colors colors={['green', 'orange', 'lime']} selected={'green'} />)
    .add('Colors green orange lime not selected', () => <Colors colors={['green', 'orange', 'lime']} />)
