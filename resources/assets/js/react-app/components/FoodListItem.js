import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodListItem extends Component {
  
  render() {
    const foodLink = "/foods/" + this.props.food.id;

    return (
      <tr>
        <td><Link to={foodLink}>{this.props.food.name}</Link></td>
        <td>{this.props.food.protein}</td>
        <td>{this.props.food.fat}</td>
        <td>{this.props.food.carbs}</td>
      </tr>
    )
  }
}

export default FoodListItem;
