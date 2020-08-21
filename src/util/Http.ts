import axios from "axios"

async function get(url: string) {
    return axios.get(url);
}

async function post(url: string) {
    return axios.post(url);
}

export default { get, post }