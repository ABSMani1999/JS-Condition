//1.if else

var a=5;

if (a>10) {
		document.write("true");
		}	
		
else {
		document.write("fasle");
		}		
		document.write("<br>");
//2.else if 

var a=prompt("enter your")

if (18<a) {
		document.write("Eligible");
		}
		
else if (18<=a){
		document.write("Not Eligible");
}		

else {
		document.write("Better Next Time");	
}
		document.write("<br>");

//nested if

var  a=12; b=17; c=31;

if (c>a && b>c) {
		
		if (b<a) {
			document.write("true");
			}
		else {
			document.write("false");
			}
		}

else {
	document.write("ff");
}
	document.write("<br>");

//switch
let mark=prompt("Enter your grade")

switch (mark) {
				case"s": 
					document.write("des");
					break;
				case"a":
					document.write("first class");
					break;
				case"b":
					document.write("second class");
					break;
				case"f":
					document.write("fail");
					break;
				default:
					document.write("wrong grade");
					break;
				}
	document.write("<br>");
	
//loop
//1.while
	var a=12; 
	while (a>5) {
		
		document.write("correct")
		document.write("<br>")
			a--;
	}
	
//2.do while
	var a=10;
	do { 
		document.write("hello");
		document.write("<br>")
		a++;
		}
	while (a<=15);
	
//for
		
	for (a=12;a<=14;a++) {
		
		document.write("bala");
		document.write("<br>")
	}
	