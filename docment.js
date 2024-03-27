

let ture = "x";
let title = document.querySelector(".title")
let boxs = []


function end(num1,num2,num3){
    title.innerHTML = `${boxs[1]} winer`
    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";



    setInterval(function(){title.innerHTML += "."},1000)
    setTimeout(function(){location.reload()},4000)
}



function game(id){
    let ele = document.getElementById(id)
    if(ture === "x" && ele.innerHTML == ""){
        ele.innerHTML = "X";
        ture = "o";
        title.innerHTML = "O"
    }
    else if(ture === "o" && ele.innerHTML == ""){
        ele.innerHTML = "O";
        ture = "x";
        title.innerHTML = "X"

    }
    winner()
}

function winner(){
    for(let i = 1; i < 10; i++){
        boxs[i]= document.getElementById("item" + i).innerHTML;
    }
    if(boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[1] != ""){
        end(1,2,3)
    }
    else if(boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[6] != ""){
        end(4,5,6)
    }
    else if(boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[9] != ""){
        end(7,8,9)
    }



    else if(boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[1] != ""){
        end(1,4,7)
    }
    else if(boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[9] != ""){
        end(2,5,8)
    }
    else if(boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[3] != ""){
        end(3,6,9)
    }



    else if(boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[1] != ""){
        end(1,5,9)
    }
    else if(boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[5] != ""){
        end(3,5,7)
    }
}





// function changeBackground() {
//     const  colors = [
//         "#33FF57", // Green
//         "#5733FF", // Blue
//         "#33FFCB", // Cyan
//         "#FFD700", // Gold
//         "#00FF00", // Lime
//         "#0000FF", // Blue
//         "#00FFFF", // Aqua
//         "#32CD32", // Lime Green
//         "#8A2BE2", // Blue Violet
//         "#20B2AA", // Light Sea Green
//         "#00FA9A", // Medium Spring Green
//         "#BA55D3", // Medium Orchid
//         "#1E90FF", // Dodger Blue
//         "#48D1CC", // Medium Turquoise
//         "#800080", // Purple
//         "#00CED1", // Dark Turquoise
//         "#7B68EE", // Medium Slate Blue
//         "#3CB371", // Medium Sea Green
//         "#9932CC", // Dark Orchid
//         "#00BFFF", // Deep Sky Blue
//         "#FF8C00", // Dark Orange
//         "#2E8B57", // Sea Green
//         "#FF69B4", // Hot Pink
//         "#FF6347", // Tomato
//         "#FF7F50", // Coral
//         "#FFA07A", // Light Salmon
//         "#FFFF00", // Yellow
//         "#8B008B", // Dark Magenta
//         "#00FF7F", // Spring Green
//         "#556B2F"  // Dark Olive Green
//       ];
//       ; // Array of colors
//     const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose a random color from the array
//     document.body.style.backgroundColor = randomColor; // Set the background color of the body
//   }
  
//   // Call the function initially
//   changeBackground();
  
//   // Set interval to call the function every 2 seconds
//   setInterval(changeBackground, 7000);
  
 
