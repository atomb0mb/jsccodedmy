// callback

function one(call){
  
  console.log('I am');
  if(call != null) {
    call();
  }
}

function two(){
  console.log('this only')
}

one(two);

console.log('--------------');
one(null);
two();
