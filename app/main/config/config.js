define(function()
{
    var config = ['$sceDelegateProvider', function($sceDelegateProvider)
    {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://jsonplaceholder.typicode.com/**'
        ]);
    }];

    return config;
});

