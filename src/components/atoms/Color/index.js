/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import PropTypes from 'prop-types';
import React from 'react';

const buttonStyles = {
  border: '3px solid orange',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
  width: 50,
  height: 50
};

class Color extends React.Component {
  
  constructor(props) {
    super(props);
  }

  callParent(type, color) {
    this.props.onClick('color', color);
  }

  render() {
    let mainColorStyle = (this.props.isSelected) ? {border: '4px solid red'} : {}
    let disabledStyle = (this.props.isDisabled) ? {border: '3px solid grey'} : {}
    let mergedStyle = Object.assign({}, buttonStyles, mainColorStyle, disabledStyle)
    return <button 
      style={Object.assign({}, mergedStyle, {backgroundColor: this.props.color})} 
      onClick={e => {
        this.callParent('color', this.props.color);
      }}
    />
  }
}



Color.defaultProps = {
  onClick: () => {},
};

export default Color
