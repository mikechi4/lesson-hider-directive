angular.module('directivePractice')
  .controller('mainCtrl', function($scope){
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review',
     'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = 'Two way data binding!';
  });
