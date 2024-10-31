window.onload = function () {
  const messageForYa = document.querySelector('.messageForYa');
  const imageContainer = document.querySelector('.image-container');
  const nextButton = document.getElementById('next-Image');
  const previousButton = document.getElementById('previous-Image');
  const images = [
    'img/erik-mclean-AU7WQdbQTdU-unsplash.jpg',
    'img/ivan-mani-moveF1XvFoU-unsplash.jpg',
    'img/pexels-guy-kawasaki-783630-1654494.jpg',
    'img/pexels-mastercowley-897817.jpg',
    'img/valentin-lacoste-UGjaxpQnz8M-unsplash.jpg',
  ];
  const message = [
    'Waaw',
    'You',
    'Owe',
    'Me',
    'One',
    'Now',
    'I Guess',
    'eheheheheheheheh',
  ];
  imageContainer.innerHTML = `
    <div class="image-prev" style="background-image: url(${images[0]})"></div>
    <div class="image-main" style="background-image: url(${images[1]})"></div>
    <div class="image-next" style="background-image: url(${images[2]})"></div>
  `;
  let currentIndex = 1;
  let msgIndex = 0;

  nextButton.addEventListener('click', () => {
    nextImage();
  });

  previousButton.addEventListener('click', () => {
    previousImage();
  });

  function previousImage() {
    const mainImage =
      images[(currentIndex - 1 + images.length) % images.length];
    const prevImage =
      images[(currentIndex - 2 + images.length) % images.length];
    const nextImage = images[currentIndex % images.length];

    currentIndex = (currentIndex - 1 + images.length) % images.length;

    imageContainer.innerHTML = `
    <div class="image-prev" style="background-image: url(${prevImage})"></div>
    <div class="image-main" style="background-image: url(${mainImage})"></div>
    <div class="image-next" style="background-image: url(${nextImage})"></div>
  `;
  }

  function nextImage() {
    messageForYa.innerHTML = message[msgIndex % message.length];
    msgIndex = (msgIndex + 1) % message.length;
    const mainImage =
      images[(currentIndex + 1 + images.length) % images.length];
    const nextImage =
      images[(currentIndex + 2 + images.length) % images.length];
    const prevImage = images[currentIndex % images.length];

    currentIndex = (currentIndex + 1 + images.length) % images.length;

    imageContainer.innerHTML = `
    <div class="image-prev" style="background-image: url(${prevImage})"></div>
    <div class="image-main" style="background-image: url(${mainImage})"></div>
    <div class="image-next" style="background-image: url(${nextImage})"></div>
  `;
  }

  // add event listeners for next and previous buttons
  imageContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('image-prev')) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      renderImages();
    } else if (e.target.classList.contains('image-next')) {
      currentIndex = (currentIndex + 1) % images.length;
      renderImages();
    }
  });
};
