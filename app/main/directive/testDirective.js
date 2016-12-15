define([], function()
{
    var testDirective = function()
    {
        var directive = {};
        directive.template = 'Hi'

        directive.controller = function($scope)
        {

        }
            
        return directive;
    };

    testDirective.$inject = [];
    return testDirective;
});