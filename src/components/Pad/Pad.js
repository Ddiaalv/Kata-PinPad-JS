import { useEffect, useState } from 'react'
import { Key } from '../Key/Key'
import { Screen } from '../Screen/Screen'
import { PadStyled, Keys } from './Pad.styles'
import { hidePin, checkPinLenght } from './service/Pad'

export const Pad = () => {
  const [hiddenPin, setHiddenPin] = useState('')
  const [pinPressed, setPinPressed] = useState('')
  const keyValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    setHiddenPin(hidePin(pinPressed))
  }, [pinPressed])

  const getKeyValue = (event) => {
    setPinPressed(checkPinLenght(pinPressed, event.currentTarget.textContent))
  }

  return (
    <PadStyled>
      <Screen pinPressed={pinPressed} pinHidden={hiddenPin} pin={'111111'} />
      <Keys>
        {keyValues.map((value, index) => (
          <Key text={value} key={index} onclick={getKeyValue} />
        ))}
      </Keys>
    </PadStyled>
  )
}

Pad.displayName = 'Pad'
