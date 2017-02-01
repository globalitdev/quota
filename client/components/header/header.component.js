import {Component, Template, Attribute, Event} from 'ftw/lib'
import {Translation} from 'ftw/services/translation'
import template from './header.component.jade'

import auth from '../../services/auth'

import 'ftw/components/button/button'

@Component('ft')
@Template(template)
@Translation('header')
export default class Header extends HTMLElement {
  created() {
    auth.subscribe(user => {
      this.user = user
      this.render()
    })
  }
  login() {
    return auth.login()
  }
  logout() {
    return auth.logout()
  }
}
