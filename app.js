
//   chapter 21- 25
// //     Question no 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullname = firstName + lastName;
// alert("welcome " + fullname + " to java script");
// //     Question no 2
// var favouriteMobile = prompt("enter your favourite Mobile phone");
// document.write("My favourite mobile is: " + favouriteMobile + "<br>");
// var length1 = favouriteMobile.length;
// document.write("Length of string: " + length1 + "<br>");
//     Question no 3
// var str = "Pakistan";
// document.write("string: " + str + "<br>");
// var indexNum = str.indexOf("n");
// document.write("Index of 'n': " + indexNum + "<br>");
//     Question no 4
// var str = "Hello World";
// document.write("string: " + str + "<br>");
// var indexNum = str.lastIndexOf("l");
// document.write("Last index of 'l': " + indexNum + "<br>");
//     Question no 5
// var str = "Pakistani";
// document.write("string: " + str + "<br>");
// var indexNum = str.charAt("3");
// document.write("Character at Index 3: " + indexNum + "<br>");
//     Question no 6
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullname = firstName.concat(" " + lastName);
// alert(fullname);
//     Question no 7
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var city1 = city.replace ("Hyder" , "Islam");
// document.write("After Replacement: " + city1 + "<br>");
//     Question no 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g, "&");
// document.write(message1);
//     Question no 9
// var str = "472";
// document.write ("Value: " + str + "<br>");
// document.write ("Type : String <br>");
// var str1 = Number("472");
// document.write ("Value: " + str1 + "<br>");
// document.write ("Type : Number <br>");
//     Question no 10
// var input = prompt("enter text");
// document.write("User Input: " + input + "<br>");
// var input = input.toUpperCase() 
// document.write("Upper Case: " + input + "<br>");
//     Question no 11
// var name = prompt("Enter text");
// var firstchar = name.slice(0,1);
// var otherChar = name.slice(1);
// firstchar = firstchar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var name1 = firstchar + otherChar;
// document.write("User Input : " + name + "<br>");
// document.write("Title Case : " + name1 + "<br>");
//     Question no 12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// num1 = num.toString()
// var  num2 = num1.replace(".", ""); 
// document.write("Result: " + num2 + "<br>");

//     Question no 13

// var userName = prompt("Enter your name");
// var numChar = userName.Length;
// for (var i = 0; i < userName; i++)
// {
//     if(userName.slice(i,i+1) == "!" || userName.slice(i,i+1) == "," || userName.slice(i,i+1) == "." || userName.slice(i,i+1) == "@")
//     {
//         alert("Invalid Username");
//     }
    // else 
    // {
    //     alert("valid username");
    // }
// } 





//     Question no 14

// var bakery = prompt("Welcome to ABC Bakery! What do you want to order Sir/Mam?")
// bakery = bakery.toLowerCase();
// var arr = ["cake", "apple pie", "cookie", "chips", "patties" ]
// var bakery1 = arr.indexOf(bakery);
//      if (arr.indexOf(bakery) != -1) {
//          alert(bakery + " is available at index " + bakery1 + " in our bakery");
//     }
//     else {
//         alert("We are sorry " + bakery + " is not available at our bakery");
//     }

 
//     Question no 15



// var string = "University of Karachi";
// var usingSplit = string.split('');
// document.write("<br>");
// document.write(string);

//     Question no 17

// var str = "pakistan";
// var a = str.charAt(7);
// document.write("last charqacter of input: " + a + "<br>");


//     Question no 18

// var userName = "The quick brown fox jumps over the lazy dog.";
//  var numChar = userName.Length;
//  for (var i = 0; i < userName; i++)
//  {
//   if(userName.slice ( i , i+2) === "the")
//   {
//     document.write(userName);
//   }
//  }


//     Question no 13

// var userName = prompt("Enter your name");
// var numChar = userName.Length;
// for (var i = 0; i < userName; i++)
// {
//     if(userName.slice(i,i+1) == "!" || userName.slice(i,i+1) == "," || userName.slice(i,i+1) == "." || userName.slice(i,i+1) == "@")
//     {
//         alert("Invalid Username");
//     }
    // else 
    // {
    //     alert("valid username");
    // }
// } 





//     Question no 14

