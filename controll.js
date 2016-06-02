angular.module("myApp", []).controller("myAppController", function($scope,niceService) {
    $scope.test = "rats"
    $scope.niceList = niceService.niceList;
    $scope.naughtyList = niceService.naughtyList;
    $scope.addNewPerson = function() {
        var differenceScore = $scope.niceScore - $scope.naughtyScore;
        if (differenceScore >= 10) {
            $scope.niceList.push({
                name: $scope.name,
                score: differenceScore
            });
        } else {
            $scope.naughtyList.push({
                name: $scope.name,
                score: differenceScore
            });
        }
    }
});
