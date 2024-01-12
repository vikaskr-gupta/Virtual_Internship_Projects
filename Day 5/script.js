const images = [
    'Images/image1.jpg',
    'Images/image2.jpg',
    'Images/image3.jpg',
    // Add more image URLs as needed
  ];
  
  let currentIndex = 0;
  const totalImages = images.length;
  const currentImageElement = document.getElementById('currentImage');
  
  function changeImage(direction) {
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
  
    const imageUrl = images[currentIndex];
    currentImageElement.src = imageUrl;
  }
  
  // Initialize with the first image
  changeImage(0);
  