import React from 'react';
import Buttons from '../../molecules/Buttons';
import PropTypes from 'prop-types';

class ColorSizeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.onChildChanged = this.onChildChanged.bind(this);
    this.state = {
      colorSelected: this.props.colorSelected,
      sizeSelected: '',
    };
  }

  onChildChanged(type, value, isDisabled = false) {
    if (isDisabled) {
      if (type === 'color') {
        this.setState({
          colorSelected: value,
          sizeSelected: '',
        });
      }
      if (type === 'size') {
        this.setState({
          colorSelected: '',
          sizeSelected: value,
        });
      }
    } else {
      if (type === 'color') {
        this.setState({
          colorSelected: value,
        });
      } else if (type === 'size') {
        this.setState({
          sizeSelected: value,
        });
      }
    }
  }

  isValidSelection() {
    return (
      this.props.colorSizes.colorSizesAvailability.filter(
        obj =>
          obj.color === this.state.colorSelected &&
          obj.size === this.state.sizeSelected &&
          obj.quantity > 0,
      ).length > 0
    );
  }

  sizesDisabled(color) {
    if (!color) return [];
    return this.props.colorSizes.colorSizesAvailability
      .filter(obj => obj.color === color)
      .reduce((sizeDisabled, value) => {
        sizeDisabled.push(value.size);
        return sizeDisabled;
      }, []);
  }

  colorsDisabled(size) {
    if (!size) return [];
    return this.props.colorSizes.colorSizesAvailability
      .filter(obj => obj.size === size)
      .reduce((colorDisabled, value) => {
        colorDisabled.push(value.color);
        return colorDisabled;
      }, []);
  }

  render() {
    return (
      <div>
        <Buttons
          type={'color'}
          values={this.props.colorSizes.colors}
          selected={this.state.colorSelected}
          onClick={this.onChildChanged}
          disabled={this.colorsDisabled(this.state.sizeSelected)}
          isValidSelection={this.isValidSelection()}
        />
        <Buttons
          classType={this.props.colorSizes.classType}
          type={'size'}
          values={this.props.colorSizes.sizes}
          selected={this.state.sizeSelected}
          disabled={this.sizesDisabled(this.state.colorSelected)}
          onClick={this.onChildChanged}
          isValidSelection={this.isValidSelection()}
        />
        {/* {(this.state.colorSelected != '' && this.state.sizeSelected != '') ? <span>Selezione valida</span> : <span>Seleziona qualcosa</span>} */}
      </div>
    );
  }
}

ColorSizeSelection.propTypes = {
  colorSizes: PropTypes.object.isRequired,
  colorSelected: PropTypes.string,
};

export default ColorSizeSelection;
