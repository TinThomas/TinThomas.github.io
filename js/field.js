let numberOfFlowers = localStorage.getItem("numberOfFlowers");
if(numberOfFlowers == null){
    numberOfFlowers = 0;
}
console.log(numberOfFlowers);
let text = document.getElementById("flowertext");


text.innerText = "You planted: " + numberOfFlowers + " flowers"; 
if(numberOfFlowers == 1){
    text.innerText = "You planted: " + numberOfFlowers + " flower";
}

function insertFlower(){
    var flowerobject = document.getElementById("flower"); 
    var flowerarea = document.getElementById("fieldbox");
    var clonedFlower = flowerobject.cloneNode(true);
    flowerarea.appendChild(clonedFlower);
    console.log("cloned");
}

for(var i = 0; i < numberOfFlowers; i++){
    insertFlower();
}


