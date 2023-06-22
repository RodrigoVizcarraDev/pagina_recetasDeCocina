// Llamar a una variable de entonrno con las reglas de vite
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETAS;
/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATH me permite editar un elemento | PUT modificar todo el elemento PATH solo una propiedad no necesariamente todo el objeto
DELETE  Eliminar un elemento
*/
export const iniciarSesion = async (usuario) => {
    try {
        // Peticion a la API de los datos
        const respuesta = await fetch(URL_usuario);
        //Extraemos de la propiedad body de la respuesta los datoc con .json()
        const listaUsuarios = await respuesta.json();

        const usuarioInicioSesion = listaUsuarios.find(
            (itemUsuario) => itemUsuario.email === usuario.email
        );

        if (usuarioInicioSesion) {
            // el mail es correcto
            if (usuarioInicioSesion.password === usuario.password) {
                // el password y el email es correcto
                return usuarioInicioSesion;
            } else {
                console.log("Password incorrecto");
                return null;
            }
        } else {
            console.log("El mail no existe");
            // el mail fue incorrecto
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

export const consultarListaRecetas = async () => {
    try {
        const respuesta = await fetch(URL_receta);

        const listaRecetas = await respuesta.json();

        return listaRecetas;
    } catch (error) {
        console.log(error);
    }
};

export const editarReceta = async (receta, id) => {
    try {
        const respuesta = await fetch(URL_receta + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta),
        });
        return respuesta; // status 201 se pudo  crear
    } catch (error) {
        console.log(error);
    }
};

export const borrarReceta = async (id) => {
    try {
        const respuesta = await fetch(URL_receta + "/" + id, {
            method: "DELETE",
        });
        return respuesta; // status 201 se pudo  crear
    } catch (error) {
        console.log(error);
    }
};

export const obtenerReceta = async (id) => {
    try {
        const respuesta = await fetch(URL_receta + "/" + id);

        const receta = await respuesta.json();

        return receta; // retorna una receta
    } catch (error) {
        console.log(error);
    }
};

export const crearReceta = async(receta) => {
    try {
        const respuesta = await fetch(URL_receta, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(receta)
        });
        return respuesta; // retorna una receta creada
    } catch (error) {
        console.log(error);
    }
};
