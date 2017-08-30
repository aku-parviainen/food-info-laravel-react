import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import FoodListPagination from '../components/FoodListPagination';
import FoodListSearch from '../components/FoodListSearch';
import AppContainer from '../containers/AppContainer';

class FrontContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foods: {},
      pages: {
        lastPage: null,
        nextPageUrl: null,
        prevPageUrl: null,
        currentPage: 1,
      },
      search: ""
    };
  }

  componentWillMount() {
    this.getFoods();
  }

  getFoods(page = 1) {
    axios.get('/api/foods?page=' + page + '&q=' + this.state.search).then(function (response) {
      this.setState({
        foods: response.data.data,
        pages: {
          lastPage: response.data.last_page,
          nextPageUrl: response.data.next_page_url,
          prevPageUrl: response.data.prev_page_url,
          currentPage: response.data.current_page
        }
      });
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  handlePageChange(eventKey) {
    this.getFoods(eventKey);
  }

  handleSearch(e) {
    this.setState({ search: e.target.value }, function () {
      // Return all foods if no search parameter is given or return foods based on search (if search parameter is of sufficient length)
      if (this.state.search.length == "" || this.state.search.length > 1) {
        this.getFoods();
      }
    });
  }

  render() {
    return (
      <AppContainer>
        <FoodListSearch handleSearch={this.handleSearch.bind(this)} />

        <Panel className="container-panel">
          <FoodList foods={this.state.foods} pages={this.state.pages} />
        </Panel>

        <div className="text-center">
          <FoodListPagination pages={this.state.pages} handlePageChange={this.handlePageChange.bind(this)} />
        </div>
      </AppContainer>
    )
  }
}

export default FrontContainer;


