import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (usuario) => {
        console.log(usuario);
    };
    return (
        <>
            <section className="container mainSection">
                <h1 className="pt-4 text-center">Iniciar sesion</h1>
                <div className="m-4 d-flex justify-content-center pt-3">
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className="container contenedorCentrado p-3"
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingresar email"
                                {...register("email", {
                                    required: "El email es obligatorio",
                                    pattern:{
                                      value: /^(?!\.)(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message: "El email debe tener el siguiente formato mail@dominio.como"
                                    }
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Clave</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresar constraseña"
                                {...register("password",{
                                  required: "El password es obligatorio",
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
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Recordar contraseña"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar sesion
                        </Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default login;
