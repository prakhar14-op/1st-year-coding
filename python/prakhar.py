# n=int(input("enter a number "))
# def fibonacci(n):
#     if n<0:
#         print("invalid value")
#     elif n==0:
#         return 0
#     elif n==1:
#         return 1
#     else :
#         return fibonacci(n-1)+fibonacci(n-2)
# i=0
# for i in range(n):
#     print(fibonacci(i))    
# n=int(input("enter a number "))
# def fibonacci(n):
#     f,s=x,1
#     for i in range(n+1):
#         print(f,end ="")
#         f,s=s,f+s
#     print()
#     fibonacci(s)  
#                                         #   online class practice
# class student():
#     def _init_(self,name,roll_number,marks1,marks2,marks3):
#         self.name=name
#         self.roll_number=roll_number
#         self.marks1=marks1
#         self.marks2=marks2
#         self.marks3=marks3
#     def display(self):
#         print("name of the student",self.name) 
#         print("roll_number of student",self.roll_number) 
#         print("marks of the student in subject 1",self.marks1)   
#         print("marks of the student in subject 2",self.marks2)
#         print("marks of the student in subject 3",self.marks3)
#     def avg(self):
#         print((self.marks1 +self.marks2+self.marks3)/3)
#     def inputdevices(self):
#         self.name=input("enter the name of the student ")
#         self.roll_number=int(input("enter the roll number "))
#         self.marks1=int(input("enter the marks in subject 1 "))
#         self.marks2=int(input("enter the marks in subject 2 "))
#         self.marks3=int(input("enter the mars in subject 3 "))
# object=student()
# object.inputdevices()
# object.display()
# object.avg()
# a=[3,2,"hello","namaste",1]
# def search_list(a,e):
#     for i in a:
#         if i==e:
#             print(a.index(i))
#         else:
#             print("not in a")
# search_list(a,1)                
# while True:
#     try:
#         a=int(input("enter no.1 "))
#         b=int(input("enter no.2 "))
#         q=a/b
#         if b!=0:
#             print("ans is",q)
#             break
#     except ZeroDivisionError:
#         c=input("do you want to continue, yes/no")  
#         if c=="yes":
#             print("ok")
#             continue
# class InvalidError():
#     pass
# while True:
#     try:
#         a=int(input("enter your age"))
#         if a>=18:
#             print("eligble for vote")
#             break
#         else:
#             raise InvalidError
#     except InvalidError:
#         print("not eligle for vote ")
#         c=input =("do you want to continue, yes/no") 
#         if c=="yes":
#             print("Ok")
#             continue
#         else:
#             print("thank you ")
#             break  
# def avg (a,b):
#     print ("the average is",(a+b)/2)
# avg(2,6)          
# for k in range(5): 
#      print(k)     
# for i in range(1,12):
#     print("5*","i","=",5*i)
#     if i==10:
#         break
                                
#                                        fibonacci series

# n=int(input("enter a number "))
# def fibonacci(n):
#     if (n<0):
#         print("invalid input")
#     elif (n==0):
#         return 0
#     elif (n==1):
#         return 1
#     else:
#         return fibonacci(n-1)+fibonacci(n-2)
# i=0
# for i in range(n+1):
#     print(fibonacci(i))                      

# n=int(input("enter a number "))
# def detector(n):
#     rem=n%2
#     if (rem==0):
#         print("the given number is even ")
#     else:
#         print("the given number is odd")    
# detector(n)           

# to check prime number
# n=int(input("enter a number "))
# def detector(n):
#     if (n%2!=0 and n%3!=0):
#         print("the given number is a prime number") 
#     else:
#         print("the given number is not a prime number")        
# detector(n)

#                       to make a list of factor (n)

# n=int(input("enter a number ")) 
# def fac(n):
#     i=1
#     for i in range(1,n+1):
#         if (n%i==0):
#             print(i
# # fac(n)
# while True:
#     try:
#         a=int(input("enter the first number"))
#         b=int(input("enter the secont number"))
#         print(a/b)
#         input1 = input('Enter yes or no to continue')
#         if input1== 'yes':
#             continue
#         else:
#             break
#     except:
#         print('invalid denominator')
#         input1 = input('Enter yes or no to continue')
#         if input1== 'yes':
#             continue
#         else:
#             break


# n=int(input("enter a number "))
# def prime(n):
#     if (n%2!=0 and n%3!=0):
#         print("the given number is prime")
#     else:
#         print("its not a rime number")    
# prime(n)



# a=int(input("enter a number "))
# b=int(input("enter the second number "))
# c=int(input("enter the third number "))
# if (a>b and a>c):
#     print("a is the greatest number")
# elif (b>c):
#     print("b is the greatest number")
# else:
#     print("c is the greatest number")       

# a={1,2,55,77,9,0}
# b={"prakhar",4,"raja"} 
# print(a.union(b)) 1

# n=int(input("enter the year "))
# def year_finder(n):
#     if (n%400==0):
#         print("it is a leap year")
#     else:
#         print("its not a leap year")    
# year_finder(n)  

# l=[2,3,55,8888,99]
# l.sort(reverse=True)
# print(l[0])

# n=int(input("enter a number "))             .......................................
# def odd_even(n):
#     if (n%2==0):
#         print("its is a even number")
#     else:
#         print("its a odd number")
# def positive_negative(n):
#     if(n>0):
#         print("it os positive")
#     elif(n<0):
#         print("it is negative")
#     else:
#         print("it is zero")                
# odd_even(n)
# positive_negative(n)

# n=int(input("enter the number upto which you want the natural numbers"))
# for i in range(1,n+1):
#     print(i,end=" ")

# a="hello"               ........................
# for i in a:
#     if (i=="a" and i=="e" and i=="i" and i=="o" and i=="u"):
#         b=a.replace(i,"")
#         print(b)        

a="learn"
b="about"  
c="string "
d="variable"
e="in"
f="python"
messageforyou=a[0]+b[2]+d[0]+d[len(d)-1]+" "+b[-2]
print(messageforyou)
  

           


                          


