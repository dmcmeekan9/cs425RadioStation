// Web Service Radio Application
var app = angular.module('webServiceRadio', [
  'ngRoute'
]);

// Route Configuration
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "pageControl"})
    // About
    .when("/about", {templateUrl: "partials/about.html", controller: "pageControl"})
    // 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "pageControl"});
}]);

// Page Controller
app.controller('pageControl', function () {
  console.log("Page controller working");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});