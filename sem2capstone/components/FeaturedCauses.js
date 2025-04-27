'use client';

import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FeaturedCauses.css";

function UncontrolledExample() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item>
          <Card className="carousel-card">
            <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
            <Card.Body>
              <Card.Title>First Cause</Card.Title>
              <Card.Text>
                Support the first cause by donating generously!
              </Card.Text>
              <Button variant="primary">Donate Now</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="carousel-card">
            <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
            <Card.Body>
              <Card.Title>Second Cause</Card.Title>
              <Card.Text>
                Help us achieve our goal for the second cause.
              </Card.Text>
              <Button variant="primary">Donate Now</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="carousel-card">
            <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
            <Card.Body>
              <Card.Title>Third Cause</Card.Title>
              <Card.Text>
                Make a difference with your contribution.
              </Card.Text>
              <Button variant="primary">Donate Now</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
