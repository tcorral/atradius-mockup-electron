class RequestProcessingController {
  constructor($state, $cookies, $stateParams, $timeout) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$cookies = $cookies;
    this.$timeout = $timeout;
    this.model = $stateParams.model;
  }

  $onInit() {
    this.language = this.$cookies.get('atr-language');
    this.process = this.$stateParams.process;
    this.$timeout(() => {
      if (this.process === 'approved') {
        this.requestApproved();
      } else if (this.process === 'denied') {
        this.requestDeclined();
      }
    }, 2000);
  }

  requestApproved() {
    this.$state.go('requestApproved', { model: this.model, process: this.process });
  }

  requestDeclined() {
    this.$state.go('requestDeclined', { model: this.model, process: this.process });
  }

  navigateToManualProcess() {
    this.$state.go('manualProcess', { model: this.model, process: this.process });
  }
}

export default RequestProcessingController;
