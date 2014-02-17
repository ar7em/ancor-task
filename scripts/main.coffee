ancorApp = angular.module "ancorApp", []

ancorApp.controller "CustomerListCtrl", ["$scope", "$http", ($scope, $http) ->
    customersGroups = []

    $http.get("json/customers-groups.json").success (data) ->
        customersGroups = data
        $http.get("json/customers.json").success (data) ->
            $scope.customers = (bindCustomer customer for customer in data)

    bindCustomer = (customer) ->
        if customer.groups
            groupsTitles = (getGroupTitle groupId for groupId in customer.groups)
            customer.groups = groupsTitles.join(", ")
        return customer

    getGroupTitle = (groupId) ->
        groupTitle = ""
        for group in customersGroups
            if groupId in [group.id]
                return group.title
                break
        return groupTitle

    return
]