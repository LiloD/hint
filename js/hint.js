(function() {
    angular.module('hint', [])
        .directive('hint', function() {
            return {
                restrict: 'E',
                scope: {
                    info: '='
                },
                templateUrl: 'hint.html',
                controller: ['$scope', '$http', function($scope, $http) {
                    $scope.list = [];

                    $scope.selected = -1;

                    $scope.attach = function(idx) {
                        $scope.info.q = $scope.list[idx];
                    }

                    $scope.mouseover = function(idx) {
                        $scope.selected = idx;
                        $scope.attach($scope.selected);
                    }

                    $scope.keydown = function(e) {
                        switch (e.keyCode) {
                            case 38:
                                e.preventDefault();

                                $scope.selected--;
                                if($scope.selected < 0);
                                    $scope.selected = $scope.list.length - 1;

                                $scope.attach($scope.selected);
                                break;
                            case 40:
                                e.preventDefault();
                                
                                $scope.selected++;
                                if($scope.selected == $scope.list.length)
                                    $scope.selected = 0;
                                
                                $scope.attach($scope.selected);
                                break;
                            case 13:
                                $scope.list = [];
                                break;
                        }
                    }

                    $scope.click = function(idx){
                        $scope.attach(idx);
                        $scope.list = []; 
                    }

                    $scope.search = function(query) {
                        $scope.list = $scope.info.fetch(query);
                    }
                }]
            }
        })
})();
