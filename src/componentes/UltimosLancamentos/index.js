import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import {livros} from './dadosUltimosLancamentos';
import imagemLivro from '../../imagens/livro2.png';
import vueJs from '../../imagens/vue.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px">Ultimos Lançamentos</Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src}/>

            ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 16"
                descricao="Angular 16 em web apps"
                img={imagemLivro}
            />
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="VueJs"
                descricao="VueJs em web apps"
                img={vueJs}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;