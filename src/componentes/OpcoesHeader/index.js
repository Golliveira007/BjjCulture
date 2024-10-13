import login from '../../imagens/login.png';
import styled from 'styled-components';

const opcoes = ['Home', 'Graduação', 'Fundamentos', 'Shopping'];

const Opcoes = styled.ul`
    display: flex;
    margin: 0 0px 0 50px;
`

const Opcao = styled.li`
    font-size: 17px;
    margin: 0 15px 0 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    color: black;
    margin-top: 8px;
    font: normal, Arial, verdana, serif;
`

const Login = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    text-align: center;
`

const LoginIcone = styled.img`
    width: 40px;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 100px;
`

function OpcoesHeader (){
    return(
        <Opcoes>
            { opcoes.map( (texto) => (
            <Opcao>{texto}</Opcao>
            ) ) }

            <Login>
                <LoginIcone src={login} alt='login' className='loginIcone'/> <strong>Login</strong>
            </Login>
            
        </Opcoes>

        
    )
}

export default OpcoesHeader;