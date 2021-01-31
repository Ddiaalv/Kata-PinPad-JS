import { checkPinLenght, hidePin } from './Pad'

const pin = {
  values: ['12', '123', '1234', '123456'],
  hidden: ['*2', '**3', '***4', '*****6'],
}
describe('Check pin lenght', () => {
  test('should return true if pin lenght is lower than 4', () => {
    const pinLenght = checkPinLenght('1')
    expect(pinLenght).toBeTruthy()
  })
  test('should return keysPressed value if pin lenght is upper than 6', () => {
    const pinLenght = checkPinLenght('1234567')
    expect(pinLenght).toBe('1234567')
  })
})

describe('Pin hidden', () => {
  test('should not hide the last digit', () => {
    pin.values.forEach((pinValue, index) => {
      const hiddenPin = hidePin(pinValue)
      expect(hiddenPin).toBe(pin.hidden[index])
    })
  })

  test('should not hide the pin', () => {
    const hiddenPin = hidePin('1')
    expect(hiddenPin).toBe('1')
  })
})
