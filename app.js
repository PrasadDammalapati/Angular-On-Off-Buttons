var app = angular.module('myApp', ['uiSwitch']);

app.controller('controller', function($scope, myservice) {
  $scope.model = myservice.model;
  
});

app.service('myservice', function () {
  
  this.model = {
    enabled: false
  }
}); 