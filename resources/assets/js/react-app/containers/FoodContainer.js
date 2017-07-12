import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Redirect, Link } from 'react-router-dom'

class FoodContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      food: {},
      notFound: false,
    };
  }
  
  componentWillMount() {
    this.getFood(this.props.match.params.foodId);
  }

  getFood(foodId) {
    axios.get('/api/foods/' + foodId).then(function (response) {
      this.setState({ food: response.data });
    }.bind(this))
    .catch(function (error) {
      if (error.response && error.response.status == '404') {
        this.setState({ notFound: true });
      }
    }.bind(this));
  }

  render() {
    const notFound  = this.state.notFound;

    if (notFound) {
      return <Redirect to='/404'/>;
    }

    return (
      <div>
        <Header />
        
        <Grid>
          <Row>
            <Col md={12}>
              <h1>{this.state.food.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel>
                <Col md={6}>
                  <Table className="foods-table" hover>
                    <thead>
                      <tr>
                        <td>{i18n.app.food_component}</td>
                        <td>{i18n.app.amount}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i18n.app.protein}</td>
                        <td>{this.state.food.protein}</td>
                      </tr>
                      <tr>
                        <td>{i18n.app.fat}</td>
                        <td>{this.state.food.fat}</td>
                      </tr>
                      <tr>
                        <td>{i18n.app.carbohydrate}</td>
                        <td>{this.state.food.carbs}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Panel>
              <Link to="/">{i18n.app.show_foods_list}</Link>
            </Col>
          </Row>           
        </Grid>
        
        <Footer />
       </div>
    )
  }
}

export default FoodContainer;
