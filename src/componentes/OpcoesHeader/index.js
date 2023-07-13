import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return (
        <ul className='menu'>
          {textoOpcoes.map( (texto) => (
            <li className='menuItem'><p>{texto}</p></li>
          ))}
        </ul>
    );
}

export default OpcoesHeader;