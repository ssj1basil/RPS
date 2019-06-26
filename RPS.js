var userscore=0;
var computerscore=0;
const choice = ['Rock','Paper','Scissor'];


function getChar(event)
{
    if (event.which == null) {
 
        // Return the char if not a special character
        return String.fromCharCode(event.keyCode); // IE
      } else if (event.which!=0 && event.charCode!=0) {
        return String.fromCharCode(event.which);   // Other Browsers
      } else {
        return null; // Special Key Clicked
      }
}


function getcomputerchoice()
{
 var randomnum= Math.floor(Math.random()*3);
 var computerchoice = choice[randomnum];

 return computerchoice;
}



function init()
{
document.getElementById('rock').onmouseover= function(event)
{
    document.getElementById('rock').src="Rock_black.jpg";
    document.getElementById('rock').value="Mouse over image";
}

document.getElementById('rock').onmouseleave= function(event)
{
    document.getElementById('rock').src="Rock_white.jpg";
    document.getElementById('rock').value="Mouse left image";
}


document.getElementById('paper').onmouseover= function(event)
{
    document.getElementById('paper').src="paper_black.jpg";
    document.getElementById('paper').value="Mouse over image";
}


document.getElementById('paper').onmouseleave= function(event)
{
    document.getElementById('paper').src="paper_white.jpg";
    document.getElementById('paper').value="Mouse left image";
}


document.getElementById('scissor').onmouseover= function(event)
{
    document.getElementById('scissor').src="scissor_black.jpg";
    document.getElementById('scissor').value="Mouse over image";
}

document.getElementById('scissor').onmouseleave= function(event)
{
    document.getElementById('scissor').src="scissor_white.jpg";
    document.getElementById('scissor').value="Mouse left image";
}




}

function game(userchoice)
{

  document.getElementById('userchoice').innerHTML='You chose ' + userchoice;
  var computerchoice = getcomputerchoice();
  document.getElementById('computerchoice').innerHTML='Computer chose ' + computerchoice;

  if(userchoice==computerchoice)
  {
      document.getElementById('result').innerHTML="It's a Draw";
  }

  if(userchoice=='Rock' && computerchoice=='Paper' || userchoice=='Paper' && computerchoice=='Scissor'
   || userchoice=='Scissor' && computerchoice =='Rock' )
  {
    document.getElementById('result').innerHTML="You lose";
    computerscore++;
    document.getElementById('computerscore').innerHTML='Computer : '+ computerscore;
  }

  if(computerchoice=='Rock' && userchoice=='Paper' || computerchoice=='Paper' && userchoice=='Scissor'
   || computerchoice=='Scissor' && userchoice =='Rock' )
  {
    document.getElementById('result').innerHTML="You Win";
    userscore++;
    document.getElementById('userscore').innerHTML='User : '+ userscore;
  }
}

function restart()
{
    userscore=0;
    computerscore=0;   
    document.getElementById('userscore').innerHTML='User : '+ userscore;
    document.getElementById('computerscore').innerHTML='Computer : '+ computerscore;
    document.getElementById('userchoice').innerHTML='Ready to play the game ?';
    document.getElementById('computerchoice').innerHTML='';
    document.getElementById('result').innerHTML="";

}


onload = init;