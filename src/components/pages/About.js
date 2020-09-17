import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <Container fluid="md" className="my-5">
      <p className="text-primary lead text-center text-underline">About</p>
      <Row className="justify-content-center">
        <Col md={12} lg={8}>
          <h2 className="font-weight-bold text-center">Lorem Ipsum</h2>
          <p>
            <strong>
              Facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </strong>
            <em>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat.
            </em>
            Esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat. Fugiat quo voluptas nulla
            pariatur? Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat.
          </p>
          <ol>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </li>
            <li>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat.
            </li>
          </ol>
          <p>
            Quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Esse cillum dolore eu fugiat nulla pariatur. Animi, id est
            laborum et dolorum fuga. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
