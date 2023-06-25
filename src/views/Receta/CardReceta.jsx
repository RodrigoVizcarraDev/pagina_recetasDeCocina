import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({ nombreReceta, imagen, recetaId }) => {
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
          <Link variant="primary" to={"/detalle-receta/"+recetaId} className="btn btn-danger">Ver receta</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
