import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//nombreReceta, imagen, descripcion, id
const ItemTablaReceta = ({receta}) => {
    
    return (
        <tr>
            <td>{receta.nombreReceta}</td>
            <td>{receta.imagen}</td>
            <td>{receta.descripcion}</td>
            <td>{receta.id}</td>
            <td>
                <Link className="me-2 btn btn-warning" to={"/administrador/editar-receta/"+receta.id}>
                    Editar
                </Link>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemTablaReceta;
