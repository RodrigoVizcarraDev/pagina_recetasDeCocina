import { Button } from "react-bootstrap";

const ItemTablaReceta = ({nombreReceta, imagen, descripcion, id}) => {
    return (
        <tr>
            <td>{nombreReceta}</td>
            <td>{imagen}</td>
            <td>{descripcion}</td>
            <td>{id}</td>
            <td>
                <Button className="me-2" variant="warning">
                    Editar
                </Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemTablaReceta;
