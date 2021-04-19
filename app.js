
let userScore = 0;
let compScore = 0;

let rounds = 0;

let round = document.querySelector("#round");
let temp = 10;

const back = document.querySelector(".score-board");

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const status = document.querySelector('.status');

const score_div = document.querySelector(".score-board")

const result_div = document.querySelector(".result");

const rockDiv = document.querySelector("#r");
const sciDiv = document.querySelector("#s");
const paperDiv = document.querySelector("#p");


const winningSounds = ["one","two","three","four","five","six"];
const loseSounds = ['seven','eight','nine','ten','eleven','twelve','thirteen','forteen'];
const playHappy = (index) =>{
    var Waudio = new Audio(`${winningSounds[index]}.mp3`);
    Waudio.play();
}
const playSad = (index) =>{
    
    var Laudio = new Audio(`${loseSounds[index]}.mp3`);
    Laudio.play();
}
const playDraw = new Audio("seven.mp3");

const userWin = () =>{
    userScore++;
    userScore_span.innerHTML = userScore;
    status.innerHTML = "Yayyyyyyiii!!!!";
    back.classList.add("green")
    setTimeout(()=>{
        back.classList.remove("green");
    },500);
}
const userLose = () =>{
    compScore++;
    compScore_span.innerHTML = compScore;
    status.innerHTML = "Ghaatttt!!!!";
    back.classList.add("red")
    setTimeout(()=>{
        back.classList.remove("red");
    },500);
}

const draw = () =>{
    status.innerHTML = "Aisha!!!";
    back.classList.add("yellow")
    setTimeout(()=>{
        back.classList.remove("yellow");
    },500);
}

const callOff = () =>{
    if(userScore > compScore){
        status.innerHTML = "You Win!! 🔥";
        playHappy(Math.floor(Math.random() * winningSounds.length));
    }else if(compScore > userScore){
        status.innerHTML = "You lose 💩";
        playSad(Math.floor(Math.random() * loseSounds.length));
    }else{
        status.innerHTML = "DRAW 😒";
        playDraw.play();
    }
    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;
    userScore = 0;
    compScore = 0;
    rounds = 0;
}

const getCompChoice = () =>{
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random() * choices.length)];
}
const game = (userchoice) =>{
    rounds++;
    const computerChoice = getCompChoice();
    switch(userchoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            userWin();
            break;
        case "rp":
        case "ps":
        case "sr":
            userLose();
            break;
        case "ss":
        case "rr":
        case "pp":
            draw();
            break;
        
    }
    if(rounds == 10){
        callOff();
    }
    round.innerHTML = temp-rounds;
}

const main = () =>{
    rockDiv.addEventListener("click",()=>{
        game("r");
    })
    sciDiv.addEventListener("click",()=>{
        game("s");
    })
    paperDiv.addEventListener("click",()=>{
        game("p");
    })    
}

main();
