/*(function(){
    
    var app = angular.module('ionicApp', ['ionic']);
    
    app.controller("bodyController", function(){
        
        
        
    });
    
})();

angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html",
          controller: "AttendeesCtrl"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});
*/


var app ={
    
    insertPage: function(page, container, tab){
        
        var processAjax ={
          
            mimeType: 'text/html; charset=utf-8',
            url: page,
            type: 'GET',
            dataType: 'html',
            async: true,
            success: function(data){
                $(container).empty(); $(container).html(data);
                $('.tab-item').removeClass('active');
                switch (tab){
                    case 1: 
                        $("#tabDiligencias").addClass("active");
                        break;
                    case 2: 
                        $("#tabDomicilios").addClass("active");
                        break;
                    case 3: 
                        $("#tabLicores").addClass("active");
                        break;
                    case 4: 
                        $("#tabServicios").addClass("active");
                        break;
                        
                }
                
            },
            error:function(jqXHR, textStatus, errorThrown){
                alert('No se pudo cargar la página');
            }
            
        };
        
        $.ajax(processAjax);
    },
    
    cargarMapa: function(){
        var mapa = new GMaps({
                    div: '#mapa',
                    lat: 0,
                    lng: 0,
                    zoom: 15,
                    zoomControl: false,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false
                });
    }
    
};

var page = {
    
    diligencias: function(){
        
        app.insertPage("diligencias.html", "#body", 1);
        
        
        
    },
    
    configBody: function(){
        
        $("#body").height($(window).height() - $("#header").height() - $("#footer").height() ).css({
            "margin-top": $("#header").height(),
            "padding": "5px"
        });
        
        
    },
    
    configMapIni: function(){
        
        $("#mapaDiligencias").height($("#body").height());
        
        $(".divMap").css("margin-top", ( "-" + ($("#mapaDiligencias").height() - 60)) +  "px" );
        
        
    }
     
};