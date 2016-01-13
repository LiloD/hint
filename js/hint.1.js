(function() {
    angular.module('hint', [])
        .directive('hint', ['$compile', function($compile) {
            return {
                restrict: 'A',
                scope: {
                    ngModel: '=',
                    fetch: '='
                },
                link: function(scope, element, attr){
                    var GAP = 1;
                    //find input element and get the rect
                    var inputElement = element.children()[0];
                    var wrapperRect = element[0].getBoundingClientRect();
                    var inputRect = inputElement.getBoundingClientRect();

                    console.log('wrapperRect', wrapperRect)
                    console.log('inputRect', inputRect);

                    //set position of wrapper div to relative
                    element.css('position', 'relative');

                    //compute the hint list's position and size
                    var position = {
                        left: inputRect.left - wrapperRect.left,
                        top: inputRect.top - wrapperRect.top + inputRect.height + GAP
                    }

                    var rect = {
                        width: inputRect.width,
                        height: 'auto'
                    }

                    scope.list = ["hello", "world"];

                    //create hint list
                    var html = '<div>' + 
                                    '<ul class="hint-list">'+
                                        '<li class="hint-list-item" ng-repeat="li in list">{{li}}</li>'+
                                    '</ul>'+
                                '</div>';

                   
                    var hintList = angular.element(html);
                    element.append(hintList);
                    
                    $compile(hintList)(scope);
                    
                    //build css
                    var hintListCss = {
                        position: 'absolute',
                        left: position.left + 'px',
                        top: position.top + 'px',
                        width: rect.width + 'px'
                    }
                    
                    console.log('hintListCss', hintListCss);
                    hintList.css(hintListCss);
                    console.log('hint list', hintList);
                }
            }
        }]);
})();
