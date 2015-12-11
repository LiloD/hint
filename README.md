# hint
search input with hint functionality using AngularJS

# how to use
* 1.make sure your already link angularjs 
* 2.add `*.js`, `*.css` to their corresponding directories
* 3.add `<link>` and `<script>` tags in your page
* 4.make sure you refer to the correct path to the html template in hint.js
```
  ...
  scope: {
      data: '=',              
      fetch: '='
  },
  templateUrl: 'hint.html',     //make sure the url here is correct
  controller: ['$scope', '$http', '$q', function($scope, $http, $q) {
  ....
```
* 5.add module 'hint' in your angular module like
  ```angluar.module('app', ['hint']);```
* 6.create hint directive
  ```<hint data="your_data" fetch="your_fetch_func"></hint>```
* 7.for `data` in hint 
```
  data = {
    q : ''  //this is where your data stored
  }
```
* 8.for `fetch` in hint
  hint expect the fetch function to return a hints list which is a javascript array
  you can also return a promise like this
```
  $scope.fetch = function(q){
    if(!q) return [];
    return $http.get('/it', { params: {query: q} });
  }
```
