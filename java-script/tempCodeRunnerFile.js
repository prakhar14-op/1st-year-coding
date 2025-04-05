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