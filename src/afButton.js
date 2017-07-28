/**
LICENSE MIT 2017 ilausuch@gmail.com	
*/

AutoFormMDB.directive('afButton', function() {
    let scope={
        controller: '='
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
            $scope.$onClick=function(){
                $scope.controller.$onClick();
            };
    }];



    return {
            restrict: 'E',
            scope: scope,
            controller: controller,

            link: function (scope, element, attrs) {
                scope.contentUrl = attrs.templateUrl || AutoFormMDB.templates+"/afButton.html";
            },
            template:'<div ng-include="contentUrl" ng-if="contentUrl"></div>'
    };
})