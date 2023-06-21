import Table from "react-bootstrap/Table";
import ItemTablaReceta from "./Receta/ItemTablaReceta";
import { Button } from "react-bootstrap";

const Administrador = () => {
    return (
        <div className="container mainSection">
            <section className="d-flex justify-content-between align-items-center mt-5">
                <h1 className=" text-center">Administrar recetas</h1>
                <Button
                    className="btn btn-primary"
                >
                    Agregar
                </Button>
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
                        <ItemTablaReceta></ItemTablaReceta>
                        <ItemTablaReceta></ItemTablaReceta>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Administrador;
