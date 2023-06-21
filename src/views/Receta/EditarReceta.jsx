import { Form, Button, FloatingLabel } from "react-bootstrap";

const EditarReceta = () => {
    return (
        <section className="container mainSection my-4">
            <h1 className="text-center">Editar Receta</h1>

            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Nombre de la receta"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="text"
                            placeholder="imagen de la receta"
                        />
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Descripcion de la receta"
                    >
                        <Form.Control
                            as="textarea"
                            style={{ height: "150px" }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className="mt-3">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default EditarReceta;
