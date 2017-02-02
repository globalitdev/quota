import {Template, Component} from 'ftw/lib'
import template from './task-list.jade'
import {Task} from '../../models/task'

import 'ftw/components/select/select'

@Component('ft')
@Template(template)
export default class TaskList extends HTMLElement {
  attached() {
    this.update(Task.load())
  }
}
