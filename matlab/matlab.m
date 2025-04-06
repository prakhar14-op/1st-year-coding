%Experiment 3
a=[1 2 3] %ROW VECTOR   , or nothing
B=[1;2;3] %COLUMN VECTOR
c=[1 2 9;4 7 6;7 4 9] %3X3 matrix
e=[1 2 7;4 3 6;7 4 9]
d=[c ; 10 11 12 ] %adding a row = 4x3 matrix
e=c(2,:) %printing only 2nd row
f=d(2,3) % kinda like slicing in python
g= eye(3) % 3x3 identity matrix
h= eye(4)(3,3) % finding a particular
c(2,:)=[] %to remove row 2
z= [2,2,2]
y=[a,z] % 1x2 matrix
m = zeros(3,2)
w= a*c
u = inv(c)
w=c*u
det(c)
d=cat(3,e,c,g) %
w=length(b)









%Experiment 4
a=input("enter a number :")
b=input("enter another number :")
n=input("enter value of n:")
switch (n)
  case 1
    sum=a+b;
    disp(sum);
  case 2 
    subtraction=a-b;
    fprintf("subtraction %d",subtraction);
  otherwise
    disp("error")
endswitch 


%experiment 5

a=input("enter a number: ")
if (a>0)
  fprintf("%d is positive integer",a)
elseif (a<0)
  fprintf("%d is negetive integer",a)
else
  disp("number is zero")
end

