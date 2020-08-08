

var board = [
    ["a0", "b0", "c0", "d0", "e0", "f0", "g0", "h0"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ];
    let queen = { position: { x: 0, y: 0} };
    document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
    //document.getElementById("a0").innerHTML="queen";

function changedirection()
{
    var direction = prompt("Give the input for queen direction");
    var steps = prompt("How many steps");
    console.log("Queen position", board[queen.position.x][queen.position.y]);
    
    let moving_position=0;
    switch(direction)
    {
        case 'N':
        {
            moving_position=parseInt(queen.position.x)-parseInt(steps);
            //console.log(moving_position);
            if((moving_position>=0) && (moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen position moved " + steps+ " steps NORTH: Current Queen Position :- " + board[queen.position.x][queen.position.y]);
            }
            else
            {
                alert("Boundary_outside");
                
            }
            break;

        }

        case 'S':
        {
            moving_position=parseInt(queen.position.x)+parseInt(steps);
            //console.log(moving_position);
            if((moving_position>=0) && (moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps SOUTH: Current Queen Position - ",board[queen.position.x][queen.position.y]);
                
            }
            else
            {
                //console.log(queen.position);
                alert("Boundary_Outside");
               
            }
            break;
        }
        case 'E':
        {
            let moving_position=parseInt(queen.position.y)+parseInt(steps);

            if((moving_position>=0) && (moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.y=moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps EAST: Current Queen Position -  ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        case 'W':
        {
            let moving_position=parseInt(queen.position.y)-parseInt(steps);

            if((moving_position>=0) && (moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.y=moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps WEST: Current Queen Position -  ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        case 'NE':
        {
            let x_moving_position=parseInt(queen.position.x)-parseInt(steps);
            let y_moving_position=parseInt(queen.position.y)+parseInt(steps);

            if((x_moving_position>=0) && (x_moving_position<8) && (y_moving_position>=0) && (y_moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=x_moving_position;
                queen.position.y=y_moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps NORTH-EAST: Current Queen Position -  ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        case 'NW':
        {
            let x_moving_position=parseInt(queen.position.x)-parseInt(steps);
            let y_moving_position=parseInt(queen.position.y)-parseInt(steps);

            if((x_moving_position>=0) && (x_moving_position<8) && (y_moving_position>=0) && (y_moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=x_moving_position;
                queen.position.y=y_moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps NORTH-WEST: Current Position - ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        case 'SE':
        {
            let x_moving_position=parseInt(queen.position.x)+parseInt(steps);
            let y_moving_position=parseInt(queen.position.y)+parseInt(steps);

            if((x_moving_position>=0) && (x_moving_position<8) && (y_moving_position>=0) && (y_moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=x_moving_position;
                queen.position.y=y_moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " steps SOUTH-EAST: Current Position - ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        case 'SW':
        {
            let x_moving_position=parseInt(queen.position.x)+parseInt(steps);
            let y_moving_position=parseInt(queen.position.y)-parseInt(steps);

            if((x_moving_position>=0) && (x_moving_position<8) && (y_moving_position>=0) && (y_moving_position<8))
            {
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div>";
                queen.position.x=x_moving_position;
                queen.position.y=y_moving_position;
                document.getElementById(board[queen.position.x][queen.position.y]).innerHTML="<div>"+board[queen.position.x][queen.position.y]+"</div><img src=\"queen.png\" width=\"110px\" height=\"90px\">";
                console.log("Queen Position moved " + steps + " SOUTH-WEST: Current Position - ",board[queen.position.x][queen.position.y]);

            }
            else
            {
                alert("Boundary_Outside");
            }
            break;
        }
        default:
            alert("Enter valid direction");
            break;
    }
}