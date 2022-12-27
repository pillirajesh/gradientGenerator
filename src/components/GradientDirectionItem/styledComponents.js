// Style your elements here
import styled from 'styled-components'

export const GradientDirectionList = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 400;
  color: #1e293b;
  font-family: 'Roboto';
  margin-right: 10px;
  width: 60px;
  cursor: pointer;
  background-color: #ffffff79;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
