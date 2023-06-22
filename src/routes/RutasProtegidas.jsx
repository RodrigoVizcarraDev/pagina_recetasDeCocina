import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    // logica que quiero averiguar
    const usuario = JSON.parse(localStorage.getItem("usuario")) || null;

    // saber si el usuario no esta logueado
    if(!usuario){
        return <Navigate to={"/login"}></Navigate>
    }else{
        return children;
    }
};

export default RutasProtegidas;