import 'Assets/styles/scss/styles'
import 'Assets/styles/css/st'
import insert from './js/insertBg'
import './test/typescripy'
import { multiply } from 'Utilities/utilities'
import reactDom from 'react-dom'
console.log(multiply(1, 5))
// insert();

const foo = () => console.log('object')
foo()

const foo2 = async () => await Promise.resolve('asd')
foo2()

class U {
  static id = Date.now()
}
console.log('U', U.id)

import React from 'react'
import ReactDOM from 'react-dom'
import SectionComponent from './test/react'
ReactDOM.render(<SectionComponent />, document.getElementById('root'))
