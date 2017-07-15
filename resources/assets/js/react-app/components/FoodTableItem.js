import React, { Component } from 'react';

class FoodTableItem extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.value}</td>
      </tr>
    )
  }
}

export default FoodTableItem;
