
export default function preloadImages(pictures) {
    pictures.forEach(picture => {
        new Image().src = picture.fileName;
    });
}
