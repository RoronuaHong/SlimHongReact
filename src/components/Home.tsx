import React from 'react'
import { createElement } from '../MyReact'

const element = createElement(
  'h1', 
  { id: 'title', class: 'hello' }, 
  'HelloWorld',
  createElement(
    'h2'
  )
)

console.log(element)

const Home: React.FC = () => {
  return (
    <div>123</div>
  )
}

export default Home
