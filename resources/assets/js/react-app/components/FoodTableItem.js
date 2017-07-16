import React, { Component } from 'react';

class FoodTableItem extends Component {

  render() {
    const roundedValue = this.props.value;
    
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{roundedValue}</td>
      </tr>
    )
  }
}

export default FoodTableItem;
