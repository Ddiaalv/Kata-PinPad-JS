---
to: components/<%= path %>/<%= name %>/<%= name %>.js
---
import { <%= name %>Styled } from './<%= name %>.styles'

export const <%= name %> = () => <<%= name %>Styled> Hello from <%= name %>! </<%= name %>Styled>

<%= name %>.displayName = '<%= name %>'
