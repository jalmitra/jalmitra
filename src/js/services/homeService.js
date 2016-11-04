app.service("homeService",function($q){
	this.getColor = function () {
		return "red";
	}

	this.whatWeDo = function(){
		return [
			{
				icon: "fa-phone",
				hover:"step1",
				tag: "Call Us",
				description: "Give us a call/miss call"
			},
			{
				icon: "fa-briefcase",
				hover:"step2",
				tag: "Service",
				description: "Our agent will come to your house and automate your Motor"
			},{
				icon: "fa-tint",
				hover:"step3",
				tag: "Save Water",
				description: "Save Water / Save Energy"
			}
		]


	}

});