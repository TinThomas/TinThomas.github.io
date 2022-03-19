let numberOfFlowers = localStorage.getItem("numberOfFlowers");
console.log(numberOfFlowers);

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