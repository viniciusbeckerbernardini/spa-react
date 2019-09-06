import {URL_API} from "../APIBase";

export function getResume(){
    return fetch(`${URL_API}/resumo`).then(result => result.json());
}