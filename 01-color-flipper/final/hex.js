const colorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C","D", "E", "F"];


const button = document.getElementById("btn");
const color = document.querySelector(".color");
button.addEventListener("click", function () {
    let hexColor = "#";
    for (let count = 0; count < 6; count++) {
        hexColor = hexColor + colorArray[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

    
function getRandomNumber() {
    return Math.floor(Math.random() * colorArray.length);
}
