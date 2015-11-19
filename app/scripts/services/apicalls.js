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
      },

      get_bar_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getBatchCounts/", url_params, {
          get:{
            method: "GET",
            isArray: false
            //, headers: {'Authorization': 'crittersupport.opensilo.co'}
          }
        });
      },

      get_graph_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getBatchCounts/", url_params, {
          get:{
            method: "GET",
            isArray: false
            //, headers: {'Authorization': 'crittersupport.opensilo.co'}
          }
        });
      }



    }


  });
