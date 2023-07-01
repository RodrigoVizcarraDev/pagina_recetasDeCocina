import { useParams } from "react-router-dom";
import { obtenerReceta } from "../../helpers/queries";
import { useEffect, useState } from "react";

const PaginaReceta = () => {
    // Creamos el state donde guardaremos la receta que recibimos a traves de obtenerReceta
    const [recetaObtenida, setRecetaObtenida] = useState({});

    // Extraemos de la url los parametros {param1, param2, etc}
    const {id} = useParams();

    // Con useEffect en montaje llamamos a la funcion obtener receta

    useEffect(()=>{
        obtenerReceta(id).then((respuesta)=>{
            if(respuesta){
                setRecetaObtenida(respuesta);
            }
        });
    },[]);

    return (
        <section className="container my-5 border border-5 text-center mainSection">
            <h1 className=" text-center mt-4">{recetaObtenida.nombreReceta}</h1>
            <img
                src={recetaObtenida.imagen}
                alt={recetaObtenida.nombreReceta}
                className="imgReceta mt-4"
            />
            <article className="text-start">
                <p className="mt-4 fs-5">{recetaObtenida.descripcion}</p>
            </article>
        </section>
    );
};

export default PaginaReceta;
