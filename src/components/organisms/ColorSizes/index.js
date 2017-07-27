/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import Colors from '../../molecules/Colors';

class ColorSizes extends React.Component {
  
  constructor(props) {
    super(props);
    this.callParent = this.callParent.bind(this) 
    this.state = {
      colorSelected: this.props.colorSelected,
      sizeSelected: this.props.sizeSelected
    }
  }

  callParent(c) {
    this.setState({
      colorSelected: this.props.colorSelected
    });
    this.props.callbackParent(c)
  }

  render() {
    return <div>
      <Colors 
        colors={this.props.colorSizes.colors}
        selected={this.state.colorSelected}
        onClick={this.callParent}
      />
      <Sizes 
        classType={this.props.colorSizes.classType}
        sizes={this.props.colorSizes.sizes}
        selected={this.state.sizeSelected}
      />
    </div>
  }

}

export default ColorSizes