
#include<stdio.h>
int main(){
    //                    valid instructions --------delcare var before using it
    int a;
    int b;
    int c=b+1;
    int d=1,e;

    int x,y,z;  //valid hai 
     x=y=z=4; 
    
    // int x=y=z=1; ye incvalid hai because complier ko pta hi nhi x y z kon hai
    
    //                   arithmetic instruction  (follow BO-DMAS)
    // arithmetic opertaion between int values give int output
    //                      between int and float give float outut 
    //                      between float values give float output
    // when in a Q we have same precedence using bodmas we will solve that part lesft to right  x=4*6/3*4 ,x=5+2/2*3
    int a;
    int b;
    int sum=a+b;
    int minus=a-b;
    int mul=a*b;
    int div=a/b;
    //to get the remainder we have modular operator '%'  example 3%2=1
    //whne during use of modular operator numerator is negative then us negative ko sabse bhar le ao(means solve it by assuming postivive num then ans me begative lga dena)
     
    //valid aritmetic operations
    a=b+c;
    a=b*c;
    a=b/c;
     
    //invalid arithmetic instriction
    // b+c=a;
    // a=bc;
    // a=b^c
    //for stroning b to the power c in a 
     
    //                   type casting   (in my c++ notes)
    //                   control instructioms --> 1)sequence control (wo code jo sequence wise chalti hai )
//                                                2) decision control (if .else sratment)
//                                                3)loop control (for,while loop)

//                      operators  
//2)RELATIONAL OPERATOR (==, >, >=, <=, <, !=)  
// in this true =1, false=0
printf("%d",4!=4);
printf("%d",4>3);
printf("%d",4>=4);
ptintf("%d",4==4);

//3)LOGICAL OPERATOR (&&,||,!) (discrete math vala rule follow hoga)
//   || logical or
//   && logical and
//   ! yee truth value palat deta hai

// operators precedence -->
//               . !
//               . relational <,>,>=,<,<=
//               . logical &&
//                        ||
//                        =

}
// Q)1 tochcek whetr a number is even or odd without using if else
#include<stdio.h>
int main(){
    int x;
    printf("eneter a number :");
    scanf("%d",x);
    printf("%d",x%2==0);
}