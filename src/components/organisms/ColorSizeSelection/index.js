/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import ColorSizes from '../../organisms/ColorSizes';

class ColorSizeSelection extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChildChanged = this.onChildChanged.bind(this) 
    this.state = {
      colorSelected: 'lime',
      sizeSelected: ''
    }
  }

  onChildChanged(color) {
    console.log(color, " --> CIAONE")
    this.setState({ colorSelected: color });
  }

  render() {
    return <div>
      <ColorSizes 
        colorSizes={this.props.colorSizes}
        colorSelected={this.state.colorSelected}
        callbackParent={this.onChildChanged}
      />
    </div>
  }

}

export default ColorSizeSelection
