import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';

const Registro = () => {
    return (
        <section className="my-5 mainSection">
            <h1 className="text-center">Registro</h1>

            <Container>

                <Form className="mx-auto shadow p-4" style={{maxWidth:"800px"}}>
                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Control type="text" placeholder="Ingrese un nombre de usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Control type="email" placeholder="Ingrese un email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Control type="password" placeholder="Ingrese un password"/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    );
};

export default Registro;
