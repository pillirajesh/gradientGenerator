// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.linearGradient});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 30px;
  color: #ededed;
`

export const Paragraph = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 20px;
  color: #ededed;
`

export const ColorChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`

export const ColorPick = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorCode = styled.p`
  font-size: 15px;
  color: #ffffff;
  font-family: 'roboto';
  font-weight: 400;
`

export const Color = styled.input`
  width: 40px;
  border: none;
  background-color: transparent;
  width: 50px;
  height: 30px;
`

export const Button = styled.button`
  font-size: 15px;
  color: #ffffff;
  font-family: 'roboto';
  font-weight: 400;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  background-color: #014f7b;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`

export const UnorderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
