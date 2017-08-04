/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import PropTypes from 'prop-types'
import React from 'react'

const sizeBaseStyles = {
  border: '3px solid orange',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
}

const colorBaseStyles = {
  border: '3px solid orange',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
  width: 50,
  height: 50
}

const Button = ({ onClick, children, type, value, isSelected = false, isDisabled = false  }) => {
  let selectedStyle = (isSelected) ? {border: '4px solid red'} : {}
  let disabledStyle = (isDisabled) ? {border: '3px solid grey'} : {}
  let colorStyle = (type === 'color') ? {backgroundColor: value} : {}
  let mainStyle = (type === 'color') ? colorBaseStyles : sizeBaseStyles
  let mergedStyle = Object.assign({}, mainStyle, colorStyle, selectedStyle, disabledStyle)
  return <button 
    style={mergedStyle} 
    onClick={e => {
      onClick(type, value, isDisabled);
    }}>
    {children}
  </button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
