import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const ContainerLogo = styled.div`
    display: flex;
`

const Logo1 = styled.img`
    width: 50px;
    margin: 0 0 0 10px;
    margin-left: 30px;
`

function Logo(){
    return(
        <ContainerLogo>
        <Logo1 src={logo} className='logo1' alt='logo'/>
        <p><strong>Bjj</strong>Culture </p>
        </ContainerLogo> 
    )
    
}




export default Logo;


