console.log(this);

var user = {
	firstName: "Hitesh",
	courseCount: 3,
	getCourseCount: function () {
		console.log("LINE NO 7",this);
		function sayHello(){
			console.log("sayHello");
			console.log("LINE 10",this);
		}
		sayHello();
	},
};

user.getCourseCount();