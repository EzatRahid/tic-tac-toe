let cells = document.querySelectorAll('.cell')
let statusText = document.querySelector('#statusText')
let restartBtn = document.querySelector('#restart')


let currentPlayer = 'X'

cells.forEach(cell =>{
    cell.addEventListener('click',()=>{
        if(cell.innerHTML === ''){
            cell.innerHTML = currentPlayer
           if(currentPlayer === 'X'){
            currentPlayer ='O'
           }else if(currentPlayer === 'O'){
            currentPlayer = 'X'
           }
           checkWin();
        }
    })
})


const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]



const checkWin = () =>{
    for(const condition of winConditions){
        const [a,b,c] = condition

        const cellA = cells[a].innerHTML
        const cellB = cells[b].innerHTML
        const cellC = cells[c].innerHTML

        if(cellA && cellA === cellB && cellA === cellC ){
            statusText.innerHTML = `Player ${cellA}`
            return;
        }

    }
}

let cellsFilled = true

cells.forEach(cell =>{
    if(cell.innerHTML === ''){
        cellsFilled = false
    }
})

if(cellsFilled === false){
    statusText.innerHTML = `Game is draw!`
}
// let options = ['','','','','','','','','','','']

// let currentPlayer = 'X'
// let running = false

// initializeGame()
// cellClicked();
// updateCell()

// const initializeGame= () =>{
//     cells.forEach(cell => cell.addEventListener('click',cellClicked ))
//     restartBtn.addEventListener('click',restartGame)
//     statusText.innerHTML = `${currentPlayer}'s turn`
//     running = true
// }


// function cellClicked(){
//     const cellIndex = this.getAttribute('cellIndex')

//     if(options[cellIndex !== '' || !running]){
//         return
//     }else{
//         updateCell(this,cellIndex);
//         checkWinner();
//     }
// }

// const updateCell = (cell,index) =>{
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer
// }