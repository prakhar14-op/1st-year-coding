// //arithmetic operators
// let a=5;
// let b=2;
// console.log("a=",a ,"& b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a^b=",a**b); 
// //unary operator
// console.log(++a);

// //assigment operator
// console.log("a+=5 is",a+=5);
// console.log("a-=5 is",a-=5);
// console.log("a*=5 is",a*=5);
// console.log("a**=2 is",a**=2);
// console.log("a%=5 is",a%=5);

// //comparison operators
// let c=5
// console.log("c==5 is",c==5);
// console.log("c!=5 is",c!=5);
// console.log("c<6 is",c<6);
// console.log("c>6 is",c>6);
// console.log("c<=6 is",c<=6);
// console.log("c>=6 is",c>=6);

//                                 //   CONDITIONAL STATMENT
// let mode="black";
// let color;
// if(mode=="dark"){
//     color="black";
// }  
// else if(mode=="white"){
//     color="white";
// }  
// else{
//     color="blue";
// }
// console.log(color);     

// //to chceck number is odd or even 
// let num=3;
// if(num%2==0){
//     console.log(num,"even  number");
// }
// else{
//     console.log(num,"odd number");  
// } 

// //ternary operator
// let age=19;
// let result=(age>18)?"adult":"not adult"; 
// console.log(result);

// //practice
// //Q)1
// let name=prompt("enter your name");
// console.log(name);
// let numb=prompt("enter the number ");
// if(numb%5==0){
//     console.log(num,"multiple of 5");
// }
// else{
//     console.log(num,"not a mul of 5");
    
// }
// //Q)2
// let grade=prompt("enter your marks: ");
// if(grade>79 && grade<101){
    
//     console.log("grade is A");
// }  
// else if(grade>69 && grade<80){
//     console.log("grade is B");
// }
// else if(grade>59 && grade<70){
//     console.log("grade is C");
// }
// else if(grade>49 && grade<60){
//     console.log("grade is D");
// }
// else if(grade<50){
//     console.log("grade is f");
// }

// bro codeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// document.getElementById("my h1").textcontent= "hello"; 
// document.getElementById("myp").textcontent="i like pizza!";

//variables
// let age=25;
// console.log('you are  years old',age);
const pi=3.14;
let radius;
let circumference;

// radius=prompt('enter the radius');
// radius=Number(radius);
// circumference=2*pi*radius;
// document.getElementById("mysubmit").onclick=function(){
//     radius=document.getElementById("mytext").value;
//     radius=Number(radius);
//     circumference=1*pi*radius;
//     document.getElementById("myh3").textContent="circumference :"+circumference;
// }

//counter program
// const decrease=document.getElementById("decrease");
// const reset=document.getElementById("reset");
// const increase=document.getElementById("increase");
// const countlabel=document.getElementById("countlabel");
// let count=0;
// increase.onclick=function(){
//     count++;
//     countlabel.textContent=count;
// }
// decrease.onclick=function(){
//     count--;
//     countlabel.textContent=count;
// }
// reset.onclick=function(){
//     count=0;
//     countlabel.textContent=count;
// }

//RANDOM NUMBER GENERATOR
// const min=1;
// const max=6;
// let randumm=Math.floor(Math.random()*5)+1;
// console.log(randumm);

//A DICE
// const mybutton=document.getElementById("mybutton");
// const label1=document.getElementById("mylabel1");
// const label2=document.getElementById("mylabel2");
// const label3=document.getElementById("mylabel3");
// const min=1;
// const max=6;

// let randumm1;
// let randumm2;
// let randumm3;
 
// mybutton.onclick=function(){
//     randumm1=Math.floor(Math.random()*6)+1;
//     randumm2=Math.floor(Math.random()*6)+1;
//     randumm3=Math.floor(Math.random()*6)+1;
//     label1.textContent=randumm1;
//     label2.textContent=randumm2;
//     label3.textContent=randumm3; 

// }

//                 CONDITINAL STATMENTS

//if statment
// let age=19;
// let haslicense=false;

// if(age>=18){
//     console.log("you are old enough to drive");
//     if(haslicense){
//         console.log("you have you license");
        
//     }
//     else{
//         console.log("you dont have your license");
//     }
// }
// else{
//     console.log("you must be 18+ to have license");
    
// }

