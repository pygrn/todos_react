import React from 'react'
import List from '../components/List'
import renderer from 'react-test-renderer'

jest.mock('../lib/apiclient')

test('List', () => {
    const component = renderer.create(<List/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})