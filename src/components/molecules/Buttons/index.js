import React from 'react';
import Button from '../../atoms/button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Buttons = ({
  onClick,
  values,
  type,
  classType = '',
  selected = false,
  disabled = false,
}) => {
  if (!values) return <p>OOO</p>;

  return (
    <Div>
      <span>
        {type}: {classType !== '' ? classType : ''}
      </span>
      {values &&
        values.map(value =>
          <Button
            key={value}
            value={value}
            type={type}
            isSelected={selected === value}
            isDisabled={
              !!disabled &&
              (!disabled || disabled.filter(obj => obj === value).length > 0)
            }
            onClick={onClick}
          >
            {type === 'size' ? value : ''}
          </Button>,
        )}
    </Div>
  );
};

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  classType: PropTypes.string,
  selected: PropTypes.boolean,
  disabled: PropTypes.boolean,
};

export default Buttons;
