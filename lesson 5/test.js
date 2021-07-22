'use strict';
window.onload = fieldGenerator;

function fieldGenerator() {
    let initCell = document.getElementById('chess');

    for (let row = 0; row < 8; row++) {
        let trEl = document.createElement('tr')
        trEl.setAttribute('data-row', 8 - row);
        for (let col = 0; col < 8; col++) {
            var tdEl = document.createElement('td');
            if (row == 7) {
                tdEl.setAttribute('data-col', String.fromCharCode(65 + col));
            }
            if (row % 2 == col % 2) {
                tdEl.className = 'white';
            } else {
                tdEl.className = 'black';
            }

            trEl.appendChild(tdEl);
        }
        initCell.appendChild(trEl)
    }
}








// fieldGenerator();
// function fieldGenerator() {
//     const element = {
//         containerElement: null,
//         cellElement: [],

//         init() {
//             this.containerElement = document.getElementById('board');
//             this.initCells();
//         },

//         initCells() {
//             //element.containerElement.innerHTML = '';
//             this.cellElement = [];
//         }
//     };


//     for (let row = 0; row < 8; row++) {
//         const trEl = document.createElement('tr')
//         element.containerElement.appendChild(trEl);

//         for (let col = 0; col < 8; col++) {
//             const td = document.createElement('td');
//             trEl.appendChild(td);

//             element.cellElement.push(td);
//         }
//     }
// }

// Window.onload = fieldGenerator;