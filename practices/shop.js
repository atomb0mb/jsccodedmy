//Async example

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./beans.js');

// Write your code below:
async function makeBeans () {
  let type = await shopForBeans();
  // when we have the bean, soak it
  let isSoft = await soakTheBeans(type);
  // when the beans are soft, we cook it
  let dinner = await cookTheBeans(isSoft);

  console.log(dinner);
}

makeBeans();
