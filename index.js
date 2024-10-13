import styled from "styled-components";
import MestreMaeda from "../../imagens/Maeda_Mituyo.jpg";
import MestreCarlos from "../../imagens/mestreCarlos.jpg";
import MestreHelio from "../../imagens/mestreHelio.png";

const conteudosTextos = [ { titulo: 'A História do Jiu-Jitsu: De Samurais a Superstars!', texto: 'Você sabia que o Jiu-Jitsu brasileiro tem raízes que vão lá longe no Japão? Essa arte suave começou com os samurais, os famosos guerreiros japoneses que precisavam de algo mais que espadas no campo de batalha. E foi assim que o Jiu-Jitsu tradicional, focado em técnicas de imobilização e alavancas, nasceu. Mas a parte mais empolgante dessa história acontece quando o Jiu-Jitsu desembarcou no Brasil, graças a um certo japonês aventureiro chamado Mitsuyo Maeda. Mitsuyo Maeda, também conhecido como Conde Koma, chegou ao Brasil no início do século XX e, entre uma luta e outra, começou a ensinar Jiu-Jitsu para um jovem chamado Carlos Gracie. Agora, aqui é que a história fica interessante. ', imagem: MestreMaeda}, 
    {titulo: 'Carlos Gracie: O Visionário.', imagem: MestreCarlos, texto:'Carlos Gracie era o mais velho dos irmãos Gracie e foi ele quem primeiro se encantou com o Jiu-Jitsu japonês. Visionário, Carlos viu no Jiu-Jitsu uma oportunidadede desenvolver uma arte marcial diferente, adaptada ao biotipo e estilo de luta dos brasileiros. Ele acreditava que as técnicas poderiam ser ajustadas para que mesmo pessoas menores e mais leves pudessem se defender contra adversários maiores e mais fortes. Carlos começou a ensinar o que aprendeu com Maeda para seus irmãos, e juntos eles começaram a desenvolver o que hoje conhecemos como Jiu-Jitsu Brasileiro. Ele também implementou um estilo de vida baseado em alimentação saudável e disciplina mental, conceitos que ajudaram a família Gracie a se tornar referência no mundo das artes marciais.'},
    {titulo: 'Hélio Gracie: O Mestre da Técnica.', texto:'Enquanto Carlos era o estrategista, o irmão mais novo, Hélio Gracie, foi o grande responsável por moldar o Jiu-Jitsu como o conhecemos hoje. Ao contrário de Carlos, Hélio era mais fraco fisicamente e tinha um porte físico menor, o que o obrigou a adaptar as técnicas tradicionais do Jiu-Jitsu japonês para compensar sua falta de força e explosão. Hélio percebeu que, para vencer lutadores maiores, ele precisaria usar a técnica a seu favor. Foi daí que ele focou em refinar o uso das alavancas e das posições, colocando ênfase em imobilizações e finalizações eficientes. Ele revolucionou a arte, tornando-a acessível para qualquer pessoa, independentemente do porte físico.', imagem: MestreHelio}]; 
    
const conteudosCuriosidades = [{titulo: 'Curiosidades que vão deixar você amarrado no tatame.'},
    {texto: 'Uma questão de família: A família Gracie é tão famosa no mundo do Jiu-Jitsu que é praticamente impossível falar sobre a arte sem mencionar pelo menos um Gracie, Royler, Rickson, Rorion, Royce... a lista vai longe. São tipo os “X-Men” do Jiu-Jitsu!'},
    {texto: 'Nem sempre é sobre força: Uma das coisas mais legais do Jiu-Jitsu é que ele foi desenhado para permitir que pessoas menores e mais fracas consigam vencer oponentes maiores. É por isso que você vê muito "baixinho" finalizando grandalhões em campeonatos!'},
    {texto: 'Mais velho que parece: Você pode achar que o Jiu-Jitsu brasileiro é uma coisa moderna, mas já faz mais de 100 anos que ele chegou ao Brasil! E se contar o Jiu-Jitsu tradicional japonês, essa arte marcial tem raízes que datam de centenas de anos atrás.'},
    {texto: 'De esporte a estilo de vida: Quem começa no Jiu-Jitsu geralmente não para. Isso porque a arte marcial se transforma num estilo de vida. É sobre disciplina, paciência, humildade (afinal, sempre tem alguém melhor) e claro muita resiliência.'}];    

const Conteudo = styled.section`
    justify-content: center;
    align-items:center;
    display: felx;
    font: normal;
`

const Titulo = styled.h2`
    display: flex;
    justify-content: center;
    color: black;
    margin-top: 50px;
    font: normal, Arial, verdana, serif;
`

const TextoPrincipal = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal, Arial, verdana, serif;
    text-indent: 30px;
    margin: 40px 100px 0 100px;
    font-size: 20px;
`
const TextoCuriosidades = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal, Arial, verdana, serif;
    text-indent: 30px;
    color: black;
    margin: 0px 100px 0 100px;
    font-size: 20px;
`

const ImgPadrao = styled.img`
    width: 300px;
    margin: 0 50px 0 50px;
    align-items: center;
    height: 200px;
`

function ConteudoPrincipal(){
    return(
        <Conteudo>
            
            { conteudosTextos.map( (item, index) => (
                <div key={index}>
                    <Titulo>{item.titulo}</Titulo>
                    <TextoPrincipal>
                        {item.texto}
                        <ImgPadrao src={item.imagem} alt={`Imagem ${index + 1}`}/>
                    </TextoPrincipal>

                </div>
                
                
            ))}
            
            { conteudosCuriosidades.map( (item) => (
                <div>
                    <Titulo>{item.titulo}</Titulo>
                    <TextoCuriosidades>{item.texto}</TextoCuriosidades>
                </div>
            ))

            }
            

        </Conteudo>
    )
}

export default ConteudoPrincipal;