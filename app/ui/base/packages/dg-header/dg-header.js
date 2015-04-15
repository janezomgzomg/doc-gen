angular.module('dg.packages')
.directive('dgHeader', function(){
  return{
    restrict: 'E',
    scope: {},
    controllerAs: 'header',
    templateUrl : 'dg-header.html',
    bindToController: true,
    controller: function(){
      console.log('inside dg-header');
    }
  };
});
