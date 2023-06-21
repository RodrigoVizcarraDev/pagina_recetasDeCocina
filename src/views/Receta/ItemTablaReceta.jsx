import { Button } from "react-bootstrap";

const ItemTablaReceta = () => {
    return (
        <tr>
            <td>Camarones con fideos</td>
            <td>https://images.pexels.com/photos/12673998/pexels-photo-12673998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
            <td>Descripcion receta</td>
            <td>id receta</td>
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
