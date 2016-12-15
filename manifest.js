console.log('loading manifest');
require.config({
    baseUrl: '',
    paths: {
        'Angular': 'vendor/js/angular',
        'Jquery': 'vendor/js/jquery-3.1.1',
        'Bootstrap': 'vendor/js/bootstrap.min',
        'NgApp': 'app/main/NgApp',
    },
    shim:{
        'Angular': {},
        'Bootstrap':
        {
            deps: ['Jquery']
        },
    }

});

require(['Angular', 'Bootstrap'], function()
{
    require(['NgApp'], function()
    {
        //bootstrapping angular to your application
        angular.bootstrap(document, ['NgApp']);
    });
});