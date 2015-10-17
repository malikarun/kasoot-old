// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (window.cordova && window.cordova.plugins.iosrtc) {
      cordova.plugins.iosrtc.registerGlobals();
    };
  });
})

.controller("AppCtrl", function($scope, $log){
  $scope.isPlaying = false;

  var connection = new RTCMultiConnection("haryanvi-radio-kasoot");

  connection.leaveOnPageUnload = true;
  connection.autoCloseEntireSession = true;

  connection.session = {
    audio: true,
    oneway: true
  };

  connection.onstream = function(e) {
    document.getElementById('media-content').appendChild(e.mediaElement);
  };

  // connect to signaling gateway
  // connection.connect();

  connection.onleave = function() {
    // connection.renegotiate();
    $log.info("Your other half has gone, leave the app and start again");
  };

  $scope.stop = function(){
    $scope.isPlaying = !$scope.isPlaying;
    location.reload();
  }

  $scope.play = function(){
    $scope.isPlaying = !$scope.isPlaying;
    connection.connect();
  }
});
