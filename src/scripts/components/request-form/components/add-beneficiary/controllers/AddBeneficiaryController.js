import EventBus from 'krasimir/EventBus';

class AddBeneficiaryController {
  constructor(AvailableBeneficiariesService, UsersService) {
    const $ctrl = this;
    $ctrl.AvailableBeneficiariesService = AvailableBeneficiariesService;
    $ctrl.UsersService = UsersService;
    $ctrl.$uibModalInstance = null;
    $ctrl.beneficiaryModel = {
      name: null,
      address: null,
      zipCode: null,
      city: null,
      province: null,
      countryCode: null,
      fiscalCode: null
    };
    $ctrl.beneficiaryUsage = 'available';
  }

  $onInit() {
    EventBus.addEventListener('uibModalInstance:set', (event) => {
      const data = event.target;
      this.$uibModalInstance = data;
    });
    EventBus.dispatch('uibModalInstance:get');

    this.AvailableBeneficiariesService
      .get()
      .then((availableBeneficiaries) => {
        this.availableBeneficiaries = availableBeneficiaries;
      });
  }

  getClasses(fieldName, form) {
    return {
      'has-success': form[fieldName].$valid && !form[fieldName].$pristine,
      'has-error': form[fieldName].$invalid && !form[fieldName].$pristine
    };
  }

  useBeneficiary(type) {
    this.beneficiaryUsage = type;
  }

  addBeneficiary() {
    if (this.beneficiaryUsage === 'available') {
      this.UsersService.addBeneficiary(this.selectedBeneficiary);
    } else if (this.beneficiaryUsage === 'new') {
      this.UsersService.addBeneficiary(this.beneficiaryModel);
    } else {
      console.error('Unknown beneficiary usage');
    }

    this.close();
  }

  close() {
    this.$uibModalInstance.dismiss();
  }
}

export default AddBeneficiaryController;
