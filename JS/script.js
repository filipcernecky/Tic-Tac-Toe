let board=[[0,0,0],[0,0,0],[0,0,0]];
let player=1;


$(document).ready(function()
{
	
});
function imgClick(index){
		console.log(index);
}


//work in progress 
//cell - (policko)

let cell;
let symbol = "X";

function markbox(cell)
{
    if (cell.value == "")
	{
            cell.value = symbol;
             
          
        if (symbol == "X")
            symbol = "O";
            else
            symbol = "X";
        }
    else 
	{
            alert("This cell is occupied");
        }
    }
	
//change - (zmena symbolu)

function changeSymbol() 
{
	if (symbol== "X") 
	{
		}
	else 
	{
			changeSymbol();
		return;
	}
	if (checkWin())
	{
		alert ("You win!")
		}
	else 
	{	
			changeSymbol();
		return;
	}
