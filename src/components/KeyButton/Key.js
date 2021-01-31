import { KeyStyled } from './Key.styles'

export const Key = ({ text, onclick }) => (
  <KeyStyled role={'button'} onClick={onclick}>
    {text}
  </KeyStyled>
)

Key.displayName = 'KeyButton'
