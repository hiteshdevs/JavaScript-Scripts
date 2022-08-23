console.log(this);

var user = {
	firstName: "Hitesh",
	courseCount: 3,
	getCourseCount: function () {
		// body...
		console.log("LINE 7",this);
	},
};

user.getCourseCount();