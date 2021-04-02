var i = 0;
var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
var time = 2000;

function changeImg(){
    document.slide.src = images[i]; // on a donner à notre tableau la src de l'image 0
    if (i < images.length - 1){
        i++
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;