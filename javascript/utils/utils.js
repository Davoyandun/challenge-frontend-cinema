export const createImag = (movie) => {
    const img = movie.primaryImage.url;
    const alternativeText = movie.primaryImage.caption.plainText;
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.alt = alternativeText;
    return imgElement;
  };