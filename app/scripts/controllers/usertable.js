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

    $scope.gridOptions1 = {
      data: 'myData',
      //showFooter: true,
      filterOptions: $scope.filterOptions,
      enableColumnResize:true,
      showColumnMenu: true,
      columnDefs: [
        { field: "sourceUser", width: 190, pinned: true },
        { field: "totalUsage", width: 120 },
        { field: "totalRcvdBytes", width: 120 },
        { field: "totalSentBytes", width: 120 }]
    };

    $scope.myData = [
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




    $scope.gridOptions2 = {
      data: 'myData2',
      //showFooter: true,
      filterOptions: $scope.filterOptions,
      enableColumnResize:true,
      showColumnMenu: true,
      columnDefs: [
        { field: "sourceUser", width: 190, pinned: true },
        { field: "totalUsage", width: 120 },
        { field: "totalRcvdBytes", width: 120 },
        { field: "totalSentBytes", width: 120 }]
    };

    $scope.myData2 = [
      { sourceUser: "nileshm@synerzipune.local", totalUsage: 633911484, totalRcvdBytes: 633911484, totalSentBytes: 11168890 },
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




    // Graph Chart Data
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.graphseries = ['TCP', 'UDP', 'Series X'];
    $scope.graphdata = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90],
      [35, 59, 82, 31, 56, 25, 40]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);


      /*
      //Check onclick dummy
      $scope.graphdata = [
        [16, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [35, 59, 22, 31, 36, 25, 40]
      ];
    */

    };


    // Bar Chart Data
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40]
    ];





    //######################################################################3



    function fn60sec() {
      // runs every 60 sec and runs on init.
      var serviceObj = apiCalls.get_videos();
      serviceObj.all_videos(function(successresponse){
        alert("success");
      }, function(errorresponse){
        alert("fails");
        console.log(errorresponse);
      });
    }

    // Timer details for 20 second
    // var timer = setInterval(function() { fn60sec(); }, 2000);


    //To stop timer event we can use clear interval.
    //clearInterval(timer);


  }]);
