import axios from 'axios'
import { API_URL } from '../config';


axios.defaults.baseURL = API_URL;

export function setCommonHeader(header, headerValue) {
    axios.defaults.headers.common[header] = headerValue;
}

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    setCommonHeader
}

export default httpService;