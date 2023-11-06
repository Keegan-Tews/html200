let x = 1;
let arr =['apple','dog','cat','ice','tire']
arr.forEach(function(index){
  let answer = x + ',' + index;
  console.log(answer);
  x++;
});