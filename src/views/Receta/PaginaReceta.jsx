const PaginaReceta = () => {
    return (
        <section className="container my-5 border border-5 text-center mainSection">
            <h1 className=" text-center mt-4">Nombre de la receta</h1>
            <img
                src="https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="imgReceta mt-4"
            />
            <article className="text-start">
                <p className="mt-4 fs-5">Descripcion completa de la receta</p>
            </article>
        </section>
    );
};

export default PaginaReceta;
