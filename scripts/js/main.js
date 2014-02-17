// Generated by CoffeeScript 1.4.0
(function() {
  var ancorApp;

  ancorApp = angular.module("ancorApp", []);

  ancorApp.controller("CustomerListCtrl", [
    "$scope", "$http", function($scope, $http) {
      var bindCustomer, customersGroups, getGroupTitle;
      customersGroups = [];
      $http.get("json/customers-groups.json").success(function(data) {
        customersGroups = data;
        return $http.get("json/customers.json").success(function(data) {
          var customer;
          return $scope.customers = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              customer = data[_i];
              _results.push(bindCustomer(customer));
            }
            return _results;
          })();
        });
      });
      bindCustomer = function(customer) {
        var groupId, groupsTitles;
        if (customer.groups) {
          groupsTitles = (function() {
            var _i, _len, _ref, _results;
            _ref = customer.groups;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              groupId = _ref[_i];
              _results.push(getGroupTitle(groupId));
            }
            return _results;
          })();
          customer.groups = groupsTitles.join(", ");
        }
        return customer;
      };
      getGroupTitle = function(groupId) {
        var group, groupTitle, _i, _len;
        groupTitle = "";
        for (_i = 0, _len = customersGroups.length; _i < _len; _i++) {
          group = customersGroups[_i];
          if (groupId === group.id) {
            return group.title;
            break;
          }
        }
        return groupTitle;
      };
    }
  ]);

}).call(this);
