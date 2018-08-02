import React, { Component } from 'react';
import { Card } from 'react-materialize';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Card>{this.props.children}</Card>;
  }
}

export default List;
