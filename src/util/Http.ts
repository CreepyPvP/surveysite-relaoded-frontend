import axios from "axios"

export async function get(url: string) {
    return axios.get(url);
}

export async function post(url: string) {
    return axios.post(url);
}