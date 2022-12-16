import React from 'react'

import { ErrorText, IconContainer, InputContainer, InputText } from './style'

import { Controller } from "react-hook-form";

import { IInput } from './types'
import { validateHeaderValue } from 'http';


const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
    return (<>
        <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
            name={ name }
            control={ control }
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => <InputText value={ value } onChange={ onChange } { ...rest }/>} 
            /> 
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>)
}

export { Input };
