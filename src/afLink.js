/**
LICENSE MIT 2017 ilausuch@gmail.com	
*/

AutoFormMDB.directive('afLink', function() {
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
                scope.contentUrl = attrs.templateUrl || AutoFormMDB.templates+"/afLink.html";
            },
            template:'<div ng-include="contentUrl" ng-if="contentUrl"></div>'
    };
})