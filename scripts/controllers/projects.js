myApp.controller('Projects', function ($scope, $rootScope, $location,$window,$sce,preloader) {

  $scope.projectData  = [];
    $scope.projectData = [
            { 
             title:"ITM&LC",
             shortDescription:"Abreviation stands for : Intelligent Traffic Monitor and Lights Control. A pretty explicit title.",
             description:"Intelligent Traffic Monitor and Lights Control is an embedded project focused on optimizing the traffic. There are two main functionalities of the system: the first one involves making a speed radar using two sensors placed before the intersection. If the speed of a car is to high the camera is triggered. The second part is an intelligent light control system that enables us to minimize the time spent waiting, by using an algorithm to make the time while green light is on proportional to the number of cars that are waiting.",
             setUp:"We used an Udoo Quad board, Force resitive sensors, LEDs and the Udoo camera to set up the simulation of the crossroad",
             tech:"UdooBoard - Arduino - C++",
             links:"<a href='https://1drv.ms/b/s!Am1FK_5miPXj3licORY2uPK-urKJ'>Documentation</a>  -  <a href='https://github.com/MateiGrama/intelligentTrafficMonitor'>Github</a> ",
             photosNumber: 5            
            },
           { 
             title:"IoThack",
             shortDescription:"IoT solution built in less than 24 hours - Microsoft IoT Hackathon",
             description:"Cloud based solution designed to ease blind people's lives by helping them find objects of daily use inside the house. The concept was based on the connection between a cross platform application and small devices connected to the items, which made the desired objects ring.",
             setUp:"The Universal Windows App has to be installed on the Raspberry Pi(powered by Windows IoT OS), the application can be installed on any mobile OS and the service has to be hosted in order to make the solution run corectly.",
             tech:"Universal Windows Apps for Raspberry Pi (C# and XAML), Azure IoT Hub and Cloud Hosted SQL Database, Apache Cordova and AngularJs",
             links:"<a href='https://github.com/MateiGrama/IotHackathon.git'>Github</a>",
             photosNumber: 4
           },
           { 
             title:"D'Artagnan",
             shortDescription:"Fencing virtual learning solution consisting of web platform and mobile training application.",
             description:"A complete fencing digital learning solution with content designed to be suitable for all ages.The website hosts the learning content: movies and schemes. Users need to create an account in order to access the content from different devices. This application is a virtually training tool for learning fencing. It aims to provide feedback for the users' hand techniques. The algorithm interprets the data regarding the device's movement which is provided by the accelerometer and gyroscope.",
             setUp:"The .apk can be downloaded by accesing the link below and installed on any android device.",
             tech:"Apache Cordova - AngularJs - PHP - SQL",
             links:"<a href='proba321.azurewebsites.net'>Web Platform</a>  -  <a href='https://1drv.ms/b/s!Am1FK_5miPXj3mRJ8HPWR3kI_dCJ'>Documentation</a>  -  <a href='https://github.com/MateiGrama/d-Artagnan.git'>Github</a>  -  <a href='https://1drv.ms/u/s!Am1FK_5miPXj3mdsytcZi5K8g2-W'>.apk</a>",
             photosNumber: 5
           },
           { 
             title:"ElectriTracker",
             shortDescription:"Cloud-based GPS Monitoring solution",
             description:"This is a cloud-based GPS Monitoring solution composed of: a cloud hosted server, a cross-platform mobile application and a Windows app for the dispacher. The solution was designed to answer this scenario: a company wants to track employees who go the rounds, to check their status and easily contact them; the emplyees need to update the status regullary and the company doesn't want to buy additional hardware.",
             setUp:"The Windows app (C# and XAML) has to be installed on the dispacher's PC, the application can be installed on any mobile OS and the service has to be hosted in order to make the solution run corectly.",
             tech:"Universal Windows App (C# and XAML), Azure Web App and Cloud Hosted SQL Database, Apache Cordova (HTML,CSS,JS) and JQuery",
             links:"<a href='https://github.com/MateiGrama/ElectriTracker.git'>Github</a>",
             photosNumber: 5
           },
           { 
             title:"Accelerometer Applications",
             shortDescription:"Raspberry program for gathering data about the gadget's movement",
             description:"Programs for Raspberry Pi created to read the values from a MPU6050 and convert them to valuable data for interpreting the device's movement: using the Kalman filter, the rotation angles are calculated; those angles are used to 'rotate' the 3-axis-acceleration trihedral using rotation matrices, in order to obtain instantaneous sets of accelerations independent from the device's orientation. The project is part of a more complex study that targets the modification of the dynamic parameters during the evolution of certain neurological diseases.",
             setUp:"To set up the project, a Raspberry Pi powered by a Linux distribution, a MPU6050, a LED and a button are needed.",
             tech:"Raspberry Pi - MPU6050 - C++",
             links:"<a href='https://github.com/MateiGrama/mpu6050app'>Github</a>  -  <a href='https://1drv.ms/b/s!Am1FK_5miPXj3lkHl68Mt_fEzBf5'>Documentation</a>  -  <a href='https://www.icpe-ca.ro/activitate-stiintifica/bmne-june-2017.pdf'>Article (pg.27)</a>",
             photosNumber: 3
           },
           { 
             title:"Netlogo Football",
             shortDescription:"1st phase of robotic football project: simulations of footbal scenarios",
             description:"Those programs represent simulations of footbal scenarios and were created as a first phase in a more complex project implying robotic footbal.",
             setUp:"NetLogo needs to be installed on the computer in order to run the projects.",
             tech:"NetLogo",
             links:"<a href='https://github.com/MateiGrama/netLogoFootball.git'>Github</a>",
             photosNumber: 3
           },
           { 
             title:"Small Web Projects",
             shortDescription:"Web Apps based on HTML, CSS and Javascript",
             description:"I've been working on several small web projects to excercise using Javascript - JQuery, processing device's orientation events. The set of projects from github includes: games, photo gallerys, matrix operations calculator, compass app and others.",
             setUp:"All the projects can be opened in any browser. Some of them will work only on gadgets having accelerometer and gyroscope.",
             tech:"HTML - CSS - JAVASCRIPT - JQUERY",
             links:"<a href='https://github.com/MateiGrama/smallWebProjects'>Github</a>",
             photosNumber: 4
           },
           { 
             title:"Localy",
             shortDescription:"Soon..",
             description:"",
             setUp:"",
             tech:"",
             links:"",
             photosNumber: 0
           }
         ];

  $scope.init = function () {

    console.log("Projects init");
    window.scrollTo(0, 0);
    $scope.projectVisibility=false;
    $scope.lstId=-1;
    $scope.selectedImage=0;

    $scope.imageLocations = [
          "images/pic01.jpg",
          "images/pic02.jpg",
          "images/pic03.jpg",
          "images/pic04.jpg",
          "images/pic05.jpg",
          "images/pic06.jpg",
          "images/pic07.jpg"
          ];
    $scope.projectData.forEach(function(item, index){
      for(var i=1;i<= item.photosNumber;i++)
        $scope.imageLocations.push("images/"+item.title+"/"+i+".jpg");
          });

    if(!$rootScope.projectsCached)
      $scope.loading=true;
    var enoughLoad = false;
    setTimeout(function(){enoughLoad=true;},3000);
    preloader.preloadImages( $scope.imageLocations )
      .then( function x() {
            // Loading was successful.
            if(enoughLoad){
              window.scrollTo(0, 0);
              $scope.loading =false;
              $rootScope.projectsCached=true;
              $scope.$apply();
            }
            else
              setTimeout(x,500);
           },
            function() {
            // Loading failed on at least one image.
            console.log("failed preloader");
          });

    /*if(!$rootScope.projectsCached)
      $scope.loading=true;
    var timer = setTimeout(function() {$scope.loading =false;$rootScope.projectsCached=true;$scope.$apply();} , 3000);
*/    
  };

  $scope.showProject = function(id){
  	$window.scrollTo(0, 0);  

  	if($scope.lstId===id && $scope.lstId!=-1){
  		$scope.projectVisibility = !$scope.projectVisibility;
  	
    }
  	else{
      if(!$scope.projectVisibility)
        $scope.projectVisibility = !$scope.projectVisibility;

		  $scope.lstId=id;
	  	$scope.projectTitle= $scope.projectData[id].title;
	  	$scope.projectDescription=$scope.projectData[id].description;
      $scope.setUp= $scope.projectData[id].setUp;
      $scope.tech= $scope.projectData[id].tech;
      $scope.links=$sce.trustAsHtml($scope.projectData[id].links);
      $scope.changeImage(1);
      $scope.generateThumb($scope.projectData[id].photosNumber)
    }
  
  };

  $scope.changeImage = function(id){
    var mainImageTag ='<img id="mainProjectImage"  src="/images/'+$scope.projectData[$scope.lstId].title+'/'+ id +'.jpg"></img>'; 
    $scope.mainProjectImage=$sce.trustAsHtml(mainImageTag);
    $scope.selectedImage= id;
  }

  $scope.generateThumb= function(nr){
    var thumbTags="";
    for(i=1;i<=nr;i++){
      thumbTags+= '<img class="thumbnail" ng-class="{colorBorder: selectedImage==' + i + ', initialBorder:selectedImage!='+i+' }" ng-click="changeImage('+ i +')"src ="/images/'+$scope.projectData[$scope.lstId].title+'/'+i+'_tn.jpg"></img>'+'\n'; 
    }
    $scope.thumbnails=$sce.trustAsHtml(thumbTags);
    
    //setTimeout(function(){ $scope.$apply();console.log(thumbTags); }, 1000);
  }


}).directive('compileTemplate', function($compile, $parse){
    return {
        link: function(scope, element, attr){
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() { return (parsed(scope) || '').toString(); }
            
            //Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  //The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }         
    }
});