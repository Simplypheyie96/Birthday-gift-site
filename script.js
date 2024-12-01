function preloadGifs() {
  const gifs = [
    "images/Happy-Lisa.gif",
    "images/omg-lisa.gif",
    "images/smart-lisa.gif",
    "images/badass-lisa.gif",
    "images/Cheers-bp.gif",
  ];

  gifs.forEach((gifUrl) => {
    const img = new Image();
    img.src = gifUrl;

    img.onload = () => {
      // Find the corresponding gift div and mark it as loaded
      const giftId = `gift-img-${gifUrl
        .split("/")
        .pop()
        .split("-")[0]
        .toLowerCase()}`;
      const giftDiv = document.getElementById(giftId);
      if (giftDiv) {
        giftDiv.classList.add("loaded");
      }
    };
  });
}

document.addEventListener("DOMContentLoaded", preloadGifs);
