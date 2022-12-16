import React from 'react'



import { 
    CardContainer, 
    Content, 
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './style'

const Card = () => {
  return (<>
    <CardContainer>
        <ImageBackground src='' alt='fotinha'/>
        <Content>
            <UserInfo>
                <UserPicture src='' alt='perfil'/>
                <div>
                    <h4>João Paulo Alves</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>

            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de HTML e CSS no bootcamp dio Blobal avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScripit</h4>
                <p>
                    Likes 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
</>)
}
export { Card }