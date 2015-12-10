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
      info: '='
  },
  templateUrl: 'hint.html',     //make sure the url here is correct
  controller: ['$scope', '$http', '$q', function($scope, $http, $q) {
  ....
```
* 5.add module 'hint' in your angular module like
  ```angluar.module('app', ['hint']);```
* 6.create hint directive
  ```<hint info="your_info"></hint>```
* 7.the structure info for your search hint 
```
  info = {
    q: '',                    // the value in the input 
    fetch: function(query){}  // callback function to fetch your hint data given query
                              // you can directly return a promise
  }
```
