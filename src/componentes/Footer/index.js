import styled from "styled-components";
import Logo from "../Logo";

 const Rodape = styled.footer`
    background-color: Gray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    text-align: center;
    margin-top: 100px;
 `

function Footer(){
    return(
        <Rodape>
            <Logo/>
        </Rodape>
        
    )
}

export default Footer;