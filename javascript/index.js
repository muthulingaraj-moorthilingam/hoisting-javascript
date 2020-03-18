	//example
	a=10; //implicity creates the global variable all
	//undeclared variable are global variable.
	console.log(a);


//how hoisting is work?
//examle
	var b=11;
	console.log(b);//output:11

	console.log(c);
	var c=10;
//here the hoisting is work how the js before 
//execution first scan all code top to bottoms
//then it will do like it

//the above exmaple js hoisting mechanism variable declaratio moved to top
//var c;
//and next line use the console to print so its undefinrd because after the console
//the variable is initilized;

function abc(){
	console.log(o);//undefined
	var o="muthu";
}
abc();

//hoisting work is:

//find all variable declaration

var v;//declaration
function def(){
	console.log(v);//undefind
	v="muthu";//initilization
}
def();

//var j; declared here and definition is before use console log

function ghi(){
	var j="linga";
	console.log(j);
}
ghi();


//function hoisting

o();
function o(){
	console.log("O -funtion executed");
}

/*var k=function(){
	console.log("k is executad");
}
*/
//k();
var k=function(){
	console.log("k is executad");
}

// in class use hoisting
class animal{
	constructor(name){
		this.name=name;//here this value is animal
	}
}
var obj= new animal();
obj.name="cat";
console.log(obj);//ans:animal{name:"cat"}

var ob= new car();
ob.brand="AUDI";
console.log(ob); //here hoisting work because u call before class

class car{
	constructor(brand){
		this.brand=brand;
	}
}