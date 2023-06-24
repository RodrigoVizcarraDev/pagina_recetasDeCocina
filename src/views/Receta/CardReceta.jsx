import { Col, Card, Button } from "react-bootstrap";

const CardReceta = ({nombreReceta, imagen}) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.Body className="text-center">
          <Card.Title>{nombreReceta}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Ver receta</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
