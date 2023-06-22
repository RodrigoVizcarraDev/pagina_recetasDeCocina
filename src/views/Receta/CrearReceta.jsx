import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearReceta } from "../../helpers/queries";

const CrearReceta = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (recetaNueva) => {
        console.log(recetaNueva);
        console.log("TEXTO ABAJO DE RECETA");
        crearReceta(recetaNueva).then((respuesta) => {
            console.log(respuesta);
            if (respuesta.status === 201) {
                Swal.fire(
                    "Receta creada",
                    `La receta ${recetaNueva.nombreReceta}fue creado con exito`,
                    "success"
                );
                reset();
            } else {
                Swal.fire(
                    "Error al crear",
                    `El receta ${recetaNueva.nombreReceta} no pudo ser creado`,
                    "error"
                );
            }
        });
    };

    return (
        <section className="container mainSection my-4">
            <h1 className="text-center">Crear nueva receta</h1>

            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="inputNombreReceta">
                        <Form.Control
                            type="text"
                            placeholder="Nombre de la receta"
                            {...register("nombreReceta", {
                                required:
                                    "El nombre de la receta es obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "El nombre de la receta debe tener mas de dos caracteres",
                                },
                                maxLength: {
                                    value: 20,
                                    message:
                                        "El nombre de la receta es hasta 100 caracteres",
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.nombreReceta?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputImagenReceta">
                        <Form.Control
                            type="text"
                            placeholder="imagen de la receta"
                            {...register("imagen", {
                                required: "La URL del receta es obligatoria",
                                pattern: {
                                    value: /^https:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}(\/[^\s]*)?$/,
                                    message: "URL invalia",
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.imagen?.message}
                        </Form.Text>
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Descripcion de la receta"
                    >
                        <Form.Control
                            as="textarea"
                            style={{ height: "150px" }}
                            {...register("descripcion", {
                                required: "La descripcion es obligatoria",
                                minLength: {
                                    value: 150,
                                    message:
                                        "Como minimo una receta debe tener 150 caracteres",
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.descripcion?.message}
                        </Form.Text>
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className="mt-3">
                        Enviar
                    </Button>
                </Form>
            </div>
        </section>
    );
};

export default CrearReceta;
