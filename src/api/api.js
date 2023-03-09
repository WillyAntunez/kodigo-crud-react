import { Axios } from "axios";

const api = new Axios({
    baseURL: 'https://denny2023.azurewebsites.net/api',
});

export {
    api
}