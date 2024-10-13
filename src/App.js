import Header from './componentes/Header';
import styled from 'styled-components';
import ConteudoPrincipal from './componentes/ConteudoPaginaInicial';
import Footer from './componentes/Footer';

const AppContainer = styled.div`
  .App{
  width: 100vw;
  height: 100vh;
}

`

function App() {
  return (
    <AppContainer>
      
     <Header/>

     <ConteudoPrincipal/>
     
     <Footer/>

    </AppContainer>
    
  );
}

export default App;
