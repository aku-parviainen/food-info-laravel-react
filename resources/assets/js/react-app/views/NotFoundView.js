import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

class FoodContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <br />
                <p>{i18n.app.page_not_found}</p>
                <p><Link to="/">{i18n.app.back_to_home}</Link></p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default FoodContainer;
