app.controller('franchiseeCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});