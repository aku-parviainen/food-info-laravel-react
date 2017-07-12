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
            placeholder="Hae elintarvikkeista"
            onKeyUp={this.props.handleSearch}
          />
        </FormGroup>
      </form>
    )
  }
}

export default FoodListSearch;
