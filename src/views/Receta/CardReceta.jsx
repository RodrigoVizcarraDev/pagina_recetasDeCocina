import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body className="text-center">
          <Card.Title>Camarones con Fideos</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Ver receta</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
