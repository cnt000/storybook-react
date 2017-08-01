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
    },
    colorSizesAvailabilityBis: [
        {
            color: 'green',
            size: 44,
            Quantity: 5,
        },
        {
            color: 'green',
            size: 42,
            Quantity: 1,
        },
        {
            color: 'lime',
            size: 46,
            Quantity: 1,
        }
    ]
}

storiesOf('ColorSizeSelection', module)
    .add('ColorSizeSelection', () => <ColorSizeSelection colorSizes={colorSizesExample} colorSelected={'green'} />)


    /*
ModelColorSize: [
{
IdColor: 15910,
IdSize: 3,
Quantity: 5,
IsFastDelivery: false
},
{
IdColor: 15910,
IdSize: 4,
Quantity: 16,
IsFastDelivery: false
},
{
IdColor: 15910,
IdSize: 5,
Quantity: 14,
IsFastDelivery: false
},
{
IdColor: 15910,
IdSize: 6,
Quantity: 3,
IsFastDelivery: false
}
],

    */