# Timestamp Microservice
By Jeb Sumeracki

For [Free Code Camp](http://freecodecamp.com) - [Timestamp Microservice](http://www.freecodecamp.com/challenges/basejump-timestamp-microservice)

### Usage

1. Pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example
https://jeb-timestamp.herokuapp.com/December%2015,%15

https://jeb-timestamp.herokuapp.com/1450137600

### Output
{ "unix": 1450137600, "natural": "December 15, 2015" }

### Live Site
[https://jeb-timestamp.herokuapp.com/](https://jeb-timestamp.herokuapp.com/)
