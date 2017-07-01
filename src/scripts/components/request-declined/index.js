import RequestDeclinedController from './controllers/RequestDeclinedController';
import template from './templates/request-declined.html!text';

RequestDeclinedController.$inject = ['$state', '$cookies', '$stateParams'];

export default {
  component: {
    name: 'requestDeclined',
    component: {
      template,
      controller: RequestDeclinedController
    }
  }
};
