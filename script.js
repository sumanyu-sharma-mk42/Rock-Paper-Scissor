const image = document.createElement("img");
const div = document.querySelector(".comp");


function computerplay(){
    let x = Math.floor(Math.random()*3);
    
    switch(x){
        case 0:
            image.src = "c:\\Users\\Acer\\Pictures\\Screenshots\\Screenshot 2024-04-03 012750.png";
            div.appendChild(image);
            return 'rock';
        case 1:
            image.src = "c:\\Users\\Acer\\Pictures\\Screenshots\\Screenshot 2024-04-03 012804.png";
            div.appendChild(image);
            return 'paper';
        case 2:
            image.src = "c:\\Users\\Acer\\Pictures\\Screenshots\\Screenshot 2024-04-03 012810.png";
            div.appendChild(image);
            return 'scissor';
        default:
            break;
    }

}

function playround(c,p){
    if(c=='rock'&&p=='rock' || c=='paper'&&p=='paper' || c=='scissor'&&p=='scissor') return 'it\'s a tie';
    else if(c=='rock'){
        if(p=='paper') return 'player wins';
        else return 'computer wins';
    }
    else if(c=='paper'){
        if(p=='rock') return 'computer wins';
        else return 'player wins';
    }
    else{
        if(p=='rock') return 'player wins';
        else return 'computer wins';
    }
}

const opt = document.querySelector(".select");
const result = document.querySelector(".result");
let round_win;
opt.addEventListener("click",(e)=>{
    let x = e.target;
    switch(x.id){
        case "rock":
            let ding = new Audio("C:\\Users\\Acer\\Desktop\\web dev\\rock.mp3");
	        ding.play();
            round_win = playround(computerplay(),"rock");
            break;
        case "paper":
            let ding2 = new Audio("C:\\Users\\Acer\\Desktop\\web dev\\paper.mp3");
	        ding2.play();
            round_win = playround(computerplay(),"paper");
            break;
        case "scissor":
            let ding3 = new Audio("C:\\Users\\Acer\\Desktop\\web dev\\scissor.mp3");
	        ding3.play();
            round_win = playround(computerplay(),"scissor");
            break;
        default:
            break;
    }
    result.textContent = round_win;
});

console.log(document.body);


/* let cont = document.querySelector(".select").firstElementChild;
console.log(cont);
cont.style.backgroundColor = "red";
cont.nextElementSibling.style.backgroundColor="green";
cont = document.querySelector(".select").lastElementChild;
cont.style.backgroundColor = "blue";
console.log(cont); */



