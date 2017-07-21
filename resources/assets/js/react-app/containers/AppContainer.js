import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppContainer extends Component {

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>

        <Footer />
      </div>
    )
  }
}

export default AppContainer;


