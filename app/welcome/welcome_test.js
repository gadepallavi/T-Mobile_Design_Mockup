'use strict';

describe('myApp.welcome module', function() {

  beforeEach(module('myApp.welcome'));

  describe('welcome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      // write a test case to have a controller defined for the welcome module
      var welcomeCtrl = $controller('welcomeCtrl');
      expect(welcomeCtrl).toBeDefined();
    }));

  });
});