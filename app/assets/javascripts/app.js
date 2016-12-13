/**
 * Created by taras on 13.12.16.
 */
(function () {
    angular.module('flapperNews', [])
        .controller('MainCtrl', [
            '$scope',
            function($scope){
                $scope.test = 'Hello world!';
            }])
        .controller('ListCtrl', ListCtrl);
    ListCtrl.$inject = ['$scope'];
    function ListCtrl($scope){
        $scope.name = "loool";
    }

})();