// var bakery = prompt("Welcome to ABC Bakery! What do you want to order Sir/Mam?")
// bakery = bakery.toLowerCase();
// var arr = ["cake", "apple pie", "cookie", "chips", "patties" ]
// var bakery1 = arr.indexOf(bakery);
//      if (arr.indexOf(bakery) != -1) {
//          alert(bakery + " is available at index " + bakery1 + " in our bakery");
//     }
//     else {
//         alert("We are sorry " + bakery + " is not available at our bakery");
//     }

 
//     Question no 15



// var string = "University of Karachi";
// var usingSplit = string.split('');
// document.write("<br>");
// document.write(string);

//     Question no 17

// var str = "pakistan";
// var a = str.charAt(7);
// document.write("last charqacter of input: " + a + "<br>");


//     Question no 18

// var userName = "The quick brown fox jumps over the lazy dog.";
//  var numChar = userName.Length;
//  for (var i = 0; i < userName; i++)
//  {
//   if(userName.slice ( i , i+2) === "the")
//   {
//     document.write(userName);
//   }
//  }


// =========chapter no 2============== 

// question no 1

//  var num = prompt("enter your number");
//  document.write("number " + num + "<br>")
//  var round = Math.round(num)
//  document.write("round off value of the number " + round + "<br>")
//  var round1 = Math.ceil(num)
//  document.write("ceil value of the number " + round1 + "<br>")
//  var round2 = Math.floor(num)
//  document.write("floor value of the number " + round2 + "<br>")

// question no 2

// var num = prompt("enter your number");
// document.write("number " + num + "<br>")
// var round = Math.round(num)
// document.write("round off value of the number " + round + "<br>")
// var round1 = Math.ceil(num)
// document.write("ceil value of the number " + round1 + "<br>")
// var round2 = Math.floor(num)
// document.write("floor value of the number " + round2 + "<br>")

// question no 3

// var a = prompt("enter negative number");
// var b = Math.abs(a);
// document.write("absolute value of " + a + " is " + b );


// question no 4


// var dice = Math.random()*5;
// var floor = Math.floor(dice)
// document.write("Random dice value is: " + floor);

// question no 5

// var dice = Math.random()*2;
// var floor = Math.floor(dice)

// if (floor === 0)
// {
//     document.write(floor + "<br>")
//     document.write("Random coins value : Head " )

// }
// else 
// {
//     document.write(floor + "<br>")
//     document.write("Random coins value : Tail " )

// }

// question no 7

// var dice = Math.random()*100;
// var floor = Math.floor(dice)
// document.write("Random number between 1 and 100 : " + floor);

// question no 8

// var a = prompt("Enter your weight in kilograms");
// document.write("the weight of user is " + a);

// question no 9

// var a = prompt("enter number between 1 and 10");
// if (a == 7){
//     alert("Congragulations!");
// }
// else {
//     alert("Try again")
// }
//  var num = prompt("enter your number");
//  document.write("number " + num + "<br>")
//  var round = Math.round(num)
//  document.write("round off value of the number " + round + "<br>")
//  var round1 = Math.ceil(num)
//  document.write("ceil value of the number " + round1 + "<br>")
//  var round2 = Math.floor(num)
//  document.write("floor value of the number " + round2 + "<br>")

// question no 2

// var num = prompt("enter your number");
// document.write("number " + num + "<br>")
// var round = Math.round(num)
// document.write("round off value of the number " + round + "<br>")
// var round1 = Math.ceil(num)
// document.write("ceil value of the number " + round1 + "<br>")
// var round2 = Math.floor(num)
// document.write("floor value of the number " + round2 + "<br>")

// question no 3

// var a = prompt("enter negative number");
// var b = Math.abs(a);
// document.write("absolute value of " + a + " is " + b );


// question no 4


// var dice = Math.random()*5;
// var floor = Math.floor(dice)
// document.write("Random dice value is: " + floor);

// question no 5

// var dice = Math.random()*2;
// var floor = Math.floor(dice)

// if (floor === 0)
// {
//     document.write(floor + "<br>")
//     document.write("Random coins value : Head " )

// }
// else 
// {
//     document.write(floor + "<br>")
//     document.write("Random coins value : Tail " )

// }

// question no 7

// var dice = Math.random()*100;
// var floor = Math.floor(dice)
// document.write("Random number between 1 and 100 : " + floor);

// question no 8

// var a = prompt("Enter your weight in kilograms");
// document.write("the weight of user is " + a);

// question no 9

// var a = prompt("enter number between 1 and 10");
// if (a == 7){
//     alert("Congragulations!");
// }
// else {
//     alert("Try again")
// }



