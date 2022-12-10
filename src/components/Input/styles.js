import styled from 'styled-components'


export const ContainerInput = styled.div`
  width: 300px;
  height: 25px;
  border-radius: 4px;
  

  margin: 60px auto 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.div`
  margin-right: 10px;
  margin-top: 3px;
`

export const InputText = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  padding-left: 3px;
  font-family: Arial, Helvetica, sans-serif;
`

export const ErroText = styled.span`
  color: red;
  font-size: 12px;
  margin: 3px 0;
`