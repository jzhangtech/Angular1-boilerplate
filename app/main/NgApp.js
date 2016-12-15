define
(
    [
        'app/main/config/config',
        'app/main/controller/mainController',
        'app/main/directive/sampleDirective',
        'app/main/service/sampleService'
    ],
    function
    (
        config,
        mainController, 
        sampleDirective,
        sampleService
    )
    {
        var NgApp = angular.module('NgApp',[]);

        NgApp.directive('sampleDirective', sampleDirective);
        NgApp.controller('mainController', mainController);
        NgApp.service('sampleService', sampleService);
        NgApp.config(config);
    }
);