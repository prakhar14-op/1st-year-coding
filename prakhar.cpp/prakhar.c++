// #include<iostream>
// using namespace std;
// int main(){
//     cout<<"my name is prakhar";
//     return 0;
// }
 

// .....................................................CONDITIONAL STATMENTS...............

//  ..........................odd/even.................
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<< "enter a number";
//     cin>>n;
//     if(n%2==0){
//         cout<< "even number";
//     }
//     else{
//         cout<<"odd number";
//     } 
// }  
      
//...........................ABSOLUTE VALUE...........
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter number :";
//     cin>>n;
//     if(n>=0){
//         cout<<n;
//     }
//     else{                  //n<0
//         cout<<-n;
//     }
// }
// ...........IF YOU WANT TO CHANGE n ITO ITS ABSOLUTE VALUE......
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter number :";
//     cin>>n;
//     if(n<0){
//         n=-n
//     }
//     cout<<n
// }

// ...................profit or loss....................
// #include<iostream>
// using namespace std;
// int main(){
//     int cp;
//     cout<<"enter cost price: ";
//     cin>>cp;
//     int sp;
//     cout<<"enter selling price: ";
//     cin>>sp;
//     if(sp>cp){
//         cout<<"seller is making profit ";
//     }
//     else if(sp==cp){
//         cout<<"no profit no loose";
//     }
//     else{
//         cout<<"seller is in loose";
//     }
// }

// .....................area and perimeter comarision.........
// #include<iostream>
// using namespace std;
// int main(){
//     int l;
//     cout<<"enter the lenth of rectangle: ";
//     cin>>l;
//     int b;
//     cout<<"enter the breath of rectangle: ";
//     cin>>b;
//     int A=l*b;
//     int P;
//     P=2*l+2*b;
//     if(A>P){
//         cout<<"area is greater than perimeter";
//     }
//     else{
//         cout<<"perimeter is greater than area";
//     }
// }

// .............................MULTILE CONDITION USING && and ||.............
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n :";
//     cin>>n;
//     if(n>99 && n<1000){
//         cout<<"three digit number";
//     } 
//     else{
//         cout<<"not a three digit number ";
//     }
 

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n :";
//     cin>>n;
//     if(n%5==0 or n%3==0){
//         cout<<"number is divisible by 5 or 3 ";
//     }
//     else{
//         cout<<"number is not divisible by both 5 and 3";
//     }
// } 

// #include<iostream>
// using namespace std;
// int main(){
//     int a;
//     cout<<"enter firts side :";
//     cin>>a;
//     int b;
//     cout<<"enter second side :";
//     cin>>b;
//     int c;
//     cout<<"enter third side :";
//     cin>>c;
//     if((a+b)>c and (b+c)>a and (c+a)>b){
//         cout<<"they can be the sides of a triangle ";
//     }
//     else{
//         cout<<"invalid triangle";
//     }
// }  

// #include<iostream>
// using namespace std;
// int main(){
//     int a;
//     cout<<"enter a :";
//     cin>>a;
//     int b;
//     cout<<"enter b:";
//     cin>>b;
//     int c;
//     cout<<"enter c:";
//     cin>>c;
//     if(a>b and a>c){
//         cout<<"a is greatest";
//     }
//     else if(b>a and b>c){
//         cout<<"b is greatest";
//     }
//     else{
//         cout<<"c is greatest ";
//     }
// }    

// #include<iostream>
// using namespace std;
// int main(){
//     int x;
//     cout<<"enter number 1 :";
//     cin>>x;
//     int y;
//     cout<<"enter number 2 :";
//     cin>>y;
//     int z;
//     cout<<"enter number 3 :";
//     cin>>z;
//     if(x<y and x<z){
//         cout<<"number 1 is least";
//     }
//     else if(y<x and y<z){
//         cout<<"number 2 is least";
//     }
//     else{
//         cout<<"number 3 is least";
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n: ";
//     cin>>n;
//     if((n%5==0 or n%3==0) and n%15!=0){
//         cout<<"number is divisible by 5 or 3 but not by 15";
//     }
//     else{
//         cout<<"number is divisible by 15";
//     }
// }    

