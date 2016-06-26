// Variables
var x;

var y = 10;
console.log(y);

/*
	Arrays
	Zero Index Array
*/
var array = [1, 2, 3, 4, 5, 6];

array[1]; // print 2



/* Data Type */

// String
var a = "Hello";

// Numbers

	// Float
	var	b = 1.2;

	// Integer
	var	c	=	10;

/* Operators */
var a = 10;
var b = 20;
var c;

var a, b, c;

c = a + b;
console.log(c);

// String Operator or Concatenate
var a = "Hello" + " " + "World";

// Unary operators
console.log ( typeof 4.5);

console.log ( typeof " x ");

/* Control Structure */

// Conditino Statements
if ( condition ) {
	statement;
}

if ( condition ) {
	statement;
} else  if ( condition ) {
	statement;
} else {
	statement;
}


// Looping Statements

var names = ['John', 'Mary', 'Harry', 'Marcus'];
// While Loop

var x = 0;
while (x < names.length) {
	console.log(names[x]);
	x++;
}

// Do While Loop
var x = 0;
do {
	console.log(names[x]);
	x++;
} while(x < names.length);

// For Loop


for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// Object or Array For Loop
var names = ['John', 'Mary', 'Obama'];

for (name in names) {
	console.log( names[name] );
}


/* Reserved Words */
// break case catch class const continue debugger
// default delete do else enum export extends false
// finally for function if implements import in
// instanceof interface let new null package private
// protected public return static super switch this
// throw true try typeof var void while with yield

// prompt and confirm
prompt("Shall We Dance?");

confirm("Are you Gay?");




