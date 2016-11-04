app.controller('clientsCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});