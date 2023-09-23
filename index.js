function scuberGreetingForFeet(){
  // Write your code here!
}
function scuberGreetingForFeet(feet) {
  if (feet > 2500) {
    return "No can do.";
  } else if (feet > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (feet <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(){
  // Write your code here!
}
function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
}
function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous'){
    return 'Thank you.';
  } else  {
    return 'Bye.';
  }
}
