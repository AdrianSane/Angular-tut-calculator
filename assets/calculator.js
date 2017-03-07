/* JavaScript Document */
// src = https://www.lynda.com/AngularJS-tutorials/Calculate-wattage-usage-remaining-bulbs/424042/457732-4.html

// enclosure of an anonymous function

(function(){
  // declare the variable app to be the name: myCalculator
  // a module definition
  // defined in the html tag (ng-app)
  var app = angular.module("myCalculator",[]); //define the angular app

  // an angular controller that will be assigned to the main calculator container
  // defined in the containing div with an id of "myCalculator (ng-controller)"
  app.controller("CalculatorController", ["$scope", function($scope){ //define the angular app
    //console.log(" controller test");

    // all available lumens options a user can select from
    // databinding for the select element
    $scope.lumen_options = [375, 600, 900, 1125, 1600];

    // store the default value the calculator will use when the page is loaded
    // databinding for the select element
    $scope.current_lumens = 375;

    // create default values for the kilowatt hours
    // databinding for inputs in html
    $scope.current_cost = 12;
    $scope.current_hours = 3;

    // create default value for total number of days
    $scope.total_days = 365;

    // lumen values to be used for calculations
    // conversion rates
    $scope.inc_conversion = .0625;
    $scope.hal_conversion = .0450;
    $scope.cfl_conversion = .0146;
    $scope.led_conversion = .0125;

    // when something changes in the html, run this function and update all calculations
    // defined the function in the scope
    // calculates the wattage x lumens
    $scope.calculate = function(){

      // variables updated based on calculated conversions
      // calculate the wattage
      $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
      $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
      $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
      $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);


      // keep users from using more than 24 hours for the day
      if($scope.current_hours > 24){
        $scope.current_hours = 24;
      };


      // calculate current number of hours
      var total_hours = $scope.total_days * $scope.current_hours,
          cost = $scope.current_cost / 100;

      //calculate the cost / price
      $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
      $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);

    }

    $scope.calculate();

  }])

/*
  NOTES:
  -$scope: allows you to pass and share variables between HTML and Javascript
*/

})();
