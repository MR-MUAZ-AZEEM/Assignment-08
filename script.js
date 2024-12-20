// I have written all these programs according to the document and commented all the programs so you can check all programs one by one easily. THANK YOU!

// 1. Write a js program to find maximum between two numbers.

// var x =+ prompt("Enter First Number:");
// var y =+ prompt("Enter Second Number:");
// if(x > y){
//     console.log("Maximum Number is:", x);    
// }
// else if(y > x){
//     console.log("Maximum Number is:", y);    
// }
// else{
//     console.log("Invalid Input OR Numbers Are Same.");    
// }

// 2. Write a js program to find maximum between three numbers.

// var x =+ prompt("Enter First Number:");
// var y =+ prompt("Enter Second Number:");
// var z =+ prompt("Enter Third Number:");
// if(x > y && x > z){
//     console.log("Maximum Number is:", x);    
// }
// else if(y > x && y > z){
//     console.log("Maximum Number is:", y);   
// }
// else if(z > x && z > y){
//     console.log("Maximum Number is:", z);    
// }
// else{
//     console.log("Invalid Input OR Numbers Are Same.");    
// }

// 3. Write a js program to check whether a number is negative, positive or zero.

// var x =+ prompt("Enter a Number:");
// if(x > 0){
//     console.log("Positive.");    
// }
// else if(x < 0){
//     console.log("Negative.");    
// }
// else if(x == 0){
//     console.log("Zero.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// var x =+ prompt("Enter a Number:");
// if(x % 5 == 0 && x % 11 == 0){
//     console.log("It is Divisible by both 5 and 11.");    
// }
// else if(x % 5 == 0){
//     console.log("It is Divisible by 5.");    
// }
// else if(x % 11 == 0){
//     console.log("It is Divisible by 11.");    
// }
// else{
//     console.log("It is not Divisible by 5 and 11.");    
// }

// 5. Write a js program to check whether a number is even or odd.

// var x =+ prompt("Enter a Number:");
// if(x % 2 == 0){
//     console.log("Number is Even.");    
// } 
// else{
//     console.log("Number is Odd.");    
// }

// 6. Write a js program to check whether a year is leap year.

// var x =+ prompt("Enter Year:");
// if(x % 4 == 0){
//     console.log("It is a Leap Year.");    
// }
// else{
//     console.log("It is not a Leap Year.");    
// }

// or write js program to check whether a character is alphabet or not.

