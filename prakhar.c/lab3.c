// Q)1
// #include<stdio.h>
// int main(){
//     int a;
//     printf("enter the number");
//     scanf("%d",&a);
//     for(int i=2;i<a;i++){
//         if(a%i!=0){
//             printf("the number is prime");
//             break;
//         }
//         else{
//             printf("not a prime number");
//             break;
//         }
        
//     }
// }

// Q)2
// #include<stdio.h>
// int main(){
//     int a,b,c;
//     printf("enter a: ");
//     scanf("%d",&a);
//     printf("enetr b: ");
//     scanf("%d",&b);
//     c=a;
//     a=b;
//     b=c;
//     printf("value of a after swapping is %d \n ",a);
//     printf("value of b after swapping is %d \n",b);
// }

// Q)3
// #include<stdio.h>
// int main(){
//     float a,b,c;
//     printf("enter a: ");
//     scanf("%f",&a);
//     printf("enter b: ");
//     scanf("%f",&b);
//     c=a*b;
//     printf("mul of a and b is %f",c);
// }

// Q)4
// #include<stdio.h>
// int main(){
//     char ch;
//     printf("enetr the chra whose acii value you want :");
//     scanf("%c",&ch);
//     int a=ch;
//     printf("acii value is :%d",a);
// }

// #include<stdio.h>
// int main(){
//     int ascii;
//     printf("enter acii value :");
//     scanf("%d",&ascii);
//     char ch=ascii;
//     printf("the given ascii value is of :%c",ch);
// }

// Q)5                      *************************
// #include<stdio.h>
// int main(){
//     int a,b=0;
//     printf("enter that five digit number");
//     scanf("%d",a);
//     for(int i=1;i<=5;i++){
//        b=a%10;
//        a=a/10;
//        b=b+a%10;
//        printf("the sum of the digits is :%d",b);

//     }
// }