const images = [ "bg01.jpeg", "bg02.jpeg", "bg03.jpeg" ];

const selectImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${selectImg}`;

document.body.appendChild(bgImage);