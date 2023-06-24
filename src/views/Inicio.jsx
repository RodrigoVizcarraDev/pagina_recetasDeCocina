import { Row } from "react-bootstrap";
import CardReceta from "./Receta/CardReceta";
import { useEffect, useState } from "react";
import { consultarListaRecetas } from "../helpers/queries";
import Swal from "sweetalert2";

const inicio = ({}) => {
    
    const [recetasInicio, setRecetasInicio] = useState([]);

    useEffect(()=>{
        //consultar a la api la lista de recetas en dbJson
        consultarListaRecetas().then((respuesta)=>{
            if(respuesta){
                console.log(respuesta);
                setRecetasInicio(respuesta);
            }else{
                Swal.fire(
                    "Error",
                    "No se pudieron cargar las recetas en el inicio",
                    "error"
                )
            }
        })
    },[])

    return (
        <section className="mainSection">
            <div className="w-100">
                <img
                    src="https://images.pexels.com/photos/12673998/pexels-photo-12673998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="img_pagina_inicio"
                />
            </div>
                <article className="container">
                    <h1 className="text-center">Lista de recetas</h1>
                    <hr />
                    <Row>
                        {/* Aqui van los componentes CardReceta */}
                        {recetasInicio.map((receta)=>{
                            return <CardReceta key={receta.id} nombreReceta={receta.nombreReceta} imagen={receta.imagen}></CardReceta>
                        })}
                    </Row>
                </article>
        </section>
    );
};

export default inicio;
