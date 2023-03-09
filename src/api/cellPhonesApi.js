import { api } from "./api";

const getCellphones = async () => {
    const res = await api.get('/celulares');
    return JSON.parse(res.data);
};

const createCellphone = async ( {
    marca,
    color,
    descripcion,
    modelo,
    precio,
    operadora,
    }) => {
    const data = JSON.stringify({
        marca,
        color,
        descripcion,
        modelo,
        precio,
        operadora,
    })
    
    const res = await api.post('/celulares', data, {
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return JSON.parse(res.data);
};

const deleteCellphone = async ( id ) => {
    const res = await api.delete(`/celulares?id=${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
    });
    
    return JSON.parse(res.data);
}

const getCellphoneById = async (id) => {
    const res = await api.get(`/celulares/${id}`)

    return JSON.parse(res.data);
}

const updateCellphone = async ( {
    celularId,
    marca,
    color,
    descripcion,
    modelo,
    precio,
    operadora,
    }) => {
        const data = JSON.stringify({
            celularId,
            marca,
            color,
            descripcion,
            modelo,
            precio,
            operadora,
        })

    const res = await api.put('/celulares', data, {
        headers: {
          'Content-Type': 'application/json'
        },
    });

    return JSON.parse(res.data);
};

export {
    getCellphones,
    createCellphone,
    deleteCellphone,
    getCellphoneById,
    updateCellphone,
}