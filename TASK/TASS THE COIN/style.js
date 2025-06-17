
function toss(urChoice){
    let option = ['HEAD','TAIL'];
    let systemchoice =option[Math.floor(Math.random()*2)];
   if(urChoice === systemchoice){
    document.querySelector('p').innerHTML = `You say ${urChoice} and I say ${systemchoice}, so You win...`
   }else{
    document.querySelector('p').innerHTML = `You say ${urChoice} and I say ${systemchoice}, so You Loss...`
   }
}