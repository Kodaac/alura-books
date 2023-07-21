import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos, deleteFavorito } from '../servicos/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  const[favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos(){
    const favoritosAPI = await getFavoritos();
    setFavoritos(favoritosAPI);
  }

  async function deletarFavorito(id){
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id: ${id} deletado.`)
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      {favoritos.map( favorito => (
      <div onClick={() => deletarFavorito(favorito.id)}>
        <h2>{favorito.nome}</h2>
      </div>
      ))}
    </AppContainer>
  );
}

export default Favoritos;