// const mytext=document.getElementById("mytext");
// const submit=document.getElementById("submit");
// const resultelement=document.getElementById("resultelement");
// let value;
// submit.onclick=function(){
//     value=mytext.value;
//     value=Number(value)
//     resultelement.textContent=value;
//     if(value>18){
//         console.log("you are eligble for vote");
//         resultelement.textContent=value,"you are eligble for vote";
//     }
//     else{
//         console.log("you are not eligible for vote");
//         resultelement.textContent="you are not eligble for vote";
        
//     }
// }

//                          .CHECKED
// const mycheckbox=document.getElementById("mycheckbox");
// const visa=document.getElementById("visabtn");
// const mastercard=document.getElementById("mastercardbtn");
// const payal=document.getElementById("payalbtn");
// const mysubmit=document.getElementById("mysubmit");
// const subresult=document.getElementById("subresult");
// const paymentresult=document.getElementById("paymentresult");

// mysubmit.onclick=function(){
//     if(mycheckbox.checked){
//         subresult.textContent="you are subscribed";
//     }
//     else{
//         subresult.textContent="you are not subscribed";
//     }

//     if(visa.checked){
//         paymentresult.textContent="you are paying with visa"
//     }
//     else if(mastercard.checked){
//         paymentresult.textContent="you are paying with mastercard"

//     }
//     else{
//         paymentresult.textContent="you are paying with pay pal"
//     }
    

// }

//                            switch
// let day= prompt("enter your day ");
// day=Number(day);
// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is tuesday");
//         break;
//     case 3:
//         console.log("it is wednesday");
//         break;
//     case 4:
//         console.log("it is thursday");
//         break;
//     case 5:
//         console.log("it is friday");
//         break;
//     case 6:
//         coconst nsole.log("it is saturday");
//         break;    
//     case 7:
//         console.log("it is sunday");
//         break;
//     default:
//         console.log("it is not a day");
// }


// let testscore=90;
// let lettergrade;
// switch(true){
//     case testscore>=90:
//         lettergrade="A";
//         break;
//     case testscore>=80:
//         lettergrade="B";
//         break;
//     case testscore>=70:
//         lettergrade="c";
//         break;
//     case testscore>=60:
//         lettergrade="D";
//         break;
//     default:
//         lettergrade="F";           
//         break;
// }
// console.log(lettergrade);


//                           STRING METHOD
// let username="brocode";
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));

//                           while loop
// let loggedin=false;
// let username;
// let password;
// while(!loggedin){
//     username=window.prompt("enter your username");
//     password=window.prompt("enter your password");
//     if(username=="prakhar" && password=="mypassword"){
//         loggedin=true;
//         console.log("you are loggedin");
//     }
//     else{
//         console.log("invalid credidentail");
 
//     }
// }


//                           FOR LOOP
// for(let i=10;i>0;i--){
//     console.log(i);
// }  
// console.log("happy new year");

//break and continue
// for(let i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

//NUMBER GUESSING GAME
// const min=1;
// const max=100;
// const answer=Math.floor(Math.random()*(max-min+1)+min);

// console.log(answer);
// let attempt=0;
// let guess;
// let running=true;

// while(running){
//     guess=window.prompt("guess a number between 1 - 100");
//     guess=Number(guess);

//     if(isNaN(guess)){
//         window.alert("please enter a valid number");
//     }
//     else if(guess<min || guess>max){
//         window.alert("please enter a valid number");
//     }
//     else{
//         if(guess<answer){
//             window.alert("too low try again");
//         }
//         else if(guess>answer){
//             window.alert("to high try again");
//         }
//         else{
//             window.alert("CORRECT! you got it");
//             running=false;
//         }
//     }
   
// }

//                            FUNCTIONS
// function add(x,y){
//     return x+y;
// }
// function sub(x,y){
//     return x-y;
// }
// function mul(x,y){
//     return x*y;
// }
// function iseven(number){
//     return number%2===0?true:false;
// }
// function isvalid(email){
    // if(email.includes("@")){
    //     return true;
    // }
    // else{
    //     return false;
    // }
//     return email.includes("@")?true:false;
// }
// console.log(iseven(12));
// console.log(isvalid("prakhar@gmail.com"));
// console.log(isvalid("prakhargmail.com"));


//                                                                           VARIABLE SCOPE
//                                                                        TEMP CONVERISON PROGRAM
// tempinput=document.getElementById("tempinput");
// const tofah=document.getElementById("tofahrenheit");
// const tocel=document.getElementById("tocelsius");
// const result=document.getElementById("result");
// let temp;

