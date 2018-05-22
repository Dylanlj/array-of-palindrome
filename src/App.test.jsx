import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Palindrome true is produced when "mom" is submitted', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  let event = {target: {value: "mom"}, preventDefault: () => {}};
  component.root.instance.handleQueryChange(event)
  component.root.instance.isPalindrome(event)
  tree = component.toJSON()
  expect(component.root.findByProps({className: "palindrome-answer true"}).children).toEqual([ 'mom', ' is a palindrome!' ])
})

test('Palindrome false is produced when "something" is submitted', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  let event = {target: {value: "something"}, preventDefault: () => {}};
  component.root.instance.handleQueryChange(event)
  component.root.instance.isPalindrome(event)
  tree = component.toJSON()
  expect(component.root.findByProps({className: "palindrome-answer false"}).children).toEqual([ 'something', ' is not a palindrome' ])
})

test('Palindrome false is produced when "m om" is submitted', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  let event = {target: {value: "m om"}, preventDefault: () => {}};
  component.root.instance.handleQueryChange(event)
  component.root.instance.isPalindrome(event)
  tree = component.toJSON()
  expect(component.root.findByProps({className: "palindrome-answer false"}).children).toEqual([ 'm om', ' is not a palindrome' ])
})

test('Palindrome true is produced when "   mom" is submitted', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  let event = {target: {value: "  mom"}, preventDefault: () => {}};
  component.root.instance.handleQueryChange(event)
  component.root.instance.isPalindrome(event)
  tree = component.toJSON()
  expect(component.root.findByProps({className: "palindrome-answer true"}).children).toEqual([ 'mom', ' is a palindrome!' ])
})
