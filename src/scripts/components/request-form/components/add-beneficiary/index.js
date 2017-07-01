import AddBeneficiaryController from './controllers/AddBeneficiaryController';
import template from './templates/add-beneficiary.html!text';

import AvailableBeneficiariesService from './services/AvailableBeneficiariesService';

AddBeneficiaryController.$inject = ['AvailableBeneficiariesService', 'UsersService'];

AvailableBeneficiariesService.$inject = ['$q'];

export default {
  component: {
    name: 'addBeneficiary',
    component: {
      template,
      controller: AddBeneficiaryController
    },
    services: {
      AvailableBeneficiariesService
    }
  }
};
