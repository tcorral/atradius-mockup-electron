import EventBus from 'krasimir/EventBus';

class RequestBondController {
  constructor($log, $scope, $transitions, $translate, $cookies, $locale, $state, tmhDynamicLocale, UsersService) {
    this.$log = $log;
    this.$scope = $scope;
    this.tmhDynamicLocale = tmhDynamicLocale;
    this.$translate = $translate;
    this.$transitions = $transitions;
    this.$cookies = $cookies;
    this.$locale = $locale;
    this.$state = $state;
    this.UsersService = UsersService;
    this.currentLanguage = null;
    this.viewContentLoaded = false;
  }

  $onInit() {
    const language = this.$cookies.get('atr-language') || this.$translate.proposedLanguage();
    this.$translate.use(language);
    this.currentLanguage = language;
    this.$transitions.onStart({}, (transition) => {
      const identifier = transition.targetState().identifier();
      const modelParam = transition.targetState().params().model;

      // No model state param, go to home
      if (identifier !== 'home' && identifier.name !== 'home' && (typeof modelParam === 'undefined' || modelParam === '' || modelParam === null)) {
        this.$log.error(`Could not find state param 'model' when transitioning to page ${identifier}`);
        return this.$state.target('home');
      }

      return this.$log.log(`Transitioning to ${identifier}`);
    });

    this.$scope.$on('$viewContentLoaded', () => {
      this.viewContentLoaded = true;
    });
    this.changeLanguage(this.currentLanguage);
  }

  changeLanguage(lang) {
    this.$cookies.put('atr-language', lang);
    this.$translate.use(lang);
    this.currentLanguage = this.$translate.proposedLanguage();
    this.tmhDynamicLocale.set(this.currentLanguage);
    console.log(this.$locale);
    window.showLocale = () => {
      console.log(this.$locale);
    };

    this.UsersService.switchUser(lang);

    EventBus.dispatch('language:set', this.currentLanguage);
    EventBus.dispatch('locale:set', this.$locale);
  }

  getMainLanguageKey(key) {
    let mainKey = key;
    if (key.length > 2) {
      mainKey = key.substr(3);
    }
    return mainKey;
  }
}

export default RequestBondController;
