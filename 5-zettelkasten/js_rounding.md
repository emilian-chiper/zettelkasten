### Meta
2024-09-20 21:16
**Tags:** [[javascript]] [[javascript_data_types_deep_dive]] [[javascript_numbers]]
**State:** #pending 

### Built-in functions
- [Math.floor]([[js_Math.floor()]])
	- Rounds down: `3.1` becomes `3`, and `-1.1` becomes `-2`.
- [Math.ceil]([[js_Math.ceil()]])
	- Rounds up: `3.1` becomes `4`, and `-1.1` becomes `-1`. 
- [Math.round]([[js_Math.round()]])
	- Rounds to the nearest integer: `3.1` becomes `3`, `3.6` becomes `4`. In the middle cases, `3.5` rounds up to `4`, and `-3.5` rounds up to `-3`.
- [Math.trunc]([[js_Math.trunc()]]) (not supported by Internet Explorer)
	- Removes anything after the decimal point without rounding: `3.1` becomes `3`, `-1.1` becomes `-1`.


|        | `Math.floor` | `Math.ceil` | `Math.round` | `Math.trunc` |
| ------ | ------------ | ----------- | ------------ | ------------ |
| `3.1`  | `3`          | `4`         | `3`          | `3`          |
| `3.5`  | `3`          | `4`         | `4`          | `3`          |
| `3.6`  | `3`          | `4`         | `4`          | `3`          |
| `-1.1` | `-2`         | `-1`        | `-1`         | `-1`         |
| `-1.5` | `-2`         | `-1`        | `-1`         | `-1`         |
| `-1.6` | `-2`         | `-1`        | `-2`         | `-1`         |

- These functions cover all the possible way to deal with the decimal parts of a number.

#### Rounding up to n-th digit after the decimal
- We have `1.2345` and want to round it to 2 digits, getting only `1.23`.

###### Multiply and divide
- To round the number to the 2nd digit after the decimal, we can multiply it by `100`, call the rounding function, and then divide it back.

```JavaScript title:app.js
let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 > 123.456 > 123 > 1.23
```

###### toFixed(n)
- The method `toFixed(n)` rounds the number to `n` digits after the point and returns a *string* representation of the result.

```JavaScript title:app.js
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
```

- This rounds up or down to the nearest value, similar to `Math.round`:

```JavaScript title:app.js
let num = 12.36;
alert( num.toFixed(1) ); // "12.4"
```

- **Note:** The result of `toFixed` is a string. If the decimal part is shorter than required, zeroes are appended to the end:

```JavaScript title:app.js
let num = 12.34;
alert( num.toFixed(5) ); // "12.34000"
```

- We can convert it to a number using the unary plus or a `Number()` call, e.g. write `+num.toFixed(5)`.