import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner-footer text-center">
          <p>{i18n.app.info_text_portion_size}</p>
          <p><small>{i18n.app.fineli_source_disclaimer}</small></p>
        </div>
      </div>
    )
  }
}

export default Footer