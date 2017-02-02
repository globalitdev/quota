import {Template, Component} from 'ftw/lib'
import template from './create-task.jade'
import {Task} from '../../models/task'
import {Tag} from '../../models/tag'

import 'ftw/components/form-control/form-control'
import 'ftw/components/select/select'

@Component('ft')
@Template(template)
export default class CreateTask extends HTMLElement {
  created() {
    this.task = Task.create()
    this.statuses = [{title: 'test', _id: 1}]
  }
  save() {
    this.task.save().then(data=> {
      console.log('it says saved... ')
    })
  }
}
