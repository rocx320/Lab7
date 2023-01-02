angular.module("Myemp", [])
    .filter("myfilter", function () {
        return function (input, option) {
            if (isNaN(option) || (option == "")) {
                return input;
            }
            else {
                return input.substring(0, option).toUpperCase();
            }
        }
    })
    .controller("empCtrl", function ($scope) {
        var employees = [
            { regno: 2247264, name: 'raju', department: 'mca', specialization: 'datascience', mark: 78 },
            { regno: 2247263, name: 'hareesh', department: 'bca', specialization: 'AI', mark: 67 },
            { regno: 2247262, name: 'sanju', department: 'mca', specialization: 'IOT', mark: 89 },
            { regno: 2247261, name: 'ridhin', department: 'bca', specialization: 'datascience', mark: 67 },
            { regno: 2247260, name: 'hiran', department: 'mca', specialization: 'AI', mark: 48 },
            { regno: 2247259, name: 'yadhu', department: 'bca', specialization: 'IOT', mark: 84 }
        ];

        $scope.employees = employees;
        $scope.rowlimit = 6;

    });