let links = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg']

let slider = document.querySelector('#slider')
const image = document.querySelector('#image')
const controlLeft = document.querySelector('#left')
const controlRight = document.querySelector('#right')

let i = 0

image.src = links[i];

controlRight.addEventListener('click', (e) => {
    e.preventDefault();
    i = (i - 1 + links.length) % links.length;
    image.src = links[i];
})

controlLeft.addEventListener('click', (e) => {
    e.preventDefault();
    i = (i - 1 + links.length) % links.length;
    image.src = links[i];
})


setInterval(() => {
    slider.textContent = links[i];
    i++;
    if (i == text.length) {
        i = 0
    }
    console.log(i)
}, 1000)