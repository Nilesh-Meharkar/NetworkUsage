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
            enableColumnResize: true,
            showColumnMenu: true,
            columnDefs: [
                {field: "sourceUser", displayName: 'USER ID', width: 190, pinned: true},
                {field: "totalUsage", displayName: 'TOTAL USAGE', width: 120},
                {field: "totalRcvdBytes", displayName: 'RECEIVED BYTES', width: 120},
                {field: "totalSentBytes", displayName: 'SENT BYTES', width: 120}]
        };

        userDataUsage();
        function userDataUsage() {
            var serviceObj = apiCalls.get_user_data();
            serviceObj.get(function (successresponse) {
                $scope.userData = successresponse.userUsages;
            }, function (errorresponse) {
                console.log(errorresponse);
            });
        }

        // BU data usage
        $scope.gridOptions2 = {
            data: 'graphData',
            //showFooter: true,
            filterOptions: $scope.filterOptions,
            enableColumnResize: true,
            showColumnMenu: true,
            columnDefs: [
                {field: "policyName", displayName: 'POLICY NAME', width: 190, pinned: true},
                {field: "totalUsage", displayName: 'TOTAL USAGE', width: 120},
                {field: "totalRcvdBytes", displayName: 'RECEIVED BYTES', width: 120},
                {field: "totalSentBytes", displayName: 'SENT BYTES', width: 120}]
        };

        policyDataUsage();
        function policyDataUsage() {
            var serviceObj = apiCalls.get_police_data();
            serviceObj.get(function (successresponse) {
                $scope.graphData = successresponse.policyUsages;
            }, function (errorresponse) {
                console.log(errorresponse);
            });
        }

        // Graph Chart Data
        $scope.graphseries = ['UDP', 'TCP'];
        $scope.givenColour = ['#97bace', '#ffc4b3'];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        getGraphChartData();
        function getGraphChartData() {
            var serviceObj = apiCalls.get_graph_data();
            serviceObj.get(function (successresponse) {
                var graphData = [[], []];
                $scope.graphlabels = [];
                angular.forEach(successresponse.countVOs, function (value, key) {
                    var data = value.count;
                    $scope.graphlabels.push("");
                    graphData[0].push(data['udp']);
                    graphData[1].push(data['tcp']);
                });
                $scope.graphdata = graphData;
                console.log(successresponse.countVOs);
            }, function (errorresponse) {
                console.log(errorresponse);
            });
        }

        // Bar chart data
        getBarcharData();
        function getBarcharData() {
            var serviceObj = apiCalls.get_bar_data();
            serviceObj.get(function (successresponse) {
                if (successresponse.countVOs.length) {
                    var bardata = [];
                    $scope.barLabels = [];
                    angular.forEach(successresponse.countVOs, function (value, key) {
                        bardata.push(value.count);
                        $scope.barLabels.push("")
                    });
                    $scope.data = [bardata];
                    console.log(successresponse.countVOs);
                } else {
                    $scope.barLabels = [""];
                    $scope.data = [[0]]
                }
            }, function (errorresponse) {
                console.log(errorresponse);
            });
        }

        function fn60sec() {
            // runs every 60 sec and runs on init.
            getBarcharData();
            getGraphChartData();
        }

        // Timer details for 20 second
        var timer = setInterval(function () {
            fn60sec();
        }, 1000);

    }]);
