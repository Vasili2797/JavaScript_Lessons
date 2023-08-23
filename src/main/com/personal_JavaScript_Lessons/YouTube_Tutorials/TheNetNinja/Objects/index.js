// object literals
let user = {
  name: "Crystal",
  age: 30,
  email: "crystal@mail.net",
  location: "Berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  // Add some kinds of methods to the object
  login: function () {
    console.log("User is logged in");
  },

  logout: function (prop) {
    if (prop != null) {
      console.log(`The user named ${prop} logged out`);
    } else {
      console.log("The user logged out");
    }
  },
  logBlogs: function (prop) {
    console.log(prop, this.blogs);
  },
};

console.log(user);
console.log(user.name);

const key = "location";
console.log(user[key]);

user.age = 35;
user["email"] = "newEmail@mail.net";

console.log(typeof user);

user.login();
user.logout("Bailey");
user.logout();
user.logBlogs("The user blogs:");
