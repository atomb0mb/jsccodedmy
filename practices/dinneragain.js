// Promiseall example
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./promiseall.js')

// Write your code below:

async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(),cookBeans()]);


  let concat = '';
  for( let i = 0; i < foodArray.length; i ++){
    if(i === foodArray.length - 1){
      concat += 'and ' + foodArray[i] +'.';
    } else{
      concat += foodArray[i]+', ';
    }
  }
  console.log(`Dinner is served. We're having ${concat}`);
}
serveDinnerAgain()
