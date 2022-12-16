import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '../button'

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

import { Iheader } from './types'



const Header = ({autenticado} : Iheader) => {

    const navigate = useNavigate()

    const handleClickSignInLogin = () => {
        navigate('/login') 
    } 

    const handleClickSignInRegister = () => {
        navigate('/registration') 
    } 

    const handleClickSignInHome = () => {
        navigate('/')
    }
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="" alt="Logo da dio" />
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>) : null}
            </Row>
            <Row>
                {autenticado ? (<>
                        <UserPicture src="" alt="perfil" />  
                    </>) : (<>    
                    <MenuRight onClick={handleClickSignInHome}>Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickSignInLogin}/>
                    <Button title="Cadastrar" onClick={handleClickSignInRegister}/>
                    </>)}
                <>
                </>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