// var x = prompt("Enter a Single Character:");
// if(x == 'a' || x == 'A' || x == 'b' || x == 'B' || x == 'c' || x == 'C' || x == 'd' || x == 'D' || x == 'e' || x == 'E' || x == 'f' || x == 'F' || x == 'g' || x == 'G' || x == 'h' || x == 'H' || x == 'i' || x == 'I' || x == 'j' || x == 'J' || x == 'k' || x == 'K' || x == 'l' || x == 'L' || x == 'm' || x == 'M' || x == 'n' || x == 'N' || x == 'o' || x == 'O' || x == 'p' || x == 'P' || x == 'q' || x == 'Q' || x == 'r' || x == 'R' || x == 's' || x == 'S' || x == 't' || x == 'T' || x == 'u' || x == 'U' || x == 'v' || x == 'V' || x == 'w' || x == 'W' || x == 'x' || x == 'X' || x == 'y' || x == 'Y' || x == 'z' || x == 'Z'){
//     console.log("It's an Alphabet.");   
// }
// else{
//     console.log("It's not an Alphabet.");    
// }

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// var x = prompt("Enter a Single Alphabet:");
// if(x == 'A' || x == 'a' || x == 'E' || x == 'e' || x == 'I' || x == 'i' || x == 'O' || x == 'o' || x == 'U' || x == 'u'){
//     console.log("It's a Vowel.");    
// }
// else if(x == 'b' || x == 'B' || x == 'c' || x == 'C' || x == 'd' || x == 'D' || x == 'f' || x == 'F' || x == 'g' || x == 'G' || x == 'h' || x == 'H' || x == 'j' || x == 'J' || x == 'k' || x == 'K' || x == 'l' || x == 'L' || x == 'm' || x == 'M' || x == 'n' || x == 'N' || x == 'p' || x == 'P' || x == 'q' || x == 'Q' || x == 'r' || x == 'R' || x == 's' || x == 'S' || x == 't' || x == 'T' || x == 'v' || x == 'V' || x == 'w' || x == 'W' || x == 'x' || x == 'X' || x == 'y' || x == 'Y' || x == 'z' || x == 'Z'){
//     console.log("It's a Consonant.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// var x = prompt("Enter a Single Character:");
// if(x == 'a' || x == 'A' || x == 'b' || x == 'B' || x == 'c' || x == 'C' || x == 'd' || x == 'D' || x == 'e' || x == 'E' || x == 'f' || x == 'F' || x == 'g' || x == 'G' || x == 'h' || x == 'H' || x == 'i' || x == 'I' || x == 'j' || x == 'J' || x == 'k' || x == 'K' || x == 'l' || x == 'L' || x == 'm' || x == 'M' || x == 'n' || x == 'N' || x == 'o' || x == 'O' || x == 'p' || x == 'P' || x == 'q' || x == 'Q' || x == 'r' || x == 'R' || x == 's' || x == 'S' || x == 't' || x == 'T' || x == 'u' || x == 'U' || x == 'v' || x == 'V' || x == 'w' || x == 'W' || x == 'x' || x == 'X' || x == 'y' || x == 'Y' || x == 'z' || x == 'Z'){
//     console.log("It's an Alphabet.");   
// }
// else if(x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 ){
//     console.log("It's a Digit.");    
// }
// else if(x == '~' || x == '!' || x == '@' || x == '#' || x == '$' || x == '%' || x == '^' || x == '&' || x == '*' || x == '(' || x == ')' || x == '_' || x == '+' || x == '{' || x == '}' || x == '[' || x == ']' || x == '|' || x == '\\' || x == '/' || x == ';' || x == ':' || x == '"' || x == "'" || x == '<' || x == '>' || x == '?' || x == ',' || x == '.'){
//     console.log("It's a Special Character.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// var x = prompt("Enter a Single Character:");
// if(x == 'a' || x == 'b' || x == 'c' || x == 'd' || x == 'e' || x == 'f' || x == 'g' || x == 'h' || x == 'i' || x == 'j' || x == 'k' || x == 'l' || x == 'm' || x == 'n' || x == 'o' || x == 'p' || x == 'q' || x == 'r' || x == 's' || x == 't' || x == 'u' || x == 'v' || x == 'w' || x == 'x' || x == 'y' || x == 'z'){
//     console.log("The Character is lowercase.");    
// }
// else if(x == 'A' || x == 'B' || x == 'C' || x == 'D' || x == 'E' || x == 'F' || x == 'G' || x == 'H' || x == 'I' || x == 'J' || x == 'K' || x == 'L' || x == 'M' || x == 'N' || x == 'O' || x == 'P' || x == 'Q' || x == 'R' || x == 'S' || x == 'T' || x == 'U' || x == 'V' || x == 'W' || x == 'X' || x == 'Y' || x == 'Z'){
//     console.log("The Character is UPPERCASE.");
// }
// else{
//     console.log("Invalid Input.");    
// }

// 11. Write a js program to input week number and print week day.

// var x =+ prompt("Enter Day Number:");
// if(x == 1){
//     console.log("Monday.");    
// }
// else if(x == 2){
//     console.log("Tuesday.");    
// }
// else if(x == 3){
//     console.log("Wednesday.");    
// }
// else if(x == 4){
//     console.log("Thursday.");    
// }
// else if(x == 5){
//     console.log("Friday.");    
// }
// else if(x == 6){
//     console.log("Saturday.");    
// }
// else if(x == 7){
//     console.log("Sunday.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 12. Write a js program to input month number and print number of days in that month.

// var x =+ prompt("Enter Month Number:");
// if(x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12){
//     console.log("31 Days."); 
// }
// else if(x == 4 || x == 6 || x == 9 || x == 11){
//     console.log("30 Days.");    
// }
// else if(x == 2){
//     console.log("28 or 29 Days.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 13. Write a js program to count total number of notes in given amount.

// var x =+ prompt("Enter Amount Between 5000 to 10000 Divisible By 1000:");
// if(x == 5000){
//     console.log("13 Notes[ 4(1000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else if(x == 6000){
//     console.log("10 Notes[ 1(5000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else if(x == 7000){
//     console.log("11 Notes[ 1(5000)+1(1000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else if(x == 8000){
//     console.log("12 Notes[ 1(5000)+2(1000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else if(x == 9000){
//     console.log("13 Notes[ 1(5000)+3(1000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else if(x == 10000){
//     console.log("14 Notes[ 1(5000)+4(1000)+1(500)+4(100)+1(50)+2(20)+1(10) ]");
// }
// else{
//     console.log("Invalid Input.");    
// }

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
 
