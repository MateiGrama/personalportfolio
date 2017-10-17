myApp.controller('Homescreen', function ($scope, $rootScope, $location,$sce,preloader) {

 $scope.init = function () {
    console.log("homescreen init");
    //$scope.slide.active=false;
    /*var preloadDivs ="";
    for(var i=1;i<=14;i++)
      preloadDivs +="<div id='preload"+i+"'></div>";
    $scope.preloadImage=$sce.trustAsHtml(preloadDivs);*/

    $scope.imageLocations = [
          "images/matei.jpg",
          "images/carusel/electritracker.jpg",
          "images/carusel/linux.jpg",
          "images/carusel/hackaton.jpg",
          "images/carusel/rosef.jpg",
          "images/carusel/dartagnan.jpg",              
          ];

    if(!$rootScope.homescreenCached)
      $scope.loading=true;
    var enoughLoad = false;
    setTimeout(function(){enoughLoad=true;},3000);
    preloader.preloadImages( $scope.imageLocations )
      .then( function x() {
            // Loading was successful.
            if(enoughLoad){
              $scope.loading =false;
              $rootScope.homescreenCached=true;
              //$scope.slide.active=true;
              window.scrollTo(0, 0);
              $scope.$apply();

            }
            else
              setTimeout(x,500);
           },
            function() {
            // Loading failed on at least one image.
            console.log("failed preloader");
          });

/*    var timer = setTimeout(function() {
                            console.log("loadingHome");
                            $scope.loading =false;
                            $rootScope.homescreenCached=true;
                            $scope.$apply(); 
                          }, 5000);*/
 };
 $scope.myInterval = 4000;
 $scope.slides = [
     {
       id:1,
       mainText: "Mobile Applications",
       text: 'Cross platform apps created using ApacheCordova and Xamarin',
       image: '../images/carusel/dartagnan.jpg'
     },
     {
       id: 2,
       mainText: 'IoT Projects',
       text: 'Solutions developed using Arduino, Raspberry Pi and Udoo boards',
       image: '../images/carusel/linux.jpg'
     },
     {
       id: 3,
       mainText: 'Hackaton Projects',
       text: 'Projects developed during programming contests',
       image: '../images/carusel/hackaton.jpg'
     },
     {
       id: 4,
       mainText: 'GPS Traking Systems',
       text: "Cloud based GPS monitroing solutions using devices' geolocation data",
       image: '../images/carusel/electritracker.jpg'
     },
     {
       id: 5,
       mainText: 'Reserch Projects',
       text: 'Analyzing gait parameter to detect eventual correlations to mental problems',
       image: '../images/carusel/rosef.jpg'
     }
 ];
});