// ....................................NESTED IF ELSE.............................
// (Q1)take 3 positive integer input and print greatest of them without using multile condition
// #include<iostream>
// using namespace std;
// int main(){
//     int a,b,c;
//     cout<<"eneter a :";
//     cin>>a;
//     cout<<"eneter b :";
//     cin>>b;
//     cout<<"eneter c :";
//     cin>>c;
//     if(a>b){
//         if(a>c){
//             cout<<a
//             cout<<"a is greatest";
//         }
//         else{
//             cout<<c
//             cout<<"c is greatest";
//         }
//     }
//     else{ //b>a
//         if(b>c){
//             cout<<b
//             cout<<"b is the greatest";
//         }
//         else{
//             cout<<c
//             cout<<"c is the greatest";
//         }
//     }
// }
 
//...................else if...............
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter the percentage of the student ";
//     cin>>n;
//     if(n>80 and n<=100){
//         cout<<"very good";
//     }
//     else if(n>=61 and n<=80){
//         cout<<"good";
//     }
//     else if(n>=41 and n<=60){
//         cout<<"average";
//     }
//     else{
//         cout<<"fail";
//     } 

// }

//         (Q2)
// #include<iostream>
// using namespace std;
// int main(){
//     int x,y;
//     cout<<"enter x :";
//     cin>>x;
//     cout<<"enter y :";
//     cin>>y;
//     if(x>0 and y>0){
//         cout<<"point is in first quadtrant";
//     }
//     else if(x<0 and y>0){
//         cout<<"point is in second quadrant";
//     }
//     else if(x<0 and y<0){
//         cout<<"point is in third quadrant";
//     }
//     if(x>0 and y<0){ 
//         cout<<"pont is in fourth quadrant";
//     }
// }


//...............................TERNARY OPERATOR................if ekse vla kam kaam line me kar dega (relacment of if else)
//syntax----------->experission1?expression2:expression3;
//                    (condition)?if true:if false;
//example-->odd __even
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n :";
//     cin>>n;
//     (n%2==0)?cout<<"even number":cout<<"odd number";
// }

//................................SWITCH STATMENT....................another replacement of if else
//(Q1)calculator
//method 1:using if else
// #include<iostream>
// using namespace std;
// int main(){
//     int n1,n2;
//     cout<<"enter n1 :";
//     cin>>n1;
//     cout<<"enter n2 :";
//     cin>>n2;
//     char op;  //  +,-,*,/
//     cout<<"enter the arithmetic operator you want to apply :";
//     cin>>op;
//     if(op=='+') cout<<n1+n2;
//     if(op=='-') cout<<n1-n2;
//     if(op=='*') cout<<n1*n2;
//     if(op=='/') cout<<n1/n2;
// }

//method2:using switch statment
// 1)C++ Introduction
// 2)C++ Basics
// Features
// Installation
// cout, cin, end
// Variable
// Data types
// Keywords
// Operators
// Identifiers
// Expression
// 3. Control statement

// If-else and it's type
// Switch
// Loop
// Entry control
// Exit control
// Break statement
// Continue statement
// Goto statement
// Comment statement
// 4. Function

// Call by values and call by reference
// Recursion
// Storage classes
// 5. Array

// Simple array
// Multidimensional array
// 6. Pointer basic

// Pointers
// Refrences
// Memory management
// 7. Object and Class

// Object oriented programme introduction and benifites and concept
// Object class
// Constructor
// Destructor
// Static
// Structure
// Enumeration
// Friend function
// Math function
// 8. Inheritance

// 9. Polymorphism

// 10. Abstraction

// 11. Namespace

// 12. Strings

// 13. Exception

// Exception handling
// Try/catch
// User defined
// 14. Templates

// 15. Signal handling

// 16. File and Stream

// File and stream
// getline()
// 17. int to string

// 18. STL (Standard Template Library)

// STL components
// Vector
// Deque
// List
// Set
// Stack
// Queue
// Priority queue
// Map
// Multimap
// Betset
// Algorithm
// And many more
// 19. Iterators and it's concept

// 20. After above can go through to C++11 and C++17.