// ========= chapter no 3 ============== 

// question no 1

// var a = new Date();
// document.write(a);


// question no 2


// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var d = new Date();
//   var n = month[d.getMonth()];
 
// alert("Current Month: " + n );

// question no 3

// var a = new Date;
// var b = a.toString();
// var c = b.slice(0,3)
// alert("Today is: " + c);

// question no 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday == "Sat" || nameOfToday == "Sun")
// {
//     alert("It's fun Day ")
// }

// question no 5

// var a = new Date
// var b = a.getDate();
// if (b < 15)
// {
//     alert("First fifteen days of the month");
// }
// else
// {
//     alert("Last fifteen days of the month");
// }


// question no 6

// var a = new Date; 
// document.write("Current Date: " + a + "<br>");
// var c = a.getTime();
//  document.write("Elapsed Millisecond second since Jan. 1, 1970: " + c + "<br>");
 
//  var d = c/(1000*60);

// document.write("Elapsed Milliminutes since Jan. 1, 1970: "+ d);



// question no 7

// var a = new Date;
// var b = a.getHours();
// if (b < 12)
// {
//     alert("it's AM");
// }
// else{
//     alert("it's PM"); 
// }

// question no 8
// var laterdate = new Date("Dec 31,2020")
// document.write("Later Date: " + laterdate);



// question no 9

// var date1 = new Date(" June 18, 2015 "); 
// var date2 = new Date(); 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
   
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// var accurate = Math.floor(Difference_In_Days)
// document.write( accurate +  " days have been passed since June 18 2015");

// question no 10
// var date = new Date(" Dec 05, 2015 ");
// var milliseconds = date.getTime();
// document.write("On reference date since Sat Dec 05 2015 00:00:00 GMT-0800 (Pacific Standard Time) " + milliseconds + " seconds had passed since begining of 2015");

// question no 11

var date = new Date(); 
var d = new Date();
var  e = new Date (d.setHours(11));
document.write("Current date: "+ date + " 1 hour ago it was " + e);

// question no 12

// var date = new Date(); 
// var d = new Date();
// var  e = new Date (d.setFullYear(1920));
// alert("Current date: "+ date + " 100 years back it was, " + e);


// question no 13

// var age = prompt("Enter your age")
// document.write("Your age is : " + age);


// =========== Chapter 35-38  ================

// // Question no 1

// function time(){
//   var date = new Date;
//   document.write(date)
// }

// time();

// Question no 2

// function name(){
//     var firstname = prompt("enter first name");
//     var lastname = prompt("enter last name");
     
//     document.write("welcome " + firstname + " " + lastname +  " to Java Script")
//   }
  
//   name();
  


// Question no 3

// function add(firstnum,secondnum){
//     var firstnum = parseInt(prompt("enter first number"));
//     var secondnum = parseInt(prompt("enter second number"));
//     return firstnum + secondnum;
//   }
//      document.write(add());


// Question no 4

// function calculator(num1,num2,oper)
// {
// if (oper=== "+")
// {
//     return num1 + num2
// }
// else if (oper=== "-")
// {
//     return num1 - num2
// }
// else if (oper=== "*")
// {
//     return num1 * num2
// }
// else if (oper === "/")
// {
//     return num1 / num2
// }
// else {
//      return "Incorrect operator"
//  }
// }
// var result = calculator(5, "+" , 6);
// var result1 = calculator(5,"*", 7);
// var result2 = calculator(3,"-" ,6);
// var result3 = calculator(2,"/" ,1);

// document.write(result)
// document.write(result1)
// document.write(result2)
// document.write(result3)


// // Question no 5
// function square (a)
// {
//     return a * a
// }
// document.write(square(2));

// // Question no 6

// function Factorial(n)
//  {
//      var n = prompt("enter number"); 
//     var ans=1; 
      
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// } 
// document.write(Factorial());

// // Question no 7

// function counting()
//  {
//      var a = prompt("enter number"); 
//      var b = prompt("enter number"); 

      
//     for (var i = a; i <= b; i++) 
//     {
//         return a,b
//     }     
// } 
// document.write(counting());


// // Question no 10


// function palindrome(str) {
//     var str = prompt("enter text")
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           document.write("not a  palindrome");
//       }
//           else {
//             document.write(" palindrome");
   
//           }
//       }
    

//    }
// (palindrome());
   

// Question no 11


// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.write(capitalize_Words('the quick brown fox' ));


// Queestion no 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

