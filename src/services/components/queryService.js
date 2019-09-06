import {URL_API} from "../APIBase";

export function getQuery(){
    return fetch(`${URL_API}/consultas`).then(result => result.json());
}