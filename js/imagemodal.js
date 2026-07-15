const images = document.querySelectorAll(".gallery__item img");
const imagesArray = Array.from(images);
let imgSrc;
let currentIndex;
let keydownHandler;

// get images src onclick
images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    currentIndex = index;
    //run modal function
    imgModal(imgSrc, currentIndex);
  });
});

//creating the modal
let imgModal = (src, index) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  newImage.setAttribute("class", "modal-img");
  
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  
  //creating navigation buttons
  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fas fa-chevron-left prevBtn");
  
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fas fa-chevron-right nextBtn");
  
  //navigation function
  const navigate = (direction) => {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % imagesArray.length;
    } else {
      currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    }
    newImage.src = imagesArray[currentIndex].src;
  };
  
  //navigation button click handlers
  prevBtn.onclick = (e) => {
    e.stopPropagation();
    navigate('prev');
  };
  
  nextBtn.onclick = (e) => {
    e.stopPropagation();
    navigate('next');
  };
  
  //keyboard navigation
  keydownHandler = (e) => {
    if (e.key === 'ArrowLeft') {
      navigate('prev');
    } else if (e.key === 'ArrowRight') {
      navigate('next');
    } else if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', keydownHandler);
    }
  };
  document.addEventListener('keydown', keydownHandler);
  
  //close function
  closeBtn.onclick = () => {
    modal.remove();
    document.removeEventListener('keydown', keydownHandler);
  };
  
  modal.onclick = () => {
    modal.remove();
    document.removeEventListener('keydown', keydownHandler);
  };
  
  modal.append(newImage, closeBtn, prevBtn, nextBtn);
};
