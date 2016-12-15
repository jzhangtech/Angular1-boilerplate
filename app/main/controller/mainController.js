define([], function()
{
    var mainController = ['$scope', 'sampleService', function($scope, sampleService)
    {
        $scope.title = 'Hello World';
        $scope.sampleData = [1,2];

        $scope.init = function()
        {
            sampleService.getStuff().then(
                function(response)
                {
                   console.log(response);
                },
                function(error)
                {
                    console.log(error);
                }
            );
        }

        $scope.init();
    }];

    return mainController;
});

