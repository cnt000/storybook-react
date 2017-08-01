/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import Colors from '../../molecules/Colors';

class ColorSizes extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Colors 
        colors={this.props.colorSizes.colors}
        selected={this.props.colorSelected}
        onClick={this.props.callbackParent}
      />
      <Sizes 
        classType={this.props.colorSizes.classType}
        sizes={this.props.colorSizes.sizes}
        selected={this.props.sizeSelected}
        availability={this.props.colorSizes.colorSizesAvailability[this.props.colorSelected]}
        onClick={this.props.callbackParent}
      />
    </div>
  }

}

export default ColorSizes