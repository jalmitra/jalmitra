app.controller('contactsCtrl', function ( $scope,homeService) {
    $scope.color= homeService.getColor();
});