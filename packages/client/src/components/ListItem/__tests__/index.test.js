import React from 'react'
import ListItem from '..'
import renderer from 'react-test-renderer'

describe('ListItem', () => {
  it('should render in read only form', () => {
    const testRenderer = renderer.create(<ListItem filename="someFileName" />)
    const testInstance = testRenderer.root
    expect(testInstance.findByProps({ className: 'itemLabel' }).type).toBe('div')
  })
})
