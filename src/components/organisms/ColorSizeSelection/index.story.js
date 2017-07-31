import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import ColorSizeSelection from '.';

let colorSizesExample = {
    colors: ['green', 'orange', 'lime'],
    classType: 'IT' ,
    sizes: [40, 42, 44, 46, 48],
    colorSizesAvailability: {
        'green': [
            {
                stock: 0,
                size: 46
            },
            {
                stock: 1,
                size: 48
            }
        ],
        'orange': [
            {
                stock: 2,
                size: 42
            }
        ],
        'lime': [
            {
                stock: 1,
                size: 44
            }
        ],
    }
}

storiesOf('ColorSizeSelection', module)
    .add('ColorSizeSelection', () => <ColorSizeSelection colorSizes={colorSizesExample} colorSelected={'green'} />)
