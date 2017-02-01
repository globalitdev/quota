// Import necessary decorators
import {Component, Template, Attribute} from 'ftw/lib'
// Import Translation decorator
import {Translation} from 'ftw/services/translation'
// Import the template file
import template from './hello-world.component.jade'
import 'ftw/components/form-control/form-control'

import auth from '../../services/auth'

// Set component namespace (<ft-hello-world></ft-hello-world>)
@Component('ft')
// Tell component to use the template
@Template(template)
@Attribute('name', String)
@Translation('hello_world')
/*
* Tell babel what to export.
* Class name is used as tag name.
* All components must extend from HTMLElement
*/
export default class HelloWorld extends HTMLElement {
  created() {
    const name = this.name
    auth.subscribe(user => {
      this.name = user ? user.nickname : name
      this.render()
    })
  }
  matches(value, name) {
    this.match = value === name
    this.render()
  }
}
