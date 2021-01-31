export const checkPinLenght = (keysPressed, userKeyPressed) =>
  keysPressed.length < 6 ? (keysPressed += userKeyPressed) : keysPressed

export const hidePin = (userPin) => {
  let hiddenPin = ''
  const symbolToHide = '*'
  for (let index = 0; index < userPin.length; index++) {
    const ifItsNotTheLastCharacter = index < userPin.length - 1
    ifItsNotTheLastCharacter
      ? (hiddenPin += symbolToHide)
      : (hiddenPin += userPin[index])
  }
  return hiddenPin
}
