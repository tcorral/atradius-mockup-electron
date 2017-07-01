import languages from '../translations/index';

function config($locationProvider, $stateProvider, $translateProvider, $urlRouterProvider, localStorageServiceProvider, tmhDynamicLocaleProvider) {
    // Define states
  const languageKeys = [];
  const states = [
    {
      name: 'requestApproved',
      url: '/request-approved/:process',
      component: 'requestApproved',
      params: { model: null }
    },
    {
      name: 'requestConfirmation',
      url: '/request-confirmation/:process',
      component: 'requestConfirmation',
      params: { model: null }
    },
    {
      name: 'requestDeclined',
      url: '/request-declined/:process',
      component: 'requestDeclined',
      params: { model: null }
    },
    {
      name: 'home',
      url: '/home',
      component: 'requestForm',
      params: { model: null }
    },
    {
      name: 'requestForm',
      url: '/home/:process',
      component: 'requestForm',
      params: { model: null }
    },
    {
      name: 'requestProcessing',
      url: '/request-processing/:process',
      component: 'requestProcessing',
      params: { model: null }
    },
    {
      name: 'manualProcess',
      url: '/manual-approval/:process',
      component: 'requestProcessing',  // This component should be a new one.
      params: { model: null }
    }
  ];

  // Add each state to the stateProvider
  states.forEach((state) => {
    $stateProvider.state(state);
  });

  // Enable HTML5
  $locationProvider.html5Mode(true);

  // Navigate to default path
  $urlRouterProvider.otherwise('/home');

  // Configure translations
  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      $translateProvider.translations(key, languages[key]);
      languageKeys.push(key);
    }
  }

  $translateProvider.registerAvailableLanguageKeys(languageKeys);
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.preferredLanguage('en_US');

  tmhDynamicLocaleProvider.localeLocationPattern('jspm_packages/github/angular/bower-angular-i18n@1.6.4/angular-locale_{{locale.replace("_","-").toLowerCase()}}.js');
}

export default config;
