function Ctrl($scope) {

    $scope.count = 1;
    $scope.removedForm=[];
    $scope.formData = {
      form0: {
        showFlag: true,
        data: []
      },
      form1: {
        showFlag: false,
        data: []
      },
      form2: {
        showFlag: false,
        data: []
      },
      form3: {
        showFlag: false,
        data: []
      }
    };
    $scope.addForm = function() {
      console.log($scope.count);
      if($scope.count > 0 && $scope.count <=3 && $scope.formData['form'+''+$scope.count].showFlag === false && $scope.removedForm.length === 0){
        $scope.formData['form'+''+$scope.count].showFlag = true;
        if($scope.count !== 3) {
          $scope.count++;
        }
      } else {
        $scope.formData[$scope.removedForm[0]].showFlag = true;
        if($scope.removedForm.indexOf($scope.removedForm[0]) >= 0) {
          var index = $scope.removedForm.indexOf($scope.removedForm[0]);
          $scope.removedForm.splice(index, 1);
        }
      }
  
    }
    $scope.removeForm = function(formName) {
      $scope.count--;
      console.log( $scope.count);
      if($scope.removedForm.indexOf(formName) >= 0) {
        var index = $scope.removedForm.indexOf(formName);
         $scope.removedForm.splice(index, 1);
        $scope.removedForm.push(formName);
      } else {
        $scope.removedForm.push(formName);
      }
      console.log($scope.removedForm);
       $scope.formData[formName].showFlag = false;
    };
    
  }
  