/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Size from '../../atoms/Size';

class Sizes extends React.Component {
  
  constructor(props) {
    super(props);
  }

  isDisabled(size) {
    return this.props.availability.filter((obj) => size === obj.size && obj.stock > 0).length === 0
  }

  render() {
    if(!this.props.sizes) {
      return <div> Out of Stock </div>
    }

    return <div><span>Sizes: </span>
      <span>{this.props.classType}</span>
      {this.props.sizes.map(size => <Size 
        key={size} 
        size={size} 
        isSelected={(this.props.selected === size)} 
        isDisabled={this.isDisabled(size)}
        onClick={this.props.onClick}
      >{`${size}`}</Size>)}
    </div>
  }

}

export default Sizes
