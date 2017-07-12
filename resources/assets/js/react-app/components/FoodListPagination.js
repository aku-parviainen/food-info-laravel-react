import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class FoodListPagination extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pagination
        prev
        next
        boundaryLinks
        items={this.props.pages.lastPage}
        maxButtons={5}
        activePage={this.props.pages.currentPage}
        onSelect={this.props.handlePageChange} />
    )
  }
}

export default FoodListPagination;
