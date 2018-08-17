import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollableTabs from './ScrollableTabs';

class Feeds extends Component {

  render() {
    const { user, setActive } = this.props;
    return (
      <ScrollableTabs setActive={setActive} />
    );
  };
}

export default Feeds;

