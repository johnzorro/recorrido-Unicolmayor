const panoImage = document.querySelector(".entrada-img");
const entradaPano = '../img/entrada.png';

const panorama = new PANOLENS.ImagePanorama(entradaPano);
console.log('hoal mundo');
const viewer = new PANOLENS.Viewer({   
    container: panoImage
});

viewer.add(panorama);