//..............................................CHAPTER 3 LOOPS.......................................
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n: ";
//     cin>>n;
//     for(int i=1;i<=n;i++){
//         cout<<"hello world"<<endl;
//         }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=100;i++){
//         cout<<i<<endl;
//     }
// }
//                      PRINTING EVEN NUMBERS
// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=100;i++){
//         if(i%2==0){
//             cout<<i<<" ";
//         }
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=2;i<=100;i=i+2){
//         cout<<i<<endl;
//     }
// }

//                         TABLE OF 19
// #include<iostream>
// using namespace std;
// int main(){
//     for( int i=1;i<=190;i++){
//         if(i%19==0){
//             cout<<i<<endl;
//         }
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=19;i<=190;i=i+19){
//         cout<<i<<endl;
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n: ";
//     cin>>n;
//     for(int i=1;i<=n*20;i++){
//         if(i%n==0){
//             cout<<i<<endl;
//         }
//     }
// }
 
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n: ";
//     cin>>n;
//     for(int i=n;i<=n*10;i=i+n){
//         cout<<i<<endl;
//     }
//...............................  AP  .........
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n:"; 
//     cin>>n;
//     for(int i=1;i<=n;i=i+2){
//         cout<<i<<endl;
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n:";
//     cin>>n;
//     for(int i=1;i<=2*n-1;i=i+2){
//         cout<<i<<" ";
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n:";
//     cin>>n;
//     for(int i=4;i<=3*n+1;i=i+3){
//         cout<<i<<endl;
//     }
// }

//..........................GP.........
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter how many terms of this g you want";
//     cin>>n;
//     int a=3;
//     for(int i=1;i<=n;i++){
//         cout<<a<<" ";
//         a=a*4;
//     }
// }

//...............heighest factor............
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter n :";
//     cin>>n;
//     int f=1;
//     for(int i=1;i<n;i++){
//         if(n%i==0) f=i;
//     }
//     cout<<f;
// }

// //..............COMPOSITE NUMBER.............
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enteer the number which you want to check";
//     cin>>n;
//     for(int i=2;i<n;i++){
//         if(n%i==0){
//             cout<<"its a composite number";
//         }
//         else{
//             cout<<"its not";
//         }
//     }
// }

//...................PRIME NUMBER........
// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"enter the number which you want to check";
//     cin>>n;
//     bool flag=true;
//     for(int i=2;i<n;i++){
//         if(n%i==0){
//             flag=false;
//             break;
//         }
//     }
//     if(n==1) cout<<"neither prime nor composite";
//     else if(flag==true) cout<<"prime";
//     else if(flag==false) cout<<"composite";
// }

//.........CONTINUE STATMENT...............(round ko skip kar dega)
//print number between 1 to 20 skiping some number
//using if statment
// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=20;i++){
//         if( i!=3 && i!=8){
//             cout<<i<<" ";
//         }
//     }
// }
//using continue statment
// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=20;i++){
//         if(i==3) continue;
//         if(i==8) continue;
//         cout<<i<<endl;

//     }

// }

// WAP to print odd no. bewtween 1 to 100
// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=100;i=i+2){
//         cout<<i<<" ";
//     }
// }

// #include<iostream>
// using namespace std;
// int main(){
//     for(int i=1;i<=100;i++){
//         if(i%2==0) continue;
//         cout<<i<<" ";
//     }
// }

//.............WHILE LOOP................(alternate of for) tab jab kitni bar chalega na pta , wired senario etc
// #include<iostream>
// using namespace std;                  //syntax:
// int main(){                           //initialistation
//     int i=1;                          //while(condition kab tk loop chalna hai)
//     while(i<=10){                     //code
//         cout<<i<<endl;                //increment 
//         i++;
//     }
// }

//.............DO WHILE LOOP..........(ek bar kam se kam chale)
//syntax
// do{
//     //code
// }whilw(another=='y';)
// #include<iostream>
// using namespace std;
// int main(){
//     int i=1;
//     do{
//         cout<<i<<endl;
//         i++;
//     }while(i<=10);
// }

#include<iostream>
using namespace std;
int main(){
    int i=11;
    do{
        cout<<i<<endl;
        i++;
    }while(i<=10);
}