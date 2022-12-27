// Write your code here
import {GradientDirectionList, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachListDetails, onChangeDirection, tab} = props
  const {displayText, value} = eachListDetails
  const isActive = tab === value

  const changeDirectionButton = () => onChangeDirection(value)
  return (
    <GradientDirectionList>
      <Button type="button" onClick={changeDirectionButton} isActive={isActive}>
        {displayText}
      </Button>
    </GradientDirectionList>
  )
}

export default GradientDirectionItem
