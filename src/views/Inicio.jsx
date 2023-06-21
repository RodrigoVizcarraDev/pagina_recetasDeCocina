import { Row } from "react-bootstrap";
import CardReceta from "./Receta/CardReceta";

const inicio = () => {
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
                        <CardReceta></CardReceta>
                        <CardReceta></CardReceta>
                        <CardReceta></CardReceta>
                        <CardReceta></CardReceta>
                    </Row>
                </article>
        </section>
    );
};

export default inicio;
