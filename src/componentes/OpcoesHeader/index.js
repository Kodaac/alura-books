import styled from 'styled-components'

const Menu = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return (
        <Menu>
          {textoOpcoes.map( (texto) => (
            <MenuItem><p>{texto}</p></MenuItem>
          ))}
        </Menu>
    );
}

export default OpcoesHeader;