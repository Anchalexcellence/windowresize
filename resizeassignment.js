var app = angular.module('windowResizeApp', []);
app.controller('resizeController', function($scope) {

});
app.directive('resize', function() {
    return function($scope) {
        function resize() {
            $scope.height = window.innerHeight;
            $scope.width = window.innerWidth;
        };
        window.onresize = function() {
            resize();
            $scope.$apply();

        };
        resize();
    }
});
