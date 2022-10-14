import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeActiveDirection} = props
  const {value} = directionDetails

  const onClickChangeActiveDirection = () => {
    changeActiveDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickChangeActiveDirection}
      >
        {directionDetails.displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
