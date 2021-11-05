import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HelloMsg extends Component {
  get greeting() {
    return this.args.greeting ?? 'yo';
  }

  get message() {
    return this.args.greeting + ', ' + this.args.msg;
  }

  @action
  changeGreeting() {
    this.args.updateGreeting('howdy');
  }
}
