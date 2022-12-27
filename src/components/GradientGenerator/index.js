import {Component} from 'react'
import {
  AppContainer,
  Heading,
  Paragraph,
  ColorChangeContainer,
  ColorPick,
  ColorCode,
  Color,
  Button,
  UnorderedList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    leftColor: '#8ae323',
    rightColor: '#014f7b',
    leftBgColor: '#8ae323',
    rightBgColor: '#014f7b',
    tab: gradientDirectionsList[0].value,
  }

  changeColor = () => {
    const {leftColor, rightColor} = this.state
    this.setState({leftBgColor: leftColor, rightBgColor: rightColor})
  }

  changeLeftSideColor = event => {
    this.setState({leftColor: event.target.value})
  }

  changeRightSideColor = event => {
    this.setState({rightColor: event.target.value})
  }

  onChangeDirection = value => {
    this.setState({tab: value})
  }

  render() {
    const {leftColor, rightColor, leftBgColor, rightBgColor, tab} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        linearGradient={`to ${tab}, ${leftBgColor}, ${rightBgColor}`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(eachList => (
            <GradientDirectionItem
              eachListDetails={eachList}
              key={eachList.directionId}
              onChangeDirection={this.onChangeDirection}
              tab={tab}
            />
          ))}
        </UnorderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorChangeContainer>
          <ColorPick>
            <ColorCode>{leftColor}</ColorCode>

            <Color
              type="color"
              value={leftColor}
              onChange={this.changeLeftSideColor}
            />
          </ColorPick>
          <ColorPick>
            <ColorCode>{rightColor}</ColorCode>

            <Color
              type="color"
              value={rightColor}
              onChange={this.changeRightSideColor}
            />
          </ColorPick>
        </ColorChangeContainer>
        <Button type="button" onClick={this.changeColor}>
          Generate
        </Button>
      </AppContainer>
    )
  }
}

export default GradientGenerator
