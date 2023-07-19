import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
   const response = await livrosAPI.get('/');     //Como ja passamos no create, ele retorna o /livros normalmente

   return response.data;
}

export {
    getLivros
}