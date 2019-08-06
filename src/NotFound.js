import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


class NotFound extends Component {
  render() {
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
            </CardTitle>
            <CardText className="font-italic"></CardText>
            Hmmm. I can't seem to find what you want.
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default NotFound;

