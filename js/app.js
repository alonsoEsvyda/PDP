var app = angular
      .module("AppHome", [])
      .controller("HomeController", HomeController);


HomeController.$inject = ["$scope", "$http","$timeout","jsonFactorie"];

function HomeController($scope,$http,$timeout,jsonFactorie){

  var ctrl = this;
  
  ctrl.init = function() {
  };
    
  $timeout(ctrl.init);

}