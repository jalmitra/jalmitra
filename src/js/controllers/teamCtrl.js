app.controller('teamCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});