import RequestProcessingController from './controllers/RequestProcessingController';
import template from './templates/request-processing.html!text';

RequestProcessingController.$inject = ['$state', '$cookies', '$stateParams', '$timeout'];

export default {
  component: {
    name: 'requestProcessing',
    component: {
      template,
      controller: RequestProcessingController
    }
  }
};
