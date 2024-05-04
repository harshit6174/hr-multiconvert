# hr-multiconvert

hr-multiconvert is a versatile npm package that provides seamless conversion capabilities for various units, including currency, length, weight, and temperature. It offers developers a reliable solution for performing unit conversions in their projects.


## Features

- **Currency Conversion:** Convert between different currencies using an API.
- **Length Conversion:** Convert between different length units such as meters, kilometers, feet, and miles.
- **Weight Conversion:** Convert between different weight units such as kilograms, pounds, ounces, and grams.
- **Temperature Conversion:** Convert between different temperature units such as Celsius, Fahrenheit, and Kelvin.

## Installation

You can install hr-multiconvert via npm:

```bash
npm install hr-multiconvert
```
## Usage
### Currency Conversion
```
import { convertCurrency } from 'hr-multiconvert';

convertCurrency('USD', 'INR', 100)
  .then(result => {
    console.log(result); // Output: Converted amount in INR
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
### Length Conversion 
```
import { convertLength } from 'hr-multiconvert';

const result = convertLength('kilometers', 'meters', 5);
console.log(result); // Output: Converted length in meters

```
### Weight Conversion 
```
import { convertWeight } from 'hr-multiconvert';

const result = convertWeight('kilograms', 'pounds', 10);
console.log(result); // Output: Converted weight in pounds

```
### Temperature Conversion 
```
import { convertTemperature } from 'hr-multiconvert';

const result = convertTemperature('celsius', 'fahrenheit', 20);
console.log(result); // Output: Converted temperature in Fahrenheit

```
## API Documentation
For API reference used in this project you can refer to [API documentation](https://github.com/everapihq/freecurrencyapi-js)

## License
hr-multiconvert is licensed under the Apache License 2.0.


