import React, { Component } from 'react';
import FoodListItem from './FoodListItem';
import { Table } from 'react-bootstrap';

class FoodList extends Component {

  renderFoodsList() {
    let foodsList = [];
    for (let key in this.props.foods) {
      foodsList.push(
        <FoodListItem 
          food={this.props.foods[key]} 
          key={key} />
        );
    }
    return foodsList;
  }

  render() {
    return (
      <Table className="foods-table" hover>
        <thead>
          <tr>
            <td>{i18n.app.name}</td>
            <td>{i18n.app.protein} (g)</td>
            <td>{i18n.app.fat} (g)</td>
            <td>{i18n.app.carbohydrate} (g)</td>
          </tr>
        </thead>
        <tbody>
          {this.renderFoodsList()}
        </tbody>
      </Table>
    )
  }
}

export default FoodList;