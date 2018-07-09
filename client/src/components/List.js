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
      <Card style={{ width: '70%', margin: '100px auto', maxWidth: '600px' }}>
        The tasks list goes here.
      </Card>
    );
  }
}

export default List;
