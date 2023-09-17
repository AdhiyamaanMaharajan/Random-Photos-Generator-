const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", ()=>{
    imageNumber = 10
    addNewImage();

});

function addNewImage(){
   for (let index = 0; index < imageNumber ; index++) {
    const newImage = document.createElement("img");

    newImage.src = (`https://picsum.photos/300?random=
    ${Math.floor(Math.random()*1000)}`);

    imageContainerEl.appendChild(newImage);
  
    
   }
}
  