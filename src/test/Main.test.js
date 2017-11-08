import React from 'react'
import Main from '../components/Main'
import renderer from 'react-test-renderer'

test('Main', () => {
    const component = renderer.create(<Main/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})