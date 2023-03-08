import { Axios } from "axios";

const api = new Axios({
    baseURL: 'https://denny2023.azurewebsites.net/api',
});

const getVideogames = async () => {
    const res = await api.get('/juegos');
    return JSON.parse(res.data);
};

const getVideoGameById = async (id) => {
    const res = await api.get(`/juegos/${id}`)

    return JSON.parse(res.data);
}

const createVideogame = async ( {
 categoria,
 descripcion,
 titulo,
 plataforma,
 precio,
}) => {
    const data = JSON.stringify({
        categoria,
        descripcion,
        titulo,
        plataforma,
        precio
    })
    
    const res = await api.post('/juegos', data, {
        headers: {
          'Content-Type': 'application/json'
        },
    });

    return JSON.parse(res.data);
};

const updateVideoGame = async ( {
    juegoId,
    categoria,
    descripcion,
    titulo,
    plataforma,
    precio,
   } ) => {

    const data = JSON.stringify({
        juegoId,
        categoria,
        descripcion,
        titulo,
        plataforma,
        precio
    })

    const res = await api.put('/juegos', data, {
        headers: {
          'Content-Type': 'application/json'
        },
    });

    return JSON.parse(res.data);
};

const deleteVideoGame = async ( id ) => {
    const res = await api.delete(`/juegos?id=${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
    });
    
    return JSON.parse(res.data);
}

const getCellphones = async () => {
    const res = await api.get('/celulares');
    return JSON.parse(res.data);
};



export {
    getVideogames,
    createVideogame,
    deleteVideoGame,
    getVideoGameById,
    updateVideoGame,
    getCellphones,
}