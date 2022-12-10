import { ContainerInput, IconContainer, InputText, ErroText } from './styles.js'

import { Controller } from 'react-hook-form'

const Input = ({ control, LeftIcon, name, errorMessage, ...rest }) => {
  return (
    <>
      <ContainerInput>
        {LeftIcon ? <IconContainer>{LeftIcon}</IconContainer> : null}

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText name={name} {...field} {...rest} />}
        />
      </ContainerInput>
      {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
    </>
  )
}

export default Input
