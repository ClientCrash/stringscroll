# StringScroll
![npm](https://img.shields.io/npm/v/stringscroll?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/stringscroll?style=flat-square)   
![npm](https://img.shields.io/npm/dw/stringscroll?style=flat-square)  

This is StringScroll, a tiny JavaScript project that lets you create a scrollable string. It's a fun way to add some dynamic text effects to your web apps.

## How to Get It

You can grab StringScroll using npm:

```bash
npm install stringscroll
```

## How to Use It

Here's a quick example of how to use StringScroll:

```javascript
// Import the ScrollableString class from the stringscroll package
import ScrollableString from 'stringscroll';

// Make a new scrollable string
var string1 = new ScrollableString("World! :)");

// Print the current string
console.log("Hello " + string1.getCurrent());

// Scroll the string one step
string1.next();

// Print the current string again
console.log("Hello " + string1.getCurrent());
```

This will print:

```
Hello W
Hello Wo
Hello Wor
Hello Worl
Hello World
Hello World!
Hello World! :
Hello World! :)
```

Each time you call `next()`, it adds one more character to the output.

## The Basics

### `new ScrollableString(string)`

This makes a new ScrollableString.

- `string`: The string you want to make scrollable.

### `.getCurrent()`

This gives you the current state of the scrollable string.

### `.next()`

This scrolls the string one step, adding one more character to the output.

## License

StringScroll is [MIT licensed](./LICENSE). So feel free to use it however you like!