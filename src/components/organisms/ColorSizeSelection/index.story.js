import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import ColorSizeSelection from '.';

let colorSizesExample = {
    colors: ['green', 'orange', 'lime'],
    classType: 'IT' ,
    sizes: [40, 42, 44, 46, 48],
    colorSizesAvailability: [
        {
            color: 'green',
            size: 44,
            quantity: 5,
        },
        {
            color: 'green',
            size: 42,
            quantity: 1,
        },
        {
            color: 'lime',
            size: 46,
            quantity: 1,
        },
        {
            color: 'orange',
            size: 42,
            quantity: 2,
        },
        {
            color: 'orange',
            size: 46,
            quantity: 0,
        },
        {
            color: 'orange',
            size: 48,
            quantity: 4,
        }
    ]
}

storiesOf('ColorSizeSelection', module)
    .add('ColorSizeSelection', () => <ColorSizeSelection colorSizes={colorSizesExample} colorSelected={'green'} />)
    .add('ColorSizeSelection no color selected', () => <ColorSizeSelection colorSizes={colorSizesExample} />)