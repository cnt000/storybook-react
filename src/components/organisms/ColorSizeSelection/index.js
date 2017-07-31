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
      }, () => this.checkValidity(this.props.colorSizes.colorSizesAvailability[this.state.colorSelected]));
    } else if(type === 'size') {
      this.setState({
        sizeSelected: value
      }, () => this.checkValidity(this.props.colorSizes.colorSizesAvailability[this.state.colorSelected]));
    }
  }

  checkValidity(sizes) {
    //console.log(sizes)
  }

  render() {
    return <div>
      <ColorSizes 
        colorSizes={this.props.colorSizes}
        colorSelected={this.state.colorSelected}
        sizeSelected={this.state.sizeSelected}
        callbackParent={this.onChildChanged}
      />
      {(this.state.colorSelected != '' && this.state.sizeSelected != '') ? <span>Selezione valida</span> : <span>Seleziona qualcosa</span>}
    </div>
  }

}

export default ColorSizeSelection
