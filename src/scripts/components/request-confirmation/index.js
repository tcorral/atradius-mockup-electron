import RequestConfirmationController from './controllers/RequestConfirmationController';
import template from './templates/request-confirmation.html!text';

RequestConfirmationController.$inject = ['$state', '$stateParams', '$cookies', '$filter', '$locale', 'UsersService'];

export default {
  component: {
    name: 'requestConfirmation',
    component: {
      template,
      controller: RequestConfirmationController
    }
  }
};
