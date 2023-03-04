import axios, { Axios } from "axios";

const api = new Axios({
    baseURL: 'https://denny2023.azurewebsites.net/api',
});

const getVideogames = async () => {
    const res = await api.get('/juegos');
    return JSON.parse(res.data);
};

const getCellphones = async () => {
    const res = await api.get('/celulares');
    return JSON.parse(res.data);
};

export {
    getVideogames,
    getCellphones,
}