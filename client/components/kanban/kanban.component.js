import {Component, Template, Attribute, Event} from 'ftw/lib'
import {Translation} from 'ftw/services/translation'
import template from './kanban.component.jade'

@Component('ft')
@Template(template)
@Translation('kanban')
export default class Kanban extends HTMLElement {

}
