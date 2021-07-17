let x = 100;

let array = [];
for (let i = 0; i < x + 1; i++) {
    array.push(i);
}

divisorNumberTwo()
function divisorNumberTwo() {
    let a = 4;
    while (a < x + 1) {
        delete array[a];
        a = a + 2;
    }
}

divisorNumberThree()
function divisorNumberThree() {
    let a = 6;
    while (a < x + 1) {
        delete array[a];
        a = a + 3;
    }
}

divisorNumberFive()
function divisorNumberFive() {
    let a = 10;
    while (a < x + 1) {
        delete array[a];
        a = a + 5;
    }
}

divisorNumberSeven()
function divisorNumberSeven() {
    let a = 14;
    while (a < x + 1) {
        delete array[a];
        a = a + 7;
    }
}


divisorNumberEleven()
function divisorNumberEleven() {
    let a = 22;
    while (a < x + 1) {
        delete array[a];
        a = a + 11;
    }
}

let selectingArr = array.filter(function (number) {
    return number > 0;
});
selectingArr.shift();
console.log(selectingArr);