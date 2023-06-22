import Table from "react-bootstrap/Table";
import ItemTablaReceta from "./Receta/ItemTablaReceta";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { consultarListaProducto } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
    const [recetas, setListaRecetas] = useState([]);

    useEffect(() => {
        // consultar a la api y guardar receta en el state
        consultarListaProducto().then((consultaListaReceta) => {
            if (consultaListaReceta) {
                setListaRecetas(consultaListaReceta);
            } else {
                Swal.fire(
                    "Error",
                    "Intente realizar la operacion en unos minutos",
                    "error"
                );
            }
        });
    }, []);
    return (
        <div className="container mainSection">
            <section className="d-flex justify-content-between align-items-center mt-5">
                <h1 className=" text-center">Administrar recetas</h1>
                <Button className="btn btn-primary">Agregar</Button>
            </section>
            <div className="my-3">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre de receta</th>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Id</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recetas.map((receta) => {
                            return (
                                <ItemTablaReceta
                                    key={receta.id}
                                    nombreReceta={receta.nombreReceta}
                                    imagen={receta.imagen}
                                    descripcion={receta.descripcion}
                                    id={receta.id}
                                ></ItemTablaReceta>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Administrador;