// function convert(){
//     if(tofah.checked){
//         temp=Number(tempinput.value);
//         temp=temp*9/5+32;
//         result.textContent=temp+"°F"
//     }
//     else if(tocel.checked){
//         temp=Number(tempinput.value);
//         temp=(temp-32)*(5/9);
//         result.textContent=temp+"°C"
//     }
//     else{
//         result.textContent="select a unit";
//     }
// }


//                                                                                ARRAY
// let fruit=["apple","orange","banana"];
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
//}

//                                                                           SPREAD OPERATOR
// let fruits=["apple","orange","banana"];
// let vegi=["carrots","potatoes"];
// let foods=[...fruits,...vegi];
// console.log(foods);

//                                                                        DICE ROLLING PROGRAM
// function rolldice(){
//     const numofdice=document.getElementById("numofdice").valu  e;
//     const diceresult=document.getElementById("diceresult");
//     const diceimages=document.getElementById("diceimages");
//     let value=[];
//     let imag=[];

//     for(let i=0;i<numofdice;i++){
//         const roll=Math.floor(Math.random()*6)+1;
//         value.push(roll);
//         imag.push(`<img src="dice_images/${roll}.png" alt="Dice ${roll}" width="50">`);
//     }
//     diceresult.textContent=value.join(", ");
//     diceimages.innerHTML=imag.join(" ");
// }

//                                                                       RANDOM PASSWORD GENERATOR
// function generatepassword(length,includelowercase,includeuppercase,includenumbers,includesymbols){
//     const lowercasechar="abcdefghijklmnopqrstuvwxyz";
//     const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberchar="013456789";
//     const symbols="+-#$%_=!";
//     let allowedchar="";
//     let password="";

//     allowedchar+=includelowercase?lowercasechar:"";
//     allowedchar+=includeuppercase?uppercasechar:"";
//     allowedchar+=includenumbers?numberchar:"";
//     allowedchar+=includesymbols?symbols:"";



//     if(length==0){
//         return "password length must be atleast one";    
//     }
//     else if(allowedchar.length===0){
//         return "at least 1 set char has to be selected"
//     }

//     for(let i=0;i<length;i++){

//         const randomindex=Math.floor(Math.random()*(allowedchar.length));
//         password+=allowedchar[randomindex];
//         return password;
//     }

// }
// let password=generatepassword(12,true,false,true,true);
// console.log(password);

//                               CALL BACK
// hello(wait);
// function hello(callback){
//     console.log("hello!");
//     callback();         //****** 
    
// }
// function bye(){
//     console.log("bye!");
    
// }
// function wait(){
//     console.log("wait!");
    
// }

//example 2
// sum(displayconsole,1,2)
// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }

// function displayconsole(result){
//     console.log(result);
// }

//                                                             forEach( )
// let num=[1,2,3,4,5];
// num.forEach(double);

// function double(element, index,array){
//     console.log(array[index]=element*2);
// }



// let fruits=["aple","ORANGE","banana"];
// fruits.forEach(cap);

// function display(element){
//     console.log(element)
// }
// function upper(element,index,array){
//     console.log(array[index]=element.toUpperCase());
// }
// function lower(element,index ,array){
//     console.log(array[index]=element.toLowerCase());
// }
// function cap(element,index,array){
//     console.log(array[index]=element.charAt(0).toUpperCase()+element.slice(1,))
// }

//                                        .map()
// const students=["spongebob","SUPERMAN","hanumanji"];
// const upper=students.map(uppercase);
// const lower=students.map(lowercase);

// console.log(upper);
// console.log(lower);


// function uppercase(element){
//     return element.toUpperCase();
// }

// function lowercase(element){
//     return element.toLowerCase();
// }

//example2
// const dates=["2024-1-10","2025-2-20","2026-3-30"];
// dates.map

// function formatedates(elements){
//     const date=elements.split("-");
//     return '${date[1]}/${date[2]}/${date[0]}'

// }

//                                             .filter()
const fruits=["apple","orange","mango","banananananananananan"];
const elelength=fruits.filter(getlong);
console.log(elelength);


function getlong(element){
    return element.length <=6;
}

//                                            .reduce()
const a=[1,2,3,4,5];
const elementsum=a.reduce(sum);
console.log(elementsum);


function sum(accumulator,element){
    return accumulator+element;
}

//example2
const grades=[70,50,65,40,30,90];
const max=grades.reduce(getmax);
const min=grades.reduce(getmin);
console.log(max);
console.log(min);

function getmax(accumulator,element){
    return Math.max(accumulator,element);
}
function getmin(accumulator,element){
    return Math.min(accumulator,element);
}



