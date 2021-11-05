import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  greeting = 'hello';

  @action
  updateGreeting(value) {
    this.greeting = value;
  }
}
