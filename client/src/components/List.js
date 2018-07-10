import React, { Component } from 'react';
import { Card } from 'react-materialize';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <Card>
        The tasks list goes here.
      </Card>
    );
  }
}

export default List;
