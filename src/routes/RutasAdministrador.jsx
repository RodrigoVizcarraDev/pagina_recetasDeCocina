import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import EditarReceta from "../views/Receta/EditarReceta";
import CrearReceta from "../views/Receta/CrearReceta";

const RutasAdministrador = ({setRecetasInicio}) => {
    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Administrador setRecetasInicio={setRecetasInicio}></Administrador>}
                ></Route>
                <Route
                    exact
                    path="/editar-receta/:id"
                    element={<EditarReceta></EditarReceta>}
                ></Route>
                <Route
                    exact
                    path="/crear-receta"
                    element={<CrearReceta></CrearReceta>}
                ></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;
