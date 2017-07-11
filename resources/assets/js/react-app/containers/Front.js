import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Front extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>Hello!</Col>
        </Row>
      </Grid>
    )
  }
}

export default Front;


