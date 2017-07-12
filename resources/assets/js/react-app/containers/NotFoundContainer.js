import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

class FoodContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <p>{i18n.app.page_not_found}</p>
            </Col>
          </Row>
        </Grid>

        <Footer />
      </div>
    )
  }
}

export default FoodContainer;
