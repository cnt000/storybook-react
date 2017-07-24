/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import ColorSizes from '../../organisms/ColorSizes';

class ColorSizeSelection extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <ColorSizes colorSizes={this.props.colorSizes} colorSelected={'lime'} sizeSelected={42} />
    </div>
  }

}

export default ColorSizeSelection
