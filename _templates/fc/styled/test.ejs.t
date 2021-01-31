---
to: components/<%= path %>/<%= name %>/<%= name %>.spec.js
---
import { render } from '@testing-library/react'
import { <%= name %> } from './<%= name %>'

test('should display the default message', () => {
  const { getByText } = render(<<%= name %> />)
  const linkElement = getByText('Hello from <%= name %>!')
  expect(linkElement).toBeTruthy()
})
