/**
LICENSE MIT 2017 ilausuch@gmail.com	
*/

AutoFormMDB.directive('afForm', function() {
    let scope={
        controller: '='
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
        $scope.$onChange=function(model,value){
            $scope.controller.updateState($scope.controller.context.model);
        };
    }];



    return {
            restrict: 'E',
            scope: scope,
            controller: controller,

            link: function (scope, element, attrs) {
                scope.templateUrl = scope.controller.templateUrl || AutoFormMDB.templates+"/afForm.html";
                scope.templateContentUrl = scope.controller.templateContentUrl || AutoFormMDB.templates+"/afFormContent.html";
            },
            template:'<div ng-include="templateUrl" ng-if="templateUrl"></div>'
    };
})