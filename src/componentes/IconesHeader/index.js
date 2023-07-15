import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`


const IconeItem = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader(){
    return( 
    <Icones>
        {icones.map((iconesImg) => (
            <IconeItem><img src={iconesImg} alt='iconesHeader'></img></IconeItem>
        ))}
    </Icones>
    );
}

export default IconesHeader;