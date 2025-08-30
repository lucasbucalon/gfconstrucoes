let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#banner img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

let time1 = 5000,
    currentImageIndex1 = 0,
    images1 = document.querySelectorAll("#slider img")
    max1 = images1.length;

function nextImagea() {

    images1[currentImageIndex1]
        .classList.remove("selected")

    currentImageIndex1++

    if(currentImageIndex1 >= max1)
        currentImageIndex1 = 0

    images1[currentImageIndex1]
        .classList.add("selected")
}

function starta() {
    setInterval(() => {
        // troca de image
        nextImagea()
    }, time1)
}

window.addEventListener("load", starta)