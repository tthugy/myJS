const images = [ "bg01.jpeg", "bg02.jpeg", "bg03.jpeg" ];

const selectImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector(".inner_cont img");

bgImage.src = `img/${selectImg}`;

bgImage.classList.add("bgImage");

// innerCont.appendChild(bgImage);