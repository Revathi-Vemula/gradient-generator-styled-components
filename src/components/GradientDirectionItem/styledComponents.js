import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  height: 40px;
  width: 100px;
  color: #000000;
  border-style: none;
  margin: 5px;
  border-radius: 10px;
  font-family: 'Consolas';
  font-weight: 700;
  font-size: 15px;
`
export const DirectionItem = styled.li`
  list-style-type: none;
`
