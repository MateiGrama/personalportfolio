myApp.controller('Menu', function ($scope, $rootScope, $location) {


  $scope.init = function () {
    console.log("menu init");
  };
  $scope.send= function(where){
    //console.log(where);
    $location.path(where);
    $rootScope.showMenu = false;
  };

});