angular.module('controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.message = "Hello! I am a Controller and my name is HomeCtrl.";
})
.controller('AboutCtrl', function($scope) {
    $scope.message = "Hello! I am a Controller and my name is AboutCtrl.";
});
