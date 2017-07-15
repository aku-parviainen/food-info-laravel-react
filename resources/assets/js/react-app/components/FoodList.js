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

  renderFoodsListTable() {
    if (this.renderFoodsList().length == 0) {
      return (
        <div className="text-center">{i18n.app.no_search_results}</div>
      )
    }
    else {
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

  render() {
    return (
      <div>
        {this.renderFoodsListTable()}
      </div>
    )
  }
}

export default FoodList;