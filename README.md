# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chase78712002/lotide`

**Require it:**

`const _ = require('@chase78712002/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: it takes in an array as an argument, and return the first item in the array given.
* `tail(array)`: it takes in an array as an argument, and return the all items in the array except for the first item.
* `middle(array)`: it takes in an array as an argument, and return the middle item in the array give. If the array length number is even, it returns two items in the middle.