socialModule.service('foroService', ['$q', '$http', function($q, $http) {

    this.VComentariosPagina = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/VComentariosPagina',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VForo = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/VForo',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VForos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/VForos',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VHilos = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/VHilos',
          method: 'GET',
          params: args
        });
    };
    
    this.AgregForo = function(fForo) {
        return  $http({
          url: "foro/AgregForo",
          data: fForo,
          method: 'POST'
        });
    };
    
    this.AgregHilo = function(fHilo) {
        return  $http({
          url: "foro/AgregHilo",
          data: fHilo,
          method: 'POST'
        });
    };
    
    this.AElimForo = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/AElimForo',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    
    this.AElimHilo = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/AElimHilo',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AgregPublicacion = function(args) {
        return  $http({
          url: "foro/AgregPublicacion",
          data: args,
          method: 'POST',
        });
    //    var labels = ["/VPagina", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AElimPublicacion = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/AElimPublicacion',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
    
    this.AgregComentario = function(fComentario) {
        return  $http({
          url: "foro/AgregComentario",
          data: fComentario,
          method: 'POST'
        });
    };
    
    this.AEliminarComentario = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'foro/AEliminarComentario',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

}]);
