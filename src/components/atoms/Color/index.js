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
    this.state = {
      isSelected: this.props.isSelected
    };
  }

  callParent(c) {
    console.log(' onClick');
    this.setState({
      isSelected: (c == this.props.color)
    });
    this.props.onClick(c);
  }

  render() {
    let mainColorStyle = (this.state.isSelected) ? {border: '4px solid red'} : {}
    let mergedStyle = Object.assign({}, buttonStyles, mainColorStyle)
    return <button 
      style={Object.assign({}, mergedStyle, {backgroundColor: this.props.color})} 
      onClick={e => {
        this.callParent(this.props.color);
      }}
    />
  }
}



Color.defaultProps = {
  onClick: () => {},
};

export default Color
