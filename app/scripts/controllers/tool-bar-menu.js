'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
.controller('toolBarMenu', function($mdDialog){
  var originatorEv;
     this.openMenu = function($mdOpenMenu, ev){
       originatorEv = ev;
       $mdOpenMenu(ev);
     };
     this.notificationsEnabled = true;
     this.toggleNotifications = function() {
       this.notificationsEnabled = !this.notificationsEnabled;
     };
     this.redial = function() {
       $mdDialog.show(
         $mdDialog.alert()
           .targetEvent(originatorEv)
           .clickOutsideToClose(true)
           .parent('body')
           .title('Suddenly, a redial')
           .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
           .ok('That was easy')
       );
       originatorEv = null;
     };
     this.checkVoicemail = function() {
       // This never happens.
     };
  });
