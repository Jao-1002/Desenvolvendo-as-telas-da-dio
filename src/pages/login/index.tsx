import { useNavigate } from 'react-router-dom'

import { MdEmail, MdLock, } from "react-icons/md";

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
    email: yup.string().email('email invalido').required('Campo obrigatorio'),
    senha: yup.string().min(3, 'Minimo de 3 caracteres').required('Campo obrigatorio.'),
  }).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'  
    });


    

    const onSubmit = async ( formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválido')
            }
        }catch{
            alert('houve erro, tente novamente.')
        }
    }

    const navigate = useNavigate()


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
                   <TitleLogin>Faça seu cadastro</TitleLogin> 
                   <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin> 
                   <form onSubmit={  handleSubmit( onSubmit ) }>
                        <Input name="email" control={control} placeholder="E-mail" type="email" errorMessage={errors?.email?.message} leftIcon={<MdEmail />} />
                        <Input name="senha" control={control} placeholder="Senha" type="password" errorMessage={errors?.senha?.message} leftIcon={<MdEmail />} />
                        <Button title="Entrar" variant="secondary"  type="submit" />
                   </form>
                   <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                   </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}
export { Login }