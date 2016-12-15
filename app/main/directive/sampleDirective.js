define([], function()
{
    var sampleDirective = function()
    {
        var directive = {};
        directive.restrict = 'E';
        //directive.templateUrl = 'app/main/template/sampleTemplate.html';
        directive.template = '<div>sample directive</div>'
        directive.controller = function($scope)
        {

        }
            
        return directive;
    };

    //testDirective.$inject = [];
    return sampleDirective;
});