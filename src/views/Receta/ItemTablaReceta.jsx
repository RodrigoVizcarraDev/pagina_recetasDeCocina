import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta } from "../../helpers/queries";
import Swal from "sweetalert2";
//nombreReceta, imagen, descripcion, id
const ItemTablaReceta = ({receta, recetas, setListaRecetas}) => {
    const handleClick = ()=>{
        borrarReceta(receta.id).then((respuesta) =>{
            if(respuesta.status === 200){
                eliminarRecetaSeleccionada();
                Swal.fire(
                    "Receta borrada",
                    `La receta ${receta.nombreReceta} fue borrada`,
                    "success"
                )
            }else{
                Swal.fire(
                    "No se pudo borrar la receta",
                    "Error al borrar",
                    "error"
                )
            }
        })

    const eliminarRecetaSeleccionada = () =>{
        const nuevaListaRecetas = recetas.filter((recetaFiltrada) => recetaFiltrada !== receta);
        setListaRecetas(nuevaListaRecetas);
    }
        
    }
    return (
        <tr>
            <td>{receta.nombreReceta}</td>
            <td>{receta.imagen}</td>
            <td className="text-truncate d-inline-block" style={{maxWidth:"250px"}}>{receta.descripcion}</td>
            <td>{receta.id}</td>
            <td>
                <Link className="me-2 btn btn-warning" to={"/administrador/editar-receta/"+receta.id}>
                    Editar
                </Link>
                <Button variant="danger" onClick={handleClick}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemTablaReceta;
