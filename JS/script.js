let board=[0,0,0,0,0,0,0,0,0];
let player=1;
let winner=0;

$(document).ready(function() 
{

});
function imgClick(index)
{
  console.log(index);
  if(board[index]===0 && winner===0)
  {
    board[index]=player;

    if(player===1)
        paintCell('img/x.png',index);
    else
        paintCell('img/o.png',index);
    changePlayer();
    setTimeout(checkWinner,100);
  }
}

function paintCell(imagexo,index){
  let image=document.getElementsByName('image')[index].src=imagexo;

}

function changePlayer()
{
  player=player===1?2:1;
  let playerDiv=document.getElementById('player');
  if(player===1)
    playerDiv.innerHTML='Next player 1: X';
   else
      playerDiv.innerHTML='Next player 2: O';

}

function checkWinner()
{
  let t =0;
  for(i=0;i<7;i=i+3){
    t=board[i]*board[i+1]*board[i+2];
    if(t==1)
        winner=1;
    if(t==8)
        winner=2;
  }
  for(i=0;i<3;i++)
  {
    t=board[i]*board[i+3]*board[i+6];
    if(t==1)
          winner=1;
    if(t==8)
          winner=2;
  }
  t=board[0]*board[4]*board[8];
  if(t==1)
        winner=1;
  if(t==8)
        winner=2;

  t=board[2]*board[4]*board[6];
      if(t==1)
            winner=1;
      if(t==8)
            winner=1;
   if(winner==1)
      alert('Player 1 won!');
   if(winner==2)
         alert('Player 2 won!');


}

function resetGame()
{
  winner=0;
  player=1;
  for(i=0;i<9;i++)
  {
        board[i]=0;
        paintCell('img/empty.png',i);
  }
  document.getElementById('player').innerHTML='Next player: X';
}