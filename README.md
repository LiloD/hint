# hint
search input with hint functionality using AngularJS

# how to use
* 1.make sure your already link angularjs 
* 2.add `*.js`, `*.css` to their corresponding directories
* 3.add `<link>` and `<script>` tags in your page
* 4.add module 'hint' in your angular module like
  ```angluar.module('app', ['hint']);```
* 5.create hint directive
  ```<hint data="your_data" fetch="your_fetch_func"></hint>```
* 6.for `fetch` in hint
  
  hint expect the fetch function to return a hints list which is a javascript array
  
  you can also return a promise like this
```
  $scope.fetch = function(q){
    if(!q) return [];
    return $http.get('url', { params: {query: q} });
  }
```
