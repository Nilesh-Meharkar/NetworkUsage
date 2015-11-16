'use strict';

/**
 * @ngdoc service
 * @name networkUsesApp.apiCalls
 * @description
 * # apiCalls
 * Service in the networkUsesApp.
 */
angular.module('networkUsesApp')
  .service('apiCalls', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return{
      get_videos: function(url_params){
        return $resource("http://widget-qa1.opensilo.co:8200/api/v1/videos_get_This/", url_params, {
          all_videos:{
            method: "GET",
            isArray: false,
            headers: {'Authorization': 'crittersupport.opensilo.co'}
          }
        });
      }
    }


  });
