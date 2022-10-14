import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  DirectionInputLabel,
  GradientDirectionsContainer,
  InputsContainer,
  ColorInputContainer,
  ColorValue,
  ColorInput,
  GenerateButton,
  ButtonContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirectionValue: 'top',
    startColor: '#8ae323',
    endColor: '#014f7b',
    startColorInput: '#8ae323',
    endColorInput: '#014f7b',
  }

  onChangeStartColor = event => {
    this.setState({startColorInput: event.target.value})
  }

  onChangeEndColor = event => {
    this.setState({endColorInput: event.target.value})
  }

  generateGradient = event => {
    event.preventDefault()
    const {startColorInput, endColorInput} = this.state
    this.setState({startColor: startColorInput, endColor: endColorInput})
  }

  render() {
    const {
      activeGradientDirectionValue,
      startColorInput,
      endColorInput,
      endColor,
      startColor,
    } = this.state

    const changeActiveDirection = value => {
      this.setState({activeGradientDirectionValue: value})
    }

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        direction={activeGradientDirectionValue}
        startColor={startColor}
        endColor={endColor}
        onSubmit={this.generateGradient}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionInputLabel>Choose Direction</DirectionInputLabel>
        <GradientDirectionsContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionDetails={eachDirection}
              key={eachDirection.id}
              isActive={activeGradientDirectionValue === eachDirection.value}
              changeActiveDirection={changeActiveDirection}
            />
          ))}
        </GradientDirectionsContainer>
        <DirectionInputLabel>Pick the Colors</DirectionInputLabel>
        <InputsContainer>
          <ColorInputContainer>
            <ColorValue htmlFor="startColor">{startColorInput}</ColorValue>
            <ColorInput
              type="color"
              id="startColor"
              value={startColorInput}
              onChange={this.onChangeStartColor}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <ColorValue htmlFor="endColor">{endColorInput}</ColorValue>
            <ColorInput
              type="color"
              id="endColor"
              value={endColorInput}
              onChange={this.onChangeEndColor}
            />
          </ColorInputContainer>
        </InputsContainer>
        <ButtonContainer>
          <GenerateButton type="submit" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ButtonContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
