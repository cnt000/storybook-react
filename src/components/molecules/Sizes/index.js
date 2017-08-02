/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Size from '../../atoms/Size';

class Sizes extends React.Component {
  
  constructor(props) {
    super(props);
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
        isDisabled={!!this.props.disabled && (!this.props.disabled || this.props.disabled.filter((obj) => obj === size).length > 0)}
        onClick={this.props.onClick}
      >{`${size}`}</Size>)}
    </div>
  }

}

export default Sizes
