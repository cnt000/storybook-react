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

const Color = ({ onClick, color, isMainColor, isSelected = false }) => {
  let mainColorStyle = (isSelected) ? {border: '4px solid red'} : {}
  let mergedStyle = Object.assign({}, buttonStyles, mainColorStyle)
  return <button style={Object.assign({}, mergedStyle, {backgroundColor: color})} onClick={onClick} />
}

Color.propTypes = {
  isMainColor: PropTypes.bool,
};
Color.defaultProps = {
  onClick: () => {},
};

export default Color