//Q)1
// #include<stdio.h>
// int main(){
//     int year;
//     printf("enter the year :");
//     scanf("%d",&year);
//     if(year%4==0){
//         printf("it is a leap year");

//     }
//     else{
//         printf("its not a lea year");
//     }
// }

//Q)2
#include<stdio.h>
int main(){
    int side1;
    printf("enter 1st side :");
    scanf("%d",&side1);
    int side2;
    printf("enter 2nd side :");
    scanf("%d",&side2);
    int side3;
    printf("enter 3rd side :");
    scanf("%d",&side3);
    if(side1==side2==side3){
        printf("sides of equilateral triangle");
    }
    else if(side1==side2!=side3 || side2=side3!=side1||side3==side1!=side2){
        printf("sides of isoscales triangle");  
        
    }

    

}