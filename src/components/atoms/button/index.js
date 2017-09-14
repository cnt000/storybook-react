import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = ({
  onClick,
  children,
  type,
  value,
  isSelected = false,
  isDisabled = false,
}) => {
  let selectedStyle = isSelected ? { border: '4px solid red' } : {};
  let disabledStyle = isDisabled ? { border: '3px solid grey' } : {};
  let mergedStyle = Object.assign({}, selectedStyle, disabledStyle);
  return (
    <ButtonBase>
      <button
        style={mergedStyle}
        onClick={() => {
          onClick(type, value, isDisabled);
        }}
      >
        {children}
      </button>
    </ButtonBase>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  isSelected: PropTypes.string,
  isDisabled: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
