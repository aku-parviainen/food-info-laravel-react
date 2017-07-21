import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Row>
        <Col md={12}>
          <div className="header text-center">
            <h1>{i18n.app.app_name}</h1>
            <p>{i18n.app.app_slogan}</p>
          </div>  
        </Col>
      </Row>
    )
  }
}

export default Header;


