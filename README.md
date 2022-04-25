# stringscroll
![npm](https://img.shields.io/npm/v/stringscroll?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/stringscroll?style=flat-square)   
![npm](https://img.shields.io/npm/dw/stringscroll?style=flat-square)  




```javascript
const ScrollableString = require('stringscroll')
var string1 = new ScrollableString("World! :)")


console.log("Hello " + string1.getCurrent()) //get the current string

string1.next() //scroll one step   ( "W" => "Wo" [...] => "World! :)"

console.log("Hello " + string1.getCurrent()) //get the current string


```
   
   Hello W   
   Hello Wo   
   Hello Wor   
   Hello Worl   
   Hello World   
   Hello World!   
   Hello World! :   
   Hello World! :)   
