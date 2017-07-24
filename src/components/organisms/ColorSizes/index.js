/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import Colors from '../../molecules/Colors';

class ColorSizes extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: this.props.colorSelected,
      sizeSelected: this.props.sizeSelected
    } 
  }

  render() {
    return <div>
      <Colors 
        colors={this.props.colorSizes.colors}
        selected={this.state.colorSelected}
      />
      <Sizes 
        classType={this.props.classType}
        sizes={this.props.colorSizes.sizes}
        selected={this.state.sizeSelected}
      />
    </div>
  }

}

export default ColorSizes