function scuberGreetingForFeet(someSample){
  // Write your code here!
if (someSample<=400) {
  return ( `This one is on me!`)  
}else if(someSample>400 && someSample<2000){
  return `That will be twenty bucks.`
}else if(someSample>2000 && someSample<2500){
  return `I will gladly take your thirty bucks.`
}else if(someSample>2500){
  return `No can do.`
}
}


function ternaryCheckCity(someCheck){
  // Write your code here!
  return someCheck==='NYC'? (someCheck = `Ok, sounds good.`):(someCheck =`No go.`)
}

function switchOnCharmFromTip(myCharm){
  // Write your code here!
  switch (myCharm) {
    case 'generous':
      return`Thank you so much.`
      break;
  
    case 'not as generous':
      return `Thank you.`
      break;
    case 'thanks for everything':
      return `Bye.`
      break
  }
}