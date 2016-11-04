app.controller('solutionsCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});