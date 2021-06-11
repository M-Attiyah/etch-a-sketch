

// ------------- create div element ----------
function createElement(numOfElement) {
    const getFullGrid = numOfElement * numOfElement;
    const gridArea = document.querySelector('.grid');

    for (let i = 0; i < getFullGrid; i++) {    
            gridArea.style.gridTemplateColumns = `repeat(${numOfElement}, 1fr)`,
            gridArea.style.gridTemplateRows = `repeat(${numOfElement}, 1fr)`  
            const div = document.createElement('div');
            gridArea.appendChild(div);
    }
}
// default value
createElement(30); // 30 grid
numOfGrids(30); // 30 num 



// ------------- remove old elements before add new elements
function removeOldElements() {
    const div = document.querySelectorAll('.grid div');
    div.forEach(d => {
        let parent = d.parentElement;
        parent.removeChild(d);
    })
}



// ---------------- clear All drawing ------------
function clearAll() {
    // declare clear all button
    const clearAllButton = document.querySelector('.container #clear-all');
    // when click 
    clearAllButton.addEventListener('click', e => {
        e.preventDefault();
        const div = document.querySelectorAll('.grid div');
        div.forEach(d => {
            d.style.transition = '.6s ease-in-out';
            d.style.backgroundColor = '#ffffff0f';
        })    
    })
} 
clearAll();


// loop over grid div 
function loopOverElements(color) {
    const div = document.querySelectorAll('.grid div');
    
    div.forEach(d => {
        d.addEventListener('mouseover', e => {
            d.style.transition = '.6s ease-in-out';
            d.style.backgroundColor = color;
        })
    })
}


// ----------------- color System ---------
const colorSystem = document.querySelector('.container #color-change input');
console.log(colorSystem.value);
function drawColor() {

    // default 
   loopOverElements('#fff');

    // change color 
    colorSystem.addEventListener('input', e => {
        loopOverElements(colorSystem.value)
    })
}
drawColor();



// ----------- change grid from input ----------
const changeGridForm = document.querySelector('#changeGridText form');
const addNumOfGrid = document.querySelector('#changeGridText form input[type=text]');

changeGridForm.addEventListener('submit', e => {
    e.preventDefault();
    
    // Call - removeOldElements Function
    removeOldElements();
    // Call - createElement Function 
    if (addNumOfGrid.value > 64) {
        alert('maximum number to add 64');
    } else {
        numOfGrids(addNumOfGrid.value);
        createElement(addNumOfGrid.value);
        drawColor();
        clearAll();
        eraser();
    }
    
});




// -------------- show / hide grid input -----------------
const changeGridButton = document.getElementById('change-grid');

changeGridButton.addEventListener('click', e => {
    e.preventDefault();

    const form = document.getElementById('changeGridText');

    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
})




// --------- get num of grids ---------
function numOfGrids(num) {
    const gridNum = document.querySelector('.container .gridNum');
    gridNum.textContent = num + ' * ' + num;
}