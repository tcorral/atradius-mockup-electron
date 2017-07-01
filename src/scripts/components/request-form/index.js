import RequestFormController from './controllers/RequestFormController';
import template from './templates/request-form.html!text';

import BeneficiariesService from './services/BeneficiariesService';
import BondTypeService from './services/BondTypeService';

import addBeneficiary from './components/add-beneficiary/index';

RequestFormController.$inject = ['$state', '$uibModal', '$cookies', '$stateParams', '$locale', '$filter', 'FileUploader', 'BeneficiariesService', 'BondTypeService', 'UsersService'];

BeneficiariesService.$inject = ['$q'];
BondTypeService.$inject = ['$q'];

export default {
  component: {
    name: 'requestForm',
    component: {
      template,
      controller: RequestFormController
    },
    subcomponents: [
      addBeneficiary
    ],
    services: {
      BeneficiariesService,
      BondTypeService
    }
  }
};
