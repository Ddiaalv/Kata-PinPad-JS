import { render } from '@testing-library/react'
import { Key } from './Key'

test('should render the key component', () => {
  const { queryByText } = render(<Key text={'1'} />)
  const linkElement = queryByText('1')
  expect(linkElement).toBeTruthy()
})
test('should render 9 keys with diferent values', () => {
  const keyValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  keyValues.forEach((value) => {
    const { queryByText } = render(<Key text={value} />)
    const linkElement = queryByText(value)
    expect(linkElement).toBeTruthy()
  })
})
