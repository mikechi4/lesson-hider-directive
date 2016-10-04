angular.module('directivePractice')
  .directive('lessonHider', function(){

    return{
      templateUrl: 'lessonHider.html',
      restrict: 'E',
      scope: {
        lesson: '='
      },
      link: function(scope, element, attributes){
        console.log(scope);
        console.log(element);
        console.log(attributes);
      }
    }
  })
;
