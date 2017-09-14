/*
    MIT LICENSE @2016 Ivan Lausuch <ilausuch@gmail.com>
*/
var AutoFormMDB = angular.module("AutoFormMDB", [])
AutoFormMDB.templates="templates"


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

AutoFormMDB.directive('afField', function() {
    let scope={
        controller: '=',
        onChange:"&"  
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
        $scope.model=$scope.controller.context.model;

                $scope.$onChange=function(){
            $scope.controller.updateState();

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


AutoFormMDB.directive('afFile', function() {
    let scope={
        controller: '=',
        onChange:"&"  
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
        $scope.model=$scope.controller.context.model;

                $scope.$onChange=function(){
            $scope.controller.updateState();

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
                scope.contentUrl = attrs.templateUrl || AutoFormMDB.templates+"/afFile.html";
            },
            template:'<div ng-include="contentUrl" ng-if="contentUrl"></div>'
    };
})

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

AutoFormMDB.directive('afMessage', function() {
    let scope={
        controller: '='
    };

    let controller = ['$scope','$timeout','$attrs', function ($scope,$timeout,$attrs) {
            $scope.$onClick=function(){
                $scope.controller.onClick($scope.model);
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
                scope.contentUrl = attrs.templateUrl || AutoFormMDB.templates+"/afMessage.html";
            },
            template:'<div ng-include="contentUrl" ng-if="contentUrl"></div>'
    };
})﻿
AutoFormMDB.directive('afModal', function() {
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
                scope.templateUrl = scope.controller.templateUrl || AutoFormMDB.templates+"/afModal.html";
                scope.templateContentUrl = scope.controller.templateContentUrl || AutoFormMDB.templates+"/afGroupContent.html";
            },
            template:'<div ng-include="templateUrl" ng-if="templateUrl"></div>'
    };
})
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