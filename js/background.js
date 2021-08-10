const forbgImageloot = document.querySelector('.banner');

const images = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"
];

const randomBgImage = images[Math.floor(Math.random() * images.length)];

const divForBgImage = document.createElement('div');
divForBgImage.classList.add('bg');
const bgImage = document.createElement('img');
divForBgImage.append(bgImage);
divForBgImage.append(...forbgImageloot.childNodes);
forbgImageloot.append(divForBgImage);

bgImage.src = `./image/${randomBgImage}`;
bgImage.className = 'cover';
bgImage.alt = 'Travel';