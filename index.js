let cells = document.querySelectorAll('.cell')
let statusText = document.querySelector('#statusText')
let restartBtn = document.querySelector('#restart')




cells.forEach(cell =>{
    let node = document.createTextNode();

})
cells.addEventListener("click",(cell) =>{
    cell.innerHTML = 'X'
})
// const winConditions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
    
// ]

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