import { getPinStatusMessage } from './Screen'

describe('Get pin status message', () => {
  const pin = '111111'
  const incorrectPin = '111222'
  test('should display "CORRECT" as message', () => {
    const pinStatusMessage = getPinStatusMessage(pin, pin)
    expect(pinStatusMessage).toBe('CORRECT')
  })
  test('should display "ERROR" as message', () => {
    const pinStatusMessage = getPinStatusMessage(pin, incorrectPin)
    expect(pinStatusMessage).toBe('ERROR')
  })
})
