import angular from 'angular';
import 'angular-animate';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-translate';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-local-storage';
import 'nervgh/angular-file-upload';
import 'lgalfaso/angular-dynamic-locale';

// Helper functions
import Utils from './utils/index';

// Angular basic elements
import config from './config/index';
import RequestBondController from './controllers/RequestBondController';

// Angular components
import requestApprovedComponent from './components/request-approved/index';
import requestConfirmationComponent from './components/request-confirmation/index';
import requestDeclinedComponent from './components/request-declined/index';
import requestFormComponent from './components/request-form/index';
import requestProcessingComponent from './components/request-processing/index';

// Angular services
import UsersService from './services/UsersService';

// Angular directives
import currencyFormat from './directives/currencyFormat';

const appModuleName = 'requestBondApp';
const deps = [
  'pascalprecht.translate',
  'ui.bootstrap',
  'ngSanitize',
  'ui.router',
  'angularFileUpload',
  'tmh.dynamicLocale',
  'ngCookies',
  'LocalStorageModule'
];

// Explicit dependency injection
config.$inject = ['$locationProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider', 'localStorageServiceProvider', 'tmhDynamicLocaleProvider'];
RequestBondController.$inject = ['$log', '$scope', '$transitions', '$translate', '$cookies', '$locale', '$state', 'tmhDynamicLocale', 'UsersService'];
UsersService.$inject = ['$cookies', '$q'];
currencyFormat.$inject = ['$filter'];

// Setup app module
const appModule = angular
                  .module(appModuleName, deps)
                  .config(config)
                  .controller('RequestBondController', RequestBondController)
                  .service('UsersService', UsersService)
                  .directive('currencyFormat', currencyFormat);

// Adding the component to the app module
Utils.addComponentsRecursive(appModule, [
  requestApprovedComponent,
  requestConfirmationComponent,
  requestDeclinedComponent,
  requestFormComponent,
  requestProcessingComponent
]);

// Bootstrap the application to body
angular.bootstrap(document.body, [appModuleName]);
