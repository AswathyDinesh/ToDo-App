angular.module('todo', [])

.controller('ToDoCtrl', ['$scope', function($scope, $http) {
    $scope.tasklist = [];
 
  
    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskName) {
            $scope.tasklist.push({"name": $scope.taskName, "completed": false, "priority": $scope.priority});   
            $scope.taskName = "";
         
        }
    }

	  $scope.getTotalTodos = function () {
    return $scope.tasklist.length;
  }; 
  
    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    }
	
	
	
	
	 $scope.clearAll = function() {
    var oldTasklist = $scope.tasklist;
    $scope.tasklist = [];
    angular.forEach(oldTasks, function(task) {
      if (!task.done) $scope.tasklist.push(task);
    });
  };
  
   $scope.clearCompleted = function () {
        $scope.tasklist = _.filter($scope.tasklist, function(task){
            return !task.completed;
        });
    };
	
	// $scope.showCompleted = function () {
        // $scope.tasklist = _.filter($scope.tasklist, function(task){
            // return task.completed;
        // });
    // };
	
	
	
	
	
}])


