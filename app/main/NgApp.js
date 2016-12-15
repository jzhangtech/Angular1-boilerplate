define
(
    [   
        'app/main/controller/mainController',
        'app/main/directive/testDirective',
    ],
    function
    (
        mainController, 
        sampleDirective       
    )
    {
        var NgApp = angular.module('NgApp',[]);

        NgApp.directive('sampleDirective', sampleDirective);
        NgApp.controller('mainController', mainController);

    }
);