const p1 = {
    score :0,
    button: document.querySelector("#p1btn"),
    display: document.querySelector("#p1Dis")
}

const p2 = {
    score :0,
    button: document.querySelector("#p2btn"),
    display: document.querySelector("#p2Dis")
}


const resetbtn = document.querySelector("#rsbtn");
const bet = document.querySelector('#betSl');


let winScore = 3;
let isGameOver = false;


function updateScores(player,opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disable = true;
            opponent.button.disable = true;
    }
        player.display.textContent = player.score;
    }

}

p1.button.addEventListener('click', ()=>{
    updateScores(p1,p2)
})

p2.button.addEventListener('click', ()=>{
    updateScores(p2,p1)
})

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disable = false;
    }
}

resetbtn.addEventListener('click', reset)

bet.addEventListener('change', function() {
    winScore = parseInt(this.value); // 'this' refers to the select element here
    reset();
});


/*bet.addEventListener('change', (event) => {
    winScore = parseInt(event.target.value);
    reset();
});
with arrow function "this" does not refer to the element that triggered the event. 
 Instead, it refers to the outer context, which is not what I want here.*/


