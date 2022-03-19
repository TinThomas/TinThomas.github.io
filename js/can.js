const images = ['/Images/canframe1.png', '/Images/canframe2.png', '/Images/canframe3.png', '/Images/canframe4.png', '/Images/canframe5.png'];

let counter = 0;

setInterval(changeImage, 1800000);

function changeImage () {
  console.log('loop');

  document.getElementById('can').src = images[counter];
  console.log(images[counter]);
  if (counter === (images.length - 1)) {
    counter = 0;
  } else { counter++; }
  console.log(counter);
}
