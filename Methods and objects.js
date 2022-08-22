// Methods and objects

 var user = {
    firstName:"Hitesh",
    lastName:"Bhagwat",
    loginCount:10,
    fackbookSignedIn:true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function() {
        return `${this.firstName} is enrolled in total number of ${this.courseList.length}`;
    }, 
};

var courseList = true;
console.table(user);
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("ReactJS course");
user.buyCourse("vueJS course");
console.log(user.getCourseCount());

console.table(user);