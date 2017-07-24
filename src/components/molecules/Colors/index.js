/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Color from '../../atoms/Color';
import PropTypes from 'prop-types';

class Colors extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div><span>Colors: </span>
      {this.props.colors.map(color => <Color 
        key={color} 
        color={color} 
        isSelected={(this.props.selected === color)} 
        onClick={this.props.onClick}
      />)}
    </div>
  }

}

Colors.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default Colors
