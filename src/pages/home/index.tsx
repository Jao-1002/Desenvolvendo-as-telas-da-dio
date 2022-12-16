import { useNavigate } from 'react-router-dom'


import { Button } from '../components/button'

import { Header } from "../components/header"

import { Container, TextContent, Title, TitleHighlight } from './styles'

const Home = () => {
    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login') 
    } 

    return (
    <>
        <Header />
        <Container>
            <div>
                <Title>
                   
                    <TitleHighlight>
                        Implemente
                        <br/>
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title> 
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafil profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>    
                <Button title="Começar aogra" variant="secondary"onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src="" alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}
export {Home}