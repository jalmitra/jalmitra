app.controller('aboutCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});