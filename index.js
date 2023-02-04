const color = [ "Red" , "Blue" , "Green" , "Yellow" ];
const hex= ["A" , "B" , "C" , "D" , "E" , "F" , 1 , 2 , 3 , 4 , 5 , 7 , 8 , 9]
const btn = document.getElementById("clickMe");
const resetBtn = document.getElementById("resetButton");
const ColorName = document.getElementById("colorName");
const HexButton = document.getElementById("HexButton");

btn.addEventListener("click" , function(){
    let RandomNumber= Math.floor(Math.random() * 4); 
    document.body.style.backgroundColor = color[RandomNumber];
    ColorName.innerHTML = "    " +  color[RandomNumber];
})

resetBtn.addEventListener("click" , function(){
    ColorName.innerHTML = "White";
    document.body.style.backgroundColor = "white";
})

HexButton.addEventListener("click" , function(){
    let hexColor = "#"
    for(let i = 0 ; i < 6 ; i++){
    let RandomNumber = Math.floor(Math.random() * hex.length);
    hexColor += hex[RandomNumber];
    }
    ColorName.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})