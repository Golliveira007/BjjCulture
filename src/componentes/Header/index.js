import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const AppHeader = styled.header`
    background-color: Gray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    text-align: center;
`

function Header (){
    return(
        <AppHeader>
        <Logo/>
        <OpcoesHeader/>
        </AppHeader>
    )
}

export default Header;