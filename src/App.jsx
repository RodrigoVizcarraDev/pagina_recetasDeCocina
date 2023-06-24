import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
import Inicio from "./views/Inicio";
import Error404 from "./views/Error404";
import Footer from "./common/Footer";
import PaginaReceta from "./views/Receta/PaginaReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdministrador from "./routes/RutasAdministrador";
import { consultarListaRecetas } from "./helpers/queries";
function App() {

    const usuariosDelLocalStorage =
        JSON.parse(localStorage.getItem("usuario")) || {};

    const [usuarioLogueado, setUsuarioLogueado] = useState(
        usuariosDelLocalStorage
    );

    const listaRecetasDbJson = consultarListaRecetas().then((respuesta)=>{
        try{
            if(respuesta.status === 200){
                return respuesta.json();  
            }else{
                return [];
            }
        }catch(error){
            console.log(error);
        }
    })

    // const [recetasInicio, setRecetasInicio] = useState(listaRecetasDbJson) || [];
    return (
        <>
            <BrowserRouter>
                <Nav
                    usuarioLogueado={usuarioLogueado}
                    setUsuarioLogueado={setUsuarioLogueado}
                ></Nav>
                <Routes>
                    <Route exact path="/" element={<Inicio ></Inicio>}></Route>
                    <Route
                        exact
                        path="/login"
                        element={
                            <Login
                                setUsuarioLogueado={setUsuarioLogueado}
                            ></Login>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/detalle-receta"
                        element={<PaginaReceta></PaginaReceta>}
                    ></Route>
                    <Route
                        exact
                        path="/administrador/*"
                        element={
                            <RutasProtegidas>
                                <RutasAdministrador></RutasAdministrador>
                            </RutasProtegidas>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/registro"
                        element={<Registro></Registro>}
                    ></Route>
                    <Route path="/*" element={<Error404></Error404>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
