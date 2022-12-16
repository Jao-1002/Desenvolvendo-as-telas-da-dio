import { Link } from 'react-router-dom'

import { Button } from '../components/button'

import { Header } from "../components/header"

import { Card } from '../components/card'

import { 
    Container,  
    Column, 
    Title, 
    TitleHighlight 
} from './styles'

import { UserInfo } from '../components/userInfo'

const Feed = () => {
    return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <title>Feed</title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={90} nome="João Paulo" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={70} nome="João Paulo" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={65} nome="João Paulo" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
            </Column>
        </Container>
    </>)
}
export { Feed }