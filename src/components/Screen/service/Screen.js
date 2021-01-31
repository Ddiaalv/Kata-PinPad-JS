export const getPinStatusMessage = (pin, pinPressed) => {
  let statusMessage = ''
  pin === pinPressed ? (statusMessage = 'CORRECT') : (statusMessage = 'ERROR')
  return statusMessage
}
