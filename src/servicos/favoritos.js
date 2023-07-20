import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"});

async function getFavoritos(){
   const response = await favoritosAPI.get('/');     //Como ja passamos no create, ele retorna o /livros normalmente

   return response.data;
}

export {
    getFavoritos
}