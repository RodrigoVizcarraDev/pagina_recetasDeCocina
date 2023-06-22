// Llamar a una variable de entonrno con las reglas de vite
const URL_usuario = import.meta.env.VITE_API_USUARIO;
/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATH me permite editar un elemento | PUT modificar todo el elemento PATH solo una propiedad no necesariamente todo el objeto
DELETE  Eliminar un elemento
*/
export const iniciarSesion = async (usuario) => {
    try{
        // Peticion a la API de los datos
        const respuesta = await fetch(URL_usuario);
        //Extraemos de la propiedad body de la respuesta los datoc con .json()
        const listaUsuarios = await respuesta.json();

        const usuarioInicioSesion = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);

        if(usuarioInicioSesion){
            // el mail es correcto
            if(usuarioInicioSesion.password === usuario.password){
                // el password y el email es correcto
                return usuarioInicioSesion;
            }else{
                console.log("Password incorrecto");
                return null;
            }
        }else{
            console.log("El mail no existe");
            // el mail fue incorrecto
            return null;
        }

    }catch(error){
        console.log(error);
    }
}