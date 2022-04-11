let galleryImages = document.querySelectorAll(".gallery-img", "img-description");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(image, index) {
        image.onclick = function(){
        let getElementCss = window.getComputedStyle(image);
        let getFullImgUrl = getElementCss.getPropertyValue("background-image");
        let getImgUrlPos = getFullImgUrl.split("/ex01/images/");
        let setNewUrl = getImgUrlPos[1].replace('")', '');

        getLatestOpenedImg = index +1;

        let container = document.body;
        let newImgWindow = document.createElement("div");
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-window");
        newImgWindow.setAttribute("onclick", "closeImg()");

        let newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);
        newImg.setAttribute("src", "/ex01/images/" + setNewUrl)

    }
    })
}

function closeImg(){
    document.querySelector(".img-window").remove();
}


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img1");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }