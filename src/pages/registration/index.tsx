import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { useNavigate } from 'react-router-dom'

import { Button } from '../components/button'

import { Header } from "../components/header"

import { Input } from '../components/Input'

import { api } from '../../services/api'

import { IFormData } from './types'

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

const schema = yup.object({
    userName: yup.string().min(3, 'Minimo de 3 caracteres').required('Campo obrigatorio'), 
    email: yup.string().email('email invalido').required('Campo obrigatorio'),
    senha: yup.string().min(3, 'Minimo de 3 caracteres').required('Campo obrigatorio.'),
  }).required();

const Registration = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'  
    });


    

    

    const navigate = useNavigate()

    const handleClickSignInFeed = () => {
        navigate('/feed') 
    }


    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title> 
            </Column>
            <Column>
                <Wrapper>
                   <TitleLogin>Comece agora grátis</TitleLogin> 
                   <SubtitleLogin>crie sua conta e make the change._</SubtitleLogin> 
                   <form >
                        <Input name="userName" control={control} placeholder="Nome Completo" type="text" errorMessage={errors?.userName?.message} leftIcon={<MdPerson />}  />
                        <Input name="email" control={control} placeholder="E-mail" type="email" errorMessage={errors?.email?.message} leftIcon={<MdEmail />} />
                        <Input  name="senha" control={control} placeholder="Senha" type="password" errorMessage={errors?.senha?.message} leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary"  type="submit" onClick={handleClickSignInFeed}/>
                   </form>
                   <Row>
                        <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</EsqueciText>

                        <CriarText>já tenho conta. <a>Criar Conta</a></CriarText>
                   </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export { Registration }