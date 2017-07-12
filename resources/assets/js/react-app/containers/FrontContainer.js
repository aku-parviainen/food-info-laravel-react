import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import FoodListPagination from '../components/FoodListPagination';
import FoodListSearch from '../components/FoodListSearch';

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
    axios.get('/api/foods?page=' + page).then(function (response) {
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

  getFoodsBySearch(page = 1) {
    axios.get('/api/food-search?q=' + this.state.search + '&page=' + page).then(function (response) {
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
    if (this.state.search == "") {
      this.getFoods(eventKey);
    }
    else {
      this.getFoodsBySearch(eventKey);
    }
  }

  handleSearch(e) {
    this.setState({ search: e.target.value});

    if (this.state.search.length > 1) {
      this.getFoodsBySearch();
    }
    else if (this.state.search.length == 0) {
      this.getFoods();
    }
  }

  render() {
    return (
      <div>
        <Header />
        
        <Grid>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h1>{i18n.app.app_name}</h1>
                <p>{i18n.app.app_slogan}</p>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FoodListSearch handleSearch={this.handleSearch.bind(this)}/>

              <Panel className="container-panel">
                <FoodList foods={this.state.foods} pages={this.state.pages} />
              </Panel>
              
              <div className="text-center">
                  <FoodListPagination pages={this.state.pages} handlePageChange={this.handlePageChange.bind(this)}/>
                </div>
            </Col>
          </Row>              
        </Grid>
        
        <Footer />
       </div>
    )
  }
}

export default FrontContainer;


