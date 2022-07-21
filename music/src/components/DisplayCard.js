import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function DisplayCard({ artist, index }) {
  const artistName = artist;

  return (
    <Col key={index}>
      <Card
        style={{
          width: "18rem",
          border: "0px",
        }}
      >
        <Card.Img variant="top" src={artist.cover_image} />
        <Card.Body>
          <Card.Title>
            <Link to={`details/${artistName}`}>{artist.title}</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DisplayCard;
