/**
LICENSE MIT 2017 ilausuch@gmail.com	
*/

AutoFormMDB.directive('afField', function() {
    let scope={
        controller: '=',
        onChange:"&"  
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
        $scope.model=$scope.controller.context.model;
        $scope.$onChange=function(){
            $scope.onChange({
                model:$scope.model,
                field:$scope.controller.field
            });
        };
        
        $scope.getData=function(){
            return $scope.controller.provider.getPromise();
        };
    }];



    return {
            restrict: 'E',
            scope: scope,
            controller: controller,

            link: function (scope, element, attrs) {
                scope.contentUrl = attrs.templateUrl || AutoFormMDB.templates+"/afField.html";
            },
            template:'<div ng-include="contentUrl" ng-if="contentUrl"></div>'
    };
})