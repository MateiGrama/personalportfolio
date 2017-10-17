myApp.controller('About', function ($scope, $rootScope, $location,$window) {


  $scope.init = function () {
    window.scrollTo(0, 0);
    $scope.education = false;
    $scope.experience = false;
    $scope.courses = false;
    $scope.awards = false;
    $scope.hobbies = false;
    $scope.expandAllButton = [];
    $scope.expandAllButton = ['Expand all','Close all'];

    if(!$rootScope.aboutCached)
      $scope.loading=true;
    var timer = setTimeout(function() {$scope.loading =false;$rootScope.aboutCached=true;$scope.$apply();window.scrollTo(0, 0);} , 3000);


  };

  //$scope.switch = function (param) {
  //  console.log("click: " + param);
  //  if (param) 
  //    return false;
  //  else
  //    return true;
  //}

});