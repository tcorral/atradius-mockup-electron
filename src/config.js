System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.4",
    "angular-animate": "github:angular/bower-angular-animate@1.6.4",
    "angular-cookies": "github:angular/bower-angular-cookies@1.6.4",
    "angular-local-storage": "npm:angular-local-storage@0.6.0",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.4",
    "angular-touch": "github:angular/bower-angular-touch@1.6.4",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.15.1",
    "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.15.1",
    "angular-ui-bootstrap": "npm:angular-ui-bootstrap@2.5.0",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@1.0.4",
    "angular/bower-angular-i18n": "github:angular/bower-angular-i18n@1.6.4",
    "assisrafael/angular-input-masks": "github:assisrafael/angular-input-masks@2.6.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "br-validations": "npm:br-validations@0.3.1",
    "core-js": "npm:core-js@1.2.7",
    "danialfarid/ng-file-upload": "github:danialfarid/ng-file-upload@12.2.13",
    "insin/validators": "github:insin/validators@0.3.1",
    "jquery": "npm:jquery@3.2.1",
    "json": "github:systemjs/plugin-json@0.3.0",
    "krasimir/EventBus": "github:krasimir/EventBus@master",
    "lgalfaso/angular-dynamic-locale": "github:lgalfaso/angular-dynamic-locale@0.1.32",
    "moment": "npm:moment@2.18.1",
    "nervgh/angular-file-upload": "github:nervgh/angular-file-upload@2.2.0",
    "pdfmake": "github:bpampuch/pdfmake@0.1.31",
    "string-mask": "npm:string-mask@0.3.0",
    "text": "github:systemjs/plugin-text@0.0.11",
    "github:angular-translate/bower-angular-translate-loader-static-files@2.15.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.15.1"
    },
    "github:angular-translate/bower-angular-translate@2.15.1": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-animate@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-cookies@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-sanitize@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:angular/bower-angular-touch@1.6.4": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:lgalfaso/angular-dynamic-locale@0.1.32": {
      "angular": "github:angular/bower-angular@1.6.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:br-validations@0.3.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:string-mask@0.3.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
