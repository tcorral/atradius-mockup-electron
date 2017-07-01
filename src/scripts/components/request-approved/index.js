import RequestApprovedController from './controllers/RequestApprovedController';
import template from './templates/request-approved.html!text';

RequestApprovedController.$inject = ['$cookies', '$filter', '$stateParams', 'UsersService'];

export default {
  component: {
    name: 'requestApproved',
    component: {
      template,
      controller: RequestApprovedController
    }
  }
};
