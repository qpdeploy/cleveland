app.service('locationService', function ($http, $q, appConfig, $rootScope){

    this.getLocations = function() {
        var def = $q.defer();
        $http({
            method: 'GET',
            url: 'https://'+ appConfig.api +'.qpme.com/1.6/web/operator/' + $rootScope.user.info.operator_id + '/locations',
            headers: {'Content-Type': 'application/json', "Authorization": "Basic " + $rootScope.user.basicAuth}
        })
        .success(function(data, status, headers, config) {
            def.resolve(data);
        })
        .error(function(data, status, headers, config) {
            def.reject("Failed to get locations");
        });

        return def.promise;
        
    };
});