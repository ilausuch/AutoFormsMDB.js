AutoFormMDB.directive('afModalSelector', function() {
    let scope={
        controller: '='
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
        $scope.model=$scope.controller.context.model;
            
        $scope.$open=function(){
            $scope.controller.show();
        };
        
        $scope.$onAccept=function(){
            $scope.controller.onAccept({controller:$scope.controller});
        };
    }];



    return {
            restrict: 'E',
            scope: scope,
            controller: controller,

            link: function (scope, element, attrs) {
                scope.templateUrl = scope.controller.templateUrl || AutoFormMDB.templates+"/afModalSelector.html";
                scope.templateContentUrl = scope.controller.templateContentUrl || AutoFormMDB.templates+"/afGroupContent.html";
            },
            template:'<div ng-include="templateUrl" ng-if="templateUrl"></div>'
    };
})