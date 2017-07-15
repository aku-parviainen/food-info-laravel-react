import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodTableItem from '../components/FoodTableItem';
import { Redirect, Link } from 'react-router-dom';

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

    const foodTableItems = [
      {
        name: i18n.app.energy,
        value: this.state.food.energy_kj
      },
      {
        name: i18n.app.protein,
        value: this.state.food.protein
      },
      {
        name: i18n.app.fat,
        value: this.state.food.fat
      },
      {
        name: i18n.app.carbohydrate,
        value: this.state.food.carbohydrate
      },
      {
        name: i18n.app.fibre,
        value: this.state.food.fibre
      },
      {
        name: i18n.app.sugar,
        value: this.state.food.sugar
      },
      {
        name: i18n.app.alcohol,
        value: this.state.food.alcohol
      }
    ];
    
    const foodTableItemsArray = [];
    for (let key in foodTableItems) {
      if (foodTableItems[key].value) {
        foodTableItemsArray.push(<FoodTableItem 
          name={foodTableItems[key].name} 
          value={foodTableItems[key].value} 
          key={key} />);
      }
    }

    if (notFound) {
      return <Redirect to='/404'/>;
    }

    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <h1>{this.state.food.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel>
                <Table className="foods-table" hover>
                  <thead>
                    <tr>
                      <td>{i18n.app.food_component}</td>
                      <td>{i18n.app.amount} (g)</td>
                    </tr>
                  </thead>
                  <tbody>
                    {foodTableItemsArray}
                  </tbody>
                </Table>
              </Panel>
              <Link to="/" className="btn btn-default">{i18n.app.show_foods_list}</Link>
            </Col>
          </Row>           
        </Grid>
        
        <Footer />
       </div>
    )
  }
}

export default FoodContainer;