// var x =+ prompt("Enter First Angle:");
// var y =+ prompt("Enter Second Angle:");
// var z =+ prompt("Enter Third Angle:");
// if(x + y + z == 180){
//     console.log("It's a Valid Triangle.");    
// }
// else if(x + y + z > 180 || x + y + z < 180){
//     console.log("It's NOT a Valid Triangle.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// var a =+ prompt("Enter First Side:");
// var b =+ prompt("Enter Second Side:");
// var c =+ prompt("Enter Third Side:");
// if(a + b > c || b + c > a || c + a > b){
//     console.log("It's a Valid Triangle.");    
// }
// else if(a + b <= c || b + c <= a || c + a <= b){
//     console.log("It's NOT a Valid Triangle.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// var a =+ prompt("Enter First Side:");
// var b =+ prompt("Enter Second Side:");
// var c =+ prompt("Enter Third Side:");
// if(a == b && b == c){
//     console.log("It's an Equilateral Triangle.");    
// }
// else if(a == b || b == c || c == a){
//     console.log("It's an Isosceles Triangle.");    
// }
// else{
//     console.log("It's a Scalene Triangle.");    
// }

// 17. Write a js program to find all roots of a quadratic equation.
 
// var a =+ prompt("Enter The Value of 'a' According to ax^2 + bx + c = 0");
// var b =+ prompt("Enter The Value of 'b' According to ax^2 + bx + c = 0");
// var c =+ prompt("Enter The Value of 'c' According to ax^2 + bx + c = 0");
// var result = b**2 - 4 * a * c;
// if(result > 0){
//     console.log("Roots Are REAL And DIFFERENT.");    
// }
// else if(result == 0){
//     console.log("Roots Are REAL And EQUAL.");
// }
// else if(result < 0){
//     console.log("Roots Are IMAGINARY.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 18. Write a js program to calculate profit or loss.

// var x =+ prompt("Enter Cost Price:");
// var y =+ prompt("Enter Selling Price:");
// if(x < y){
//     console.log("Profit.");    
// }
// else if(x == y || x > y){
//     console.log("Loss.");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var a =+ prompt("Enter Marks of Physics Out of 75:");
// var b =+ prompt("Enter Marks of Chemistry Out of 75:");
// var c =+ prompt("Enter Marks of Biology Out of 75:");
// var d =+ prompt("Enter Marks of Mathematics Out of 75:");
// var e =+ prompt("Enter Marks of Computer Out of 75:");
// var sum = a + b + c + d + e;
// var result = (sum / 375) * 100;
// if(result >= 90 && result <= 100){
//     console.log("Grade A");    
// }
// else if(result >= 80 && result < 90){
//     console.log("Grade B");    
// }
// else if(result >= 70 && result < 80){
//     console.log("Grade C");    
// }
// else if(result >= 60 && result < 70){
//     console.log("Grade D");    
// }
// else if(result >= 40 && result < 60){
//     console.log("Grade E");    
// }
// else if(result < 40){
//     console.log("Grade F");    
// }
// else{
//     console.log("Invalid Input.");    
// }

// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// var x =+ prompt("Enter Salary Amount:");
// var hra = 0;
// var da = 0;
// var gross = 0;
// if(x <= 10000){
//     hra = (20 / 100) * x;
//     da = (80 / 100) * x;
//     gross = x + hra + da;
//     console.log("Your Gross Salary is:", gross);    
// }
// else if(x <= 20000){
//     hra = (25 / 100) * x;
//     da = (90 / 100) * x;
//     gross = x + hra + da;
//     console.log("Your Gross Salary is:", gross);
// }
// else if(x > 20000){
//     hra = (30 / 100) * x;
//     da = (95 / 100) * x;
//     gross = x + hra + da;
//     console.log("Your Gross Salary is:", gross);
// }
// else{
//     console.log("Invalid Input.");    
// }

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// var x =+ prompt("Enter Units:");
// var sur = 0;
// var price = 0;
// if(x <= 50){
//     price = 0.50 * x;
//     sur = (20 / 100) * price;
//     price = sur + price;
//     console.log("Your Bill is:", price);    
// }
// else if(x <= 150){
//     price = 0.75 * x;
//     sur = (20 / 100) * price;
//     price = sur + price;
//     console.log("Your Bill is:", price);
// }
// else if(x <= 250){
//     price = 1.20 * x;
//     sur = (20 / 100) * price;
//     price = sur + price;
//     console.log("Your Bill is:", price);
// }
// else if(x > 250){
//     price = 1.50 * x;
//     sur = (20 / 100) * price;
//     price = sur + price;
//     console.log("Your Bill is:", price);
// }
// else{
//     console.log("Invalid Input.");    
// }

// I Don't Know The Logic Of This Last Program Because It's A Simple If-else Programs Assignment. That's Why I Have Written This Program In That Way. THANK YOU!