const colorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C","D", "E", "F"];

const colors = getRandomColor();

const button = document.getElementById("btn");
const color = document.querySelector(".color");
button.addEventListener("click", function(){
    document.body.style.backgroundColor = getRandomColor();
    color.textContent = document.body.style.backgroundColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colorArray.length);
}

function getRandomColor() {
    let hexColor = "#";
    for (let count = 1; count <= 6; count++) {
        hexColor = hexColor + colorArray[getRandomNumber()];
    }
    console.log(hexColor);
    return hexColor;
}