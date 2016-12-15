define([], function()
{
    var mainController = function($scope)
    {
        $scope.title = 'Hello World';
    };

    mainController.$inject = ['$scope'];
    return mainController;
});

