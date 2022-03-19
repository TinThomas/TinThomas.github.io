let numberOfFlowers = localStorage.getItem('numberOfFlowers');
if (numberOfFlowers == null) {
  numberOfFlowers = 0;
}
console.log(numberOfFlowers);
const text = document.getElementById('flowertext');

text.innerText = 'You planted: ' + numberOfFlowers + ' flowers';
if (numberOfFlowers == 1) {
  text.innerText = 'You planted: ' + numberOfFlowers + ' flower';
}

function insertFlower () {
  let flowerobject = document.querySelector('.flower');
  let flowerarea = document.getElementById('fieldbox');
  let clonedFlower = flowerobject.cloneNode(true);
  clonedFlower.style.display = 'block';
  flowerarea.appendChild(clonedFlower);
  console.log('cloned');
}

for (let i = 0; i < numberOfFlowers; i++) {
  insertFlower();
}
