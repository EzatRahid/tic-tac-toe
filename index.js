let cells = document.querySelectorAll('.cell')
let statusText = document.querySelector('#statusText')
let restartBtn = document.querySelector('#restart')


let currentPlayer = 'X'

const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

cells.forEach(cell =>{
    cell.addEventListener('click',()=>{
        cell.innerHTML = currentPlayer;
        if(currentPlayer ==='X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        checkWin();
    })
})

const checkWin = () =>{
    for(const condition of winConditions){
        const [a,b,c] = condition

        const cellA = cells[a].innerHTML
        const cellB = cells[b].innerHTML
        const cellC = cells[c].innerHTML

        if(cellA && cellA === cellB && cellA === cellC){
            statusText.innerHTML = `Player ${cellA} has won!`
        }
    }
    return;
}

let allCellsFilled = true

cells.forEach(cell =>{
    if(cell.innerHTML === ''){
        allCellsFilled =false
    }
})

if(!allCellsFilled){
    statusText.innerHTML = `GAME IS A DRAW!!! `
}
