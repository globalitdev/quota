import {Component, Template, Attribute, Event} from 'ftw/lib'
import {Translation} from 'ftw/services/translation'
import template from './kanban.component.jade'

import {Task} from '../../models/task'
import {Tag} from '../../models/tag'

import _ from 'lodash'

global.Task = Task
global.Tag = Tag

@Component('ft')
@Template(template)
@Translation('kanban')
export default class Kanban extends HTMLElement {
  attached() {
    Tag.load().then(data => {
      this.tags = _.groupBy(data.tags, '_id')
      this.render()
    })
    Task.load().then(data => {
      this.groups = _.groupBy(data.tasks, 'status')
      this.render()
    })
    this.update()
  }
}
