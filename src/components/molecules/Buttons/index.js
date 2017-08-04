/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import Button from '../../atoms/Button';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div><span>Label: </span>
      {this.props.values && this.props.values.map(value => <Button
        key={value}
        value={value}
        type={this.props.type}
        isSelected={(this.props.selected === value)}
        isDisabled={!!this.props.disabled && (!this.props.disabled || this.props.disabled.filter((obj) => obj === value).length > 0)}
        onClick={this.props.onClick}
      >{(this.props.type === 'size') ? value : ''}</Button>)}
    </div>
  }
}

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

export default Buttons
