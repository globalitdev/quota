import {Component, Template, Attribute, Event} from 'ftw/lib'
import {Translation} from 'ftw/services/translation'
import template from './task-item.component.jade'
import { Task } from '../../models/task'
import 'ftw/components/icons/icons'
import 'ftw/components/select/select'

@Component('ft')
@Template(template)
@Translation('task_item')
@Attribute('task', Task)
export default class TaskItem extends HTMLElement {

   attached(){
     this.custom = 'feature'
   }


   get dunnoValue() {
      return this.custom
   }
}
