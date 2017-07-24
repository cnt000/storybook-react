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
};

const Size = ({ onClick, children, isSelected = false  }) => {
  let mainStyle = (isSelected) ? {border: '4px solid red'} : {}
  let mergedStyle = Object.assign({}, buttonStyles, mainStyle)
  return <button style={mergedStyle} onClick={onClick}>
    {children}
  </button>
}

Size.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
};
Size.defaultProps = {
  onClick: () => {},
};

export default Size