class RequestConfirmationController {
  constructor($state, $stateParams, $cookies, $filter, $locale, UsersService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$cookies = $cookies;
    this.$locale = $locale;
    this.UsersService = UsersService
    this.user = this.UsersService.getCurrentUser();
    this.model = $stateParams.model || { customer: {}, beneficiary: {} };
    this.requestModel = {
      customer: {
        type: 'Customer'
      },
      beneficiary: {
        type: 'Beneficiary'
      },
      bondData: {
        type: 'Bond data'
      }
    };

    if (this.user.bond.revolving) {
      this.revolvingBond = $filter('translate')('Yes');
    } else {
      this.revolvingBond = $filter('translate')('No');
    }

    this.requestModel.customer[$filter('translate')('Name')] = this.user.company.name;
    this.requestModel.customer[$filter('translate')('Legal Headquarter')] = `${this.user.company.address}, ${this.user.company.zipCode} ${this.user.company.city}`;
    this.requestModel.customer[$filter('translate')('Citizenship')] = this.user.company.countryCode;
    this.requestModel.customer[$filter('translate')('Fiscal Code/VAT Number')] = this.user.company.fiscalCode;

    this.requestModel.beneficiary[$filter('translate')('Name')] = this.model.beneficiary.name;
    this.requestModel.beneficiary[$filter('translate')('Legal Headquarter')] = `${this.model.beneficiary.address}, ${this.model.beneficiary.zipCode} ${this.model.beneficiary.city}`;
    this.requestModel.beneficiary[$filter('translate')('Citizenship')] = this.model.beneficiary.countryCode;
    this.requestModel.beneficiary[$filter('translate')('Fiscal Code/VAT Number')] = this.model.beneficiary.fiscalCode;

    this.requestModel.bondData[$filter('translate')('Bond Class')] = this.model.bondClass.name;
    this.requestModel.bondData[$filter('translate')('Bond Class Code')] = this.model.bondClass.code;
    this.requestModel.bondData[$filter('translate')('Bond Type')] = this.model.bondType.name;
    this.requestModel.bondData[$filter('translate')('Bond Type Code')] = this.model.bondType.code;
    this.requestModel.bondData[$filter('translate')('Risk')] = this.model.bondRisk.name;
    this.requestModel.bondData[$filter('translate')('Risk Code')] = this.model.bondRisk.code;
    this.requestModel.bondData[$filter('translate')('Effective Date')] = $filter('date')(this.model.effectiveDate);
    this.requestModel.bondData[$filter('translate')('Expiration Date')] = $filter('date')(this.model.expirationDate);
    this.requestModel.bondData[$filter('translate')('Bond Amount')] = $filter('currency')(this.model.amount);
    this.requestModel.bondData[$filter('translate')('To be extended')] = this.revolvingBond;
  }

  $onInit() {
    this.language = this.$cookies.get('atr-language');
    console.log(this.$locale);
    this.process = this.$stateParams.process;
  }

  goBack() {
    this.$state.go('requestForm', { model: this.model, process: this.process });
  }

  sendRequest() {
    this.$state.go('requestProcessing', { model: this.model, process: this.process });
  }
}

export default RequestConfirmationController;
