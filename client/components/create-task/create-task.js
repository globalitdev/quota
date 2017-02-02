import {Template, Component} from 'ftw/lib'
import template from './create-task.jade'
import {Task} from '../../models/task'
import 'ftw/components/form-control/form-control'
import 'ftw/components/select/select'

@Component('ft')
@Template(template)
export default class CreateTask extends HTMLElement {
  created() {
    this.task = {}
    this.statuses = [{title: 'test', _id: 1}]
  }
}
