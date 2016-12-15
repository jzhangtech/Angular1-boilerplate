define([], function()
{
    var sampleDataSource = ['$http', '$q', function($http, $q)
    {
        var service = {};

        service.getStuff = function()
        {
            //public test api
            var endPoint = 'https://jsonplaceholder.typicode.com/posts/1';

            var req = {
                method: 'jsonp',
                url: endPoint,
            };

            // returning a promise via Angular's $q method
            return $q(function(resolve, reject)
            {
                 $http(req).then(
                     function(response)
                     {
                         resolve(response);
                     },
                     function(response)
                     {
                         reject(response);
                     }
                );
            });
        };

        return service;
    }];
    return sampleDataSource;
});
