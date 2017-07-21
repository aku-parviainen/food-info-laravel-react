import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class FoodListSearch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder={i18n.app.search_food_items}
            onKeyUp={this.props.handleSearch}
            className="food-search-input"
          />
        </FormGroup>
      </form>
    )
  }
}

export default FoodListSearch;
