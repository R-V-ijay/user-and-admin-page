let adminApp = angular.module("adminApp", ["ngRoute"]);

adminApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../../assets/pages/login.html",
      controller: "loginPage as login",
    })
    .when("/home", {
      templateUrl: "../../assets/pages/homePage.html",
      controller: "homePage as home",
    });
});

adminApp.controller("loginPage", [
  "$scope",
  function ($scope) {
    let login = this;

    login.submiteBtn = function (event) {
      if (login.nameInput == "" || login.passwordInput == "") {
        console.log("hi");
      } else {
        event.currentTarget.setAttribute("href", "#!/home");
      }
    };
  },
]);
adminApp.controller("homePage", [
  "$scope",
  function ($scope) {
    let home = this;
  },
]);
