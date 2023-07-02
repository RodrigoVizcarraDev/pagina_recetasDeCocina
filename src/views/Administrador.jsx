import Table from "react-bootstrap/Table";
import ItemTablaReceta from "./Receta/ItemTablaReceta";
import { useEffect, useState } from "react";
import { consultarListaRecetas } from "../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Administrador = () => {
    const [recetas, setListaRecetas] = useState([]);
    
    useEffect(() => {
        // consultar a la api y guardar receta en el state
        consultarListaRecetas().then((consultaListaReceta) => {
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
                <Link className="btn btn-primary" to={"/administrador/crear-receta"}>Agregar</Link>
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
                                    receta={receta}
                                    recetas={recetas}
                                    setListaRecetas={setListaRecetas}
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
