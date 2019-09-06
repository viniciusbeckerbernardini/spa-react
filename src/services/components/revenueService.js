import {URL_API} from "../APIBase";

export function getRevenue(){
    return fetch(`${URL_API}/faturamento`).then(result => result.json());
}