/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Color from '../../atoms/Color';

class Colors extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div><span>Colors: </span>
      {this.props.colors.map(color => <Color key={color} color={color} isSelected={(this.props.selected === color)} />)}
    </div>
  }

}

export default Colors
