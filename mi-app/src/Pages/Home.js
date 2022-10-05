import React from "react";
import { Container, Nav, Navbar, Card, ListGroup} from "react-bootstrap";

function Home() {
  return (
    <div>
      <container>
        <main>
          <Card style={{ width: "180px" }}>
            <Card.Img variant="top" src="marin.jpg" />
            <Card.Body>
              <Card.Title>Marin Kitagawa</Card.Title>
              <Card.Text>
                Información adicional
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Tag 1</ListGroup.Item>
              <ListGroup.Item>Tag 2</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Netflix</Card.Link>
              <Card.Link href="#">Youtube</Card.Link>
            </Card.Body>
          </Card>
        </main>
      </container>
    </div>
  );
}

export default Home;
