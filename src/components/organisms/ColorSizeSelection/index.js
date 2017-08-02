/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import ColorSizes from '../../organisms/ColorSizes';

class ColorSizeSelection extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChildChanged = this.onChildChanged.bind(this) 
    this.state = {
      colorSelected: this.props.colorSelected,
      sizeSelected: ''
    }
  }

  onChildChanged(type, value) {
    if(type === 'color') {
      this.setState({
        colorSelected: value
      });
    } else if(type === 'size') {
      this.setState({
        sizeSelected: value
      });
    }
  }

  isValidSelection(availability) {
    if(this.props.colorSizes.colorSizesAvailability.filter((obj) => obj.color === this.state.colorSelected && obj.size === this.state.sizeSelected && obj.quantity > 0).length > 0) {
      return true
    }
    return false;
  }

  render() {
    return <div>
      <ColorSizes 
        colorSizes={this.props.colorSizes}
        colorSelected={this.state.colorSelected}
        sizeSelected={this.state.sizeSelected}
        isValid={this.isValidSelection()}
        callbackParent={this.onChildChanged}
      />
      {(this.state.colorSelected != '' && this.state.sizeSelected != '') ? <span>Selezione valida</span> : <span>Seleziona qualcosa</span>}
    </div>
  }

}

export default ColorSizeSelection
