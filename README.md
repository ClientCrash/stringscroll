# stringscroll
![npm](https://img.shields.io/npm/v/stringscroll?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/stringscroll?style=flat-square)   
A little helper repository that can be used for things like typewriter or typing effects. 



```javascript
const ScrollableString = require('stringscroll')
var string1 = new ScrollableString("World! :)")


console.log("Hello " + string1.getCurrent()) //get the current string1 ... this combines to Hello W

string1.next() //scroll one step   ( "W" => "Wo" [...] => "World! :)"

console.log("Hello " + string1.getCurrent()) //get the current string1 ... this combines to Hello Wo


//Just use a loop :)

```
   
   Hello W   
   Hello Wo   
   Hello Wor   
   Hello Worl   
   Hello World   
   Hello World!   
   Hello World! :   
   Hello World! :)   
