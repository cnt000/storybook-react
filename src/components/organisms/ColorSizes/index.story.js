import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import ColorSizes from '.';

let colorSizesExample = {
    colors: ['green', 'orange', 'lime'],
    classType: 'IT' ,
    sizes: [40, 42, 44, 46, 48],
    colorSizesAvailability: {
        'green': [{
            stock: 2,
            size: 42
        },
        {
            stock: 2,
            size: 44
        },
        {
            stock: 1,
            size: 46
        },
        {
            stock: 1,
            size: 48
        }],
    }
}

storiesOf('ColorSizes', module)
    .add('ColorSizes color not selected size 42', () => <ColorSizes colorSizes={colorSizesExample} sizeSelected={42} />)
    .add('ColorSizes colorSelcted lime color lime size not selected', () => <ColorSizes colorSizes={colorSizesExample} colorSelected={'lime'} />)
    .add('ColorSizes colorSelcted lime color lime size 46', () => <ColorSizes colorSizes={colorSizesExample} colorSelected={'lime'} sizeSelected={42} />)
