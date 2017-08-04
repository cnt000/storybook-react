import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

it('renders correctly a Button type size', () => {
  const tree = renderer.create(
    <Button type={'size'} onClick={alert('clicked')}>{'42'}</Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})