# hint
search input with hint functionality using AngularJS

# how to use
* 1.make sure your already link angularjs 
* 2.add `*.js`, `*.css` to their corresponding directories
* 3.add `<link>` and `<script>` tags in your page
* 4.add module 'hint' in your angular module like
  ```angluar.module('app', ['hint']);```
* 5.create hint directive
  ```<hint info="your_info"></hint>```
* 6.the structure info for your search hint 
```
  info = {
    q: '',                    // the value in the input 
    fetch: function(query){}  // callback function to fetch your hint data given query
  }
```
