import React, { Component } from 'react';
import { Card } from 'react-materialize';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <article className="list-container">
        <Card>{this.props.children}</Card>
      </article>
    );
  }
}

export default List;
