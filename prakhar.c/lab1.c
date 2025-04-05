//Q)1
// #include<stdio.h>
// int main(){
//     int a;
//     printf("enter a ");
//     scanf("%d",&a);
//     int b;
//     printf("enter b ");
//     scanf("%d",&b);
//     int c;
//     c=a+b;
//     printf("c is %d",c);
//     return 0;
// }    

//Q)2
// #include<stdio.h>
// int main(){
//     int a;
//     printf("enter a :");
//     scanf("%d",&a);                    //& before a is imp in scanf syntax
//     printf("a is %d \n",a);
//     float b;
//     printf("enter b:");
//     scanf("%f",&b);
//     printf("b is %f \n",b);
//     return 0;
// }

//Q)3
// #include<stdio.h>
// int main(){
//     int a,b;
//     printf("enter a: ");
//     scanf("%d",&a);                     //ye apne ap line change kar dega same as cin>> in c++ 
//     printf("a is %d \n",a);

//     printf("enter b: ");
//     scanf("%d",&b);                     //ye apne ap line change kar dega same as cin>> in c++ 
//     printf("b is %d \n",b);

//     int sum=a+b;
//     printf("sum of a and b is: %d \n",sum);

//     int diff=a-b;
//     printf("diffrence of a and b is: %d \n",diff);

//     int mul=a*b;
//     printf("multiplication of a and b is: %d \n",mul);

//     int div=a/b;
//     printf("division of a by b is:%d \n",div);
// }

//Q)4
//simple intrest=(principle+rate of intrest+time)/100
// #include<stdio.h>
// int main(){
//     int p,r,t;
//     printf("enter princile :");
//     scanf("%d",&p);
//     printf("enter rate of intrest:");
//     scanf("%d",&r);
//     printf("enter time period:");
//     scanf("%d",&t);
//     int si=(p+r+t)/100;
//     printf("simle intrest is: %d",si);
// }


// #include<stdio.h>
// int main(){
//     int sum=0;
//     for(int i=2;i<=10;i=i+2){
//         sum=sum+i;
//     }
//     printf("%d",sum);

// }


// #include<stdio.h>
// int main(){
//     int x=5;
//     if(x<1){
//         printf("x is less the 1");
//     }
//     else if(x>2){
//         printf("xis greater 2");

//     }
// }

// #include<stdio.h>
// int sum_of_natural_numbers(int n)
// {
// return (n * (n + 1)) / 2; // Formula for the sum of first n natural numbers
// }
// int main(){
// int n, result;
//     printf("Enter a positive integer n: ");
//     scanf("%d", &n);
// if (n <= 0){
//     printf("Please enter a positive integer.\n");
//     return 1; 
// }
// result = sum_of_natural_numbers(n);
// printf("The sum of first %d natural numbers is: %d\n", n, result);
// return 0;
// }


// #include<stdio.h>
// int main(){
//     int p[5];
//     p[0]=1;
//     p[1]=2;
//     p[2]=55;
//     p[3]=66;
//     p[4]=77;
//     printf("%d",p[3]);
// }

#include<stdio.h>
int main(){
    int v[5];
    for(int i=0;i<=10;i++){
        v[i]=i+1;
        printf("%d",v);
    }
}