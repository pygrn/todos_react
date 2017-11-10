import React from 'react'
import Row from '../components/Row'
import renderer from 'react-test-renderer'


const row = {
    pk: 1,
    description: 'Todo 1',
    due_date: '2017-11-08T21:01:35Z'
}

test('Row', () => {
    const component = renderer.create(<Row todo={row}/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})