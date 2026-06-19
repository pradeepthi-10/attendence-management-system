java script is a single threaded asynchronous lang,high level,dynamically typed,loosely typed programming language
it runs in browsers using NODE.js
** "VARIABLES": var , let , const **
default we use const 

1.VAR 
var a
var a
it indicates a declaration
a=10 => it indicates intialization
**redeclaraion and reintialization is possible 
it is a disadvantage
even before declaration of a variable it is showing the value not displaying an error this is called "HOSTING"
var is a "FUNCTIONAL SCOPE"
when declared inside the function we cannot print outside it acnnot be accessed
eg:function greet{
    var a=10
    console.log(a)
}
 console.log(a)  => here inside block it willl give output but outside we cannot acess that variable hence it is a block scope

var is not a "BLOCK SCOPE"
eg:if(true){
    var a=10
    console.log(a)
}
 console.log(a)  => here inside the block and outside the block output will be 10 hence it is not a block scope because once a variable is declared inside the block outside we cannot acces that variable but here it is possible


 2.LET
 let is a block scope and functional scope but it is strictly a "BLOCK SCOPE"
 re-declaration is not possible but re-intialization is possible

3.CONST
 re-declaration is not possible re-intialization is not possible
 const a block scope and functional scope 
   
before ES-6(2015) only var is there after that only const,let has been introducedd

                                ** DATATYPES **
1.string                                                           non primitives
2.boolean                                                        1.object
3.undefined                                                       2.array
4.null
5.number
   
                                **OPERATORS**
1.arithemetic operator
2.comparision 
3.equality => 
  loose equality(==) => it is comparing only value
  strict equality(===) =>it is comparing both value and data
4.assignment
5.logical
6.increment & decrement
7.conditional
8.bitwise

**loops**
for loop
while 
do-white
for-off
for-in

TYPES OF FUNCTIONS
1.function declaration
2.function expression
3.arrow function
4.ananymous function

