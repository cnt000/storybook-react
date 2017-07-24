/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import ColorSizes from '../../organisms/ColorSizes';

class ColorSizeSelection extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: 'lime',
      sizeSelected: ''
    }
  }

  render() {
    return <div>
      <ColorSizes colorSizes={this.props.colorSizes} colorSelected={this.state.colorSelected} />
    </div>
  }

}

export default ColorSizeSelection
