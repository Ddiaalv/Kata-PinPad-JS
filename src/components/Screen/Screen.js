import { ScreenStyled } from './Screen.styles'
import { getPinStatusMessage } from './service/Screen'

export const Screen = ({ pinPressed, pinHidden, pin }) =>
  pinPressed.length === 6 ? (
    <ScreenStyled data-testid={'padScreen'}>
      {getPinStatusMessage(pin, pinPressed)}
    </ScreenStyled>
  ) : (
    <ScreenStyled data-testid={'padScreen'}>{pinHidden}</ScreenStyled>
  )
