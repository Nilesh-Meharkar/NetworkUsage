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

      get_bar_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getBatchCounts/", url_params, {
          get:{
            method: "GET",
            isArray: false
          }
        });
      },

      get_graph_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getProtocolCounts/", url_params, {
          get:{
            method: "GET",
            isArray: false
          }
        });
      },

      get_user_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getUserUsage/", url_params, {
          get:{
            method: "GET",
            isArray: false
          }
        });
      },

      get_police_data: function(url_params){
        return $resource("http://localhost:8080/loganalyzer-web/getPolicyUsage/", url_params, {
          get:{
            method: "GET",
            isArray: false
          }
        });
      }
    }

  });
