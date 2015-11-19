'use strict';

/**
 * @ngdoc function
 * @sourceUser networkUsesApp.controller:UsertableCtrl
 * @description
 * # UsertableCtrl
 * Controller of the networkUsesApp
 */
angular.module('networkUsesApp')
  .controller('UsertableCtrl', ['$scope', '$rootScope', 'apiCalls', function ($scope, $rootScope, apiCalls) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // User data usages
      $scope.gridOptions1 = {
        data: 'userData',
        //showFooter: true,
        filterOptions: $scope.filterOptions,
        enableColumnResize:true,
        showColumnMenu: true,
        columnDefs: [
          { field: "sourceUser", displayName:'USER ID' ,width: 190, pinned: true },
          { field: "totalUsage", displayName:'TOTAL USAGE', width: 120 },
          { field: "totalRcvdBytes", displayName:'RECEIVED BYTES', width: 120 },
          { field: "totalSentBytes", displayName:'SENT BYTES', width: 120 }]
      };

      userDataUsage();
      function userDataUsage(){
        var serviceObj = apiCalls.get_user_data();
        serviceObj.get(function(successresponse){
          var userData = successresponse.userUsages;
          $scope.userData = userData;
        }, function(errorresponse){
          console.log(errorresponse);
        });
      }


    // BU data usage
      $scope.gridOptions2 = {
        data: 'graphData',
        //showFooter: true,
        filterOptions: $scope.filterOptions,
        enableColumnResize:true,
        showColumnMenu: true,
        columnDefs: [
          { field: "policyName", displayName:'POLICY NAME', width: 190, pinned: true },
          { field: "totalUsage", displayName:'TOTAL USAGE', width: 120 },
          { field: "totalRcvdBytes", displayName:'RECEIVED BYTES', width: 120 },
          { field: "totalSentBytes", displayName:'SENT BYTES', width: 120 }]
      };

      policyDataUsage();
      function policyDataUsage(){
        var serviceObj = apiCalls.get_police_data();
        serviceObj.get(function(successresponse){
          var graphData = successresponse.policyUsages;
          $scope.graphData = graphData;
        }, function(errorresponse){
          console.log(errorresponse);
        });
      }


    // Graph Chart Data
      $scope.graphlabels = ["", "", "", "", "", "", ""];
      $scope.graphseries = ['UDP', 'TCP'];
      $scope.givenColour = ['#97bace','#ffc4b3'];

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

      getGraphChartData();
      function getGraphChartData(){
        var serviceObj = apiCalls.get_graph_data();
        serviceObj.get(function(successresponse){
          var graphData = [[],[]];
          angular.forEach(successresponse.countVOs, function(value, key) {
            var data = value.count;
            graphData[0].push(data['udp']);
            graphData[1].push(data['tcp']);
          });
          $scope.graphdata = graphData;
          console.log(successresponse.countVOs);
        }, function(errorresponse){
          console.log(errorresponse);
        });
      }


    // Bar chart data
      getBarcharData();
      function getBarcharData(){
        var serviceObj = apiCalls.get_bar_data();
        serviceObj.get(function(successresponse){
          if(successresponse.countVOs.length){
            var bardata = [];
            $scope.barLabels = [];
            angular.forEach(successresponse.countVOs, function(value, key) {
              bardata.push(value.count);
              $scope.barLabels.push("")
            });
            $scope.data = [bardata];
            console.log(successresponse.countVOs);
          }else{
            $scope.barLabels = [""];
            $scope.data = [[0]]
          }
        }, function(errorresponse){
          console.log(errorresponse);
        });
      }


    function fn60sec() {
      // runs every 60 sec and runs on init.
      getBarcharData();
      getGraphChartData();
    }

    // Timer details for 20 second
     var timer = setInterval(function() { fn60sec(); }, 1000);

    //To stop timer event we can use clear interval.
    //clearInterval(timer);

  }]);





/*

 $scope.userData = [
 { sourceUser: "sushils@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "saurabhg@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "kashisha@synerzipune.local", totalUsage: 27, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "rohitd@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "tusharb@synerzipune.local", totalUsage: 34, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "dipeshr@synerzipune.local", totalUsage: 50, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "lalitp@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "sushils@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "saurabhg@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { sourceUser: "lalitp@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 }
 ];



 $scope.graphData = [
 { policyName: "nileshm@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "saurabhg@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "kashisha@synerzipune.local", totalUsage: 27, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "rohitd@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "tusharb@synerzipune.local", totalUsage: 34, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "dipeshr@synerzipune.local", totalUsage: 50, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "lalitp@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "sushils@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "saurabhg@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
 { policyName: "lalitp@synerzipune.local", totalUsage: 43, totalRcvdBytes: 633911484, totalSentBytes: 11168890 }
 ];



 // Bar Chart Data
 $scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 $scope.series = ['Series A'];

 $scope.data = [
 [65, 59, 80, 81, 56, 55, 40]
 ];



 $scope.graphdata = [
 [65, 59, 80, 81, 56, 55, 40],

 [35, 59, 82, 31, 56, 25, 40]
 ];



*/
