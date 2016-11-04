app.controller('homeCtrl', function ( $scope,homeService) {
	$scope.color= homeService.getColor();
	$scope.steps=homeService.whatWeDo();
	/*$( document ).scroll(function() {
		$(".logo").addClass("fixed-logo");
	});*/
});