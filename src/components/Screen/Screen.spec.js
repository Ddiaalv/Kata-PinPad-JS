import { render } from '@testing-library/react'
import { Screen } from './Screen'
describe('Screen component UI testing', () => {
  let pinPressed = '111111'
  const pinHidden = '*****1'
  const pin = '111111'
  test('should display CORRECT message when pin is valid', () => {
    const { queryByText } = render(
      <Screen pinPressed={pinPressed} pinHidden={pinHidden} pin={pin} />
    )
    const linkElement = queryByText('CORRECT')
    expect(linkElement).toBeTruthy()
  })
  test('should display ERROR message when pin is invalid', () => {
    pinPressed = '121212'
    const { queryByText } = render(
      <Screen pinPressed={pinPressed} pinHidden={pinHidden} pin={pin} />
    )
    const linkElement = queryByText('ERROR')
    expect(linkElement).toBeTruthy()
  })
})
