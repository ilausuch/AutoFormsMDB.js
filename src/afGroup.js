/**
LICENSE MIT 2017 ilausuch@gmail.com	
*/

AutoFormMDB.directive('afGroup', function() {
    let scope={
        controller: '='
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
    }];



    return {
            restrict: 'E',
            scope: scope,
            controller: controller,

            link: function (scope, element, attrs) {
                scope.templateUrl = scope.controller.templateUrl || AutoFormMDB.templates+"/afGroup.html";
                scope.templateContentUrl = scope.controller.templateContentUrl || AutoFormMDB.templates+"/afGroupContent.html";
            },
            template:'<div ng-include="templateUrl" ng-if="templateUrl"></div>'
    };
})