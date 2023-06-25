import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queries";
import Swal from "sweetalert2";
const Registro = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (usuario) => {
        crearUsuario(usuario).then((respuesta)=>{
            if(respuesta.status === 201){
                Swal.fire(
                    `Usuario creado con exito`,
                    "Exito",
                    "success"
                );
                reset();
            }else{
                Swal.fire(
                    "Usuario no pudo ser creado",
                    "Error",
                    "error"
                );
            }
        });
    };
    return (
        <section className="my-5 mainSection">
            <h1 className="text-center">Registro</h1>

            <Container>
                <Form
                    className="mx-auto shadow p-4"
                    style={{ maxWidth: "800px" }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Form.Group className="mb-3" controlId="userName">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese un nombre de usuario"
                            {...register("nombreUsuario", {
                                required: "El nombre de usuario es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: "El nombre de usuario debe tener mas de dos caracteres"
                                },
                                maxLength:{
                                    value: 20,
                                    message: "El nombre de usuario es hasta 20 caracteres"
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.nombreUsuario?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userEmail">
                        <Form.Control
                            type="email"
                            placeholder="Ingrese un email"
                            {...register("email",{
                                required: "El email es obligatorio",
                                pattern:{
                                    value: /^(?!\.)(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "El email debe tener el siguiente formato mail@dominio.com"
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.email?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Control
                            type="password"
                            placeholder="Ingrese un password"
                            {...register("password",{
                                required: "El password es requerido",
                                pattern:{
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/,
                                    message: "El password debe tener entre 8 y 16 caracteres, al menos un digito, almenos una minuscula y al menos una mayuscula"
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
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
