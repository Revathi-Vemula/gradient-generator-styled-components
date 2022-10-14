import styled from 'styled-components'

export const GradientContainer = styled.form`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.startColor},
    ${props => props.endColor}
  );

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  text-align: center;
`

export const DirectionInputLabel = styled.p`
  color: #ffffff;
  opacity: 0.5;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`

export const GradientDirectionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 15vh;
  padding-left: 0;
  list-style-type: none;
  flex-wrap: wrap;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-family: 'Consolas';
  font-weight: 800;
  text-align: center;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  padding: 0;
  outline: none;
  border-style: none;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  color: #334155;
  background-color: #00c9b7;
  width: 120px;
  padding: 15px;
  border-style: none;
  font-size: 15px;
  border-radius: 10px;
  font-weight: 700;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
