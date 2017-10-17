myApp.controller('Header', function ($scope, $rootScope, $location) {


  //$scope.init = function () {
  //  console.log("header init");
  //};
  $rootScope.menuButton = function () {
    console.log("proba");
    if ($rootScope.showMenu)
      $rootScope.showMenu = false;
    else
      $rootScope.showMenu = true;  
    };

});