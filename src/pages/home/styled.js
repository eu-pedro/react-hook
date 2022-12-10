import styled from "styled-components";

export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerContent = styled.section`
  background-color: #10101010;
  height: 450px;
  width: 450px;
  border-radius: 10px;
  box-shadow: 1px .1px 5px 2px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h3`
  color: #101010;
  font-size: 2.4em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  
  margin-top: 35px;
  text-shadow: 3px 2px 8px rgba(0, 0, 0, 0.3);
`

export const ContainerButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 12px;
  background-color: #10101050;
  color: white;
  cursor: pointer;
  font-size: 22px;
  border: 2px solid #10101010;
  
  
  &:hover{
    background-color: #10101050;
    color: lightcyan;
    opacity: 0.7;
  }
`

