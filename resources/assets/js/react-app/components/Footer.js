import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner-footer text-center">
          <p><small>{i18n.app.fineli_source_disclaimer}</small></p>
        </div>
      </div>
    )
  }
}

export default Footer