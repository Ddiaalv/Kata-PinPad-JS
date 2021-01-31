import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pad } from './Pad'

describe('Screen component UI testing', () => {
  test('should display the value "1" on the screen', () => {
    const { getByTestId, getByRole } = render(<Pad />)
    const keyButton = getByRole('button', {
      name: /1/i,
    })
    userEvent.click(keyButton)
    const pinPadScreen = getByTestId('padScreen')
    expect(pinPadScreen.textContent).toBe('1')
  })
  const numberOfClicks = 6
  test('should display the "CORRECT" message on the screen', () => {
    const { getByRole, getByTestId } = render(<Pad />)
    for (let index = 1; index <= numberOfClicks; index++) {
      const keyButton = getByRole('button', {
        name: /1/i,
      })
      userEvent.click(keyButton)
    }
    const pinPadScreen = getByTestId('padScreen')
    expect(pinPadScreen.textContent).toBe('CORRECT')
  })
  test('should display the "ERROR" message on the screen', () => {
    const { getByRole, getByTestId } = render(<Pad />)
    for (let index = 1; index <= numberOfClicks; index++) {
      const keyButton = getByRole('button', {
        name: index,
      })
      userEvent.click(keyButton)
    }
    const pinPadScreen = getByTestId('padScreen')
    expect(pinPadScreen.textContent).toBe('ERROR')
  })
})
