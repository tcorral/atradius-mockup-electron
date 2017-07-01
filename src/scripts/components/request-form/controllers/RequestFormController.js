import EventBus from 'krasimir/EventBus';
import moment from 'moment';
import addBeneficiary from '../components/add-beneficiary/index';

const progressColorBar = {
  success: [0, 40],
  warning: [40, 80],
  danger: [80, 100]
};

class RequestFormController {
  constructor($state, $uibModal, $cookies, $stateParams, $locale, $filter, FileUploader, BeneficiariesService, BondTypeService, UsersService) {
    const $ctrl = this;
    $ctrl.$state = $state;
    $ctrl.$uibModal = $uibModal;
    $ctrl.$cookies = $cookies;
    $ctrl.$locale = $locale;
    $ctrl.$filter = $filter;
    $ctrl.$stateParams = $stateParams;
    $ctrl.BeneficiariesService = BeneficiariesService;
    $ctrl.BondTypeService = BondTypeService;
    $ctrl.UsersService = UsersService;
    $ctrl.$uibModalInstance = null;
    $ctrl.filteredAmount = null;
    $ctrl.user = this.UsersService.getCurrentUser();
    $ctrl.fields = {
      bondTypes: [],
      beneficiaries: []
    };
    $ctrl.policy = {
      credit: {
        total: 10000000,
        left: 4000000
      }
    };
    $ctrl.isPolicyOpen = false;
    // TODO: Sync defaultModel with User model
    $ctrl.defaultModel = {
      policy: {
        id: 18387475758,
        expirationDate: moment(new Date()).add(543, 'days').format('LL')
      },
      customer: {
        id: 293939,
        logo: 'vianini-logo.jpg',
        name: 'Vianini Lavori S.P.A.',
        legalHeadquarter: 'Some headquarter',
        citizenship: 'ITA',
        fiscalCode: '03873930584'
      },
      bondClass: {
        name: 'Contract',
        code: 'A'
      },
      bondType: null,
      bondRisk: null,
      beneficiary: '',
      effectiveDate: null,
      expirationDate: null,
      duration: null,
      amount: null,
      documents: []
    };
    $ctrl.model = $stateParams.model || this.defaultModel;
    $ctrl.datepickerOptions = {
      effectiveDate: {
        minDate: new Date()
      },
      expirationDate: {
        minDate: new Date()
      }
    };

    $ctrl.FileUploader = FileUploader;
  }

  $onInit() {
    const $ctrl = this;
    const FileUploader = $ctrl.FileUploader;
    $ctrl.language = this.$cookies.get('atr-language');
    $ctrl.process = this.$stateParams.process;
    $ctrl.BeneficiariesService
              .get()
              .then((beneficiaries) => {
                this.fields.beneficiaries = beneficiaries;
              });

    $ctrl.BondTypeService
              .get()
              .then((bondTypes) => {
                this.fields.bondTypes = bondTypes;
              });

    $ctrl.uploader = new FileUploader({
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    });

    $ctrl.uploader.onCompleteItem = (item) => {
      this.model.documents.push(item.file);
    };

    EventBus.addEventListener('uibModalInstance:get', () => {
      EventBus.dispatch('uibModalInstance:set', this.$uibModalInstance);
    });

    EventBus.addEventListener('language:set', (event) => {
      const data = event.target;
      this.language = data;
      this.user = this.UsersService.getCurrentUser();
    });

    EventBus.dispatch('locale:set', this.$locale);
  }

  getLeftCreditPlusAmount() {
    return ((this.user.policy.credit.left + (this.model.amount || 0)));
  }

  getPercentagePolicyCredit() {
    const credit = this.user.policy.credit;

    return Math.floor((this.getLeftCreditPlusAmount() / credit.limit) * 100);
  }

  getProgressbarColor() {
    const percentage = this.getPercentagePolicyCredit();
    let colorType = 'danger';
    let range;

    for (const color in progressColorBar) {
      if (progressColorBar.hasOwnProperty(color)) {
        range = progressColorBar[color];
        if (percentage >= range[0] && percentage <= range[1]) {
          colorType = color;
          break;
        }
      }
    }

    return colorType;
  }

  getClasses(fieldName, form) {
    return {
      'has-success': form[fieldName].$valid && !form[fieldName].$pristine,
      'has-error': form[fieldName].$invalid && !form[fieldName].$pristine
    };
  }

  setSelectedBondType(value) {
    console.log(value);
  }

  openAddBeneficiaryModal() {
    this.$uibModalInstance = this.$uibModal.open({
      component: addBeneficiary.component.name
    });
  }

  requestBond() {
    this.$state.go('requestConfirmation', { model: this.model, process: this.process || 'approved' });
  }

  updateDuration() {
    const effectiveDate = this.model.effectiveDate;
    const expirationDate = this.model.expirationDate;
    let start;
    let end;
    if (effectiveDate) {
      const startDate = new Date(effectiveDate);
      start = moment([startDate.getFullYear(), startDate.getMonth(), startDate.getDate()]);
      this.datepickerOptions.expirationDate.minDate = moment(startDate).add(1, 'day').toDate();
    }
    if (expirationDate) {
      const endDate = new Date(expirationDate);
      end = moment([endDate.getFullYear(), endDate.getMonth(), endDate.getDate()]);
    }

    if (effectiveDate && expirationDate) {
      this.model.duration = end.diff(start, 'days');

      if (this.model.duration === 1) {
        this.model.durationText = `${this.model.duration} ${this.$filter('translate')('day')}`;
      } else if (this.model.duration > 1) {
        this.model.durationText = `${this.model.duration} ${this.$filter('translate')('days')}`;
      }
    }
  }

  getTodayDate() {
    return new Date();
  }

  getDateEffectiveDate() {
    return new Date(this.model.effectiveDate);
  }

  updateAmount() {
    EventBus.dispatch('locale:set', this.$locale);
    const amount = parseInt(this.filteredAmount.replace(new RegExp(`\\${this.$locale.NUMBER_FORMATS.GROUP_SEP}`, 'g'), ''), 10);
    this.model.amount = amount;
  }
}

export default RequestFormController;
