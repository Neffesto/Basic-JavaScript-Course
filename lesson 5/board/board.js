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