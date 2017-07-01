class RequestDeclinedController {
  constructor($log, $cookies, $stateParams) {
    this.$log = $log;
    this.$cookies = $cookies;
    this.$stateParams = $stateParams;
  }
  $onInit() {
    this.language = this.$cookies.get('atr-language');
    this.process = this.$stateParams.process;
    this.$log.log('Hello from RequestDeclinedController');
  }
}

export default RequestDeclinedController;
