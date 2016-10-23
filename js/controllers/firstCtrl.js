app.controller("firstCtrl",["$scope",firstCtrl])

function firstCtrl($scope){
  $scope.hobbies = [];
  $scope.buttonText = "favorite";
  $scope.viewInfo = function(firstName,lastName,description,newHobby) {
    $scope.fullName = firstName + " " + lastName;
    $scope.Description = description;
  };
  $scope.addHobby = function (newHobby) {
    if ($scope.hobbies.indexOf($scope.newHobby) == -1) {
      $scope.hobbies.push($scope.newHobby);
      $scope.warning = "";
    }
    else {
      $scope.warning = "You already added this hobby";
      //window.alert("you already added this hobby");
    }
console.log($scope.hobbies);
  };
  $scope.delete = function (hobby) {
    $scope.hobbies.splice(hobby,1);
  };
  $scope.unfav = function () {
    if ($scope.buttonText == "favorite") {
      $scope.buttonText = "unfavorite";
    }
    else {
      $scope.buttonText = "favorite";
    }

  };
};
