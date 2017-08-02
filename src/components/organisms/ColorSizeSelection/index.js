/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Sizes from '../../molecules/Sizes';
import Colors from '../../molecules/Colors';

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
    console.log(type, value)
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
    return (this.props.colorSizes.colorSizesAvailability.filter((obj) => obj.color === this.state.colorSelected && obj.size === this.state.sizeSelected && obj.quantity > 0).length > 0);
  }

  sizesDisabled(color) {
    if(!color) return []
    // return [44, 46];
    return (this.props.colorSizes.colorSizesAvailability.filter((obj) => obj.color === color).reduce((sizeDisabled, value) => { sizeDisabled.push(value.size); return sizeDisabled}, []))

  }

  colorsDisabled(size) {
    if(!size) return []
    // return ['green', 'lime']
    return (this.props.colorSizes.colorSizesAvailability.filter((obj) => obj.size === size).reduce((colorDisabled, value) => { colorDisabled.push(value.color); return colorDisabled}, []))
  }

  render() {
    return <div>
      <Colors
        colors={this.props.colorSizes.colors}
        selected={this.state.colorSelected}
        onClick={this.onChildChanged}
        disabled={this.colorsDisabled(this.state.sizeSelected)}
        isValidSelection={this.isValidSelection()}
      />
      <Sizes
        classType={this.props.colorSizes.classType}
        sizes={this.props.colorSizes.sizes}
        selected={this.state.sizeSelected}
        disabled={this.sizesDisabled(this.state.colorSelected)}
        onClick={this.onChildChanged}
        isValidSelection={this.isValidSelection()}
      />
      {/* {(this.state.colorSelected != '' && this.state.sizeSelected != '') ? <span>Selezione valida</span> : <span>Seleziona qualcosa</span>} */}
    </div>
  }

}

export default ColorSizeSelection
