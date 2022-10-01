function convertImgUrlToBase64(image) {
  fetch(image)
    .then((res) => res.blob())
    .then((blob) => {
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        return fileLoadedEvent.target.result; // <--- data: base64
      };
      fileReader.readAsDataURL(blob);
    });
}

export default {
  convertImgUrlToBase64,
};
