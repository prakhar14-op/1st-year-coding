//Q)1

//Q)2
// #include<stdio.h>
// int main(){
//     float r;
//     printf("enter the radius :");
//     scanf("%f",&r);
//     float area;
//     area=3.14*r*r;
//     printf("area is :%f",area);
// }

//Q)3
// #include<stdio.h>
// int main(){
//     int  dividend;
//     printf("enter dividend :");
//     scanf("%d",&dividend);

//     int divisor;
//     printf("enter divisor");
//     scanf("%d",&divisor);

//     float quotient;
//     quotient=dividend/divisor;
//     printf("quotient is: %f \n",quotient);

//     float remainder;
//     remainder=dividend%divisor;
//     printf("remainder is : %f \n",remainder);

// }

// #include<stdio.h>
// int main(){
//     int dividend=5,divisor=2;
//     int quotient=dividend/divisor;
//     int remainder=dividend%divisor;
//     printf("quotient is : %d \n",quotient);
//     printf("remainder is : %d \n",remainder);

// }

//Q)4
// #include<stdio.h>
// int main(){
//     int height=7,width=5;
//     int p=2*height+2*width;
//     int a=height*width;
//     printf("perimeter is : %d \n",p);
//     printf("area is :%d \n",a);
// }

//Q)5*********************imp
#include<stdio.h>               /////?
int main(){
    int days;
    printf("enter no. of days");
    scanf("%d",days);
    int year=days/365;
    int weeks=days/7;
    
    printf("no. of the years is %d \n",year);
    printf("no. of weeks is %d \n",weeks);
}
