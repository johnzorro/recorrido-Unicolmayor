var panorama, panorama_video, viewer, container, infospot;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( '../../img/plaza.png' );
panorama_video = new PANOLENS.VideoPanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4' );

// panorama.link( panorama_video, new THREE.Vector3(4000, -300, -1500) );
panorama_video.link( panorama, new THREE.Vector3(4608.48, 1889.67, -375.46) );

infospot = new PANOLENS.Infospot(  400, "../../img/btn-info.png" );
infospot.position.set( 4700, -200, 300 );
infospot.addHoverText( 'Oficina de Soporte técnico' );

// infospot2 = new PANOLENS.Infospot2(  400, "../../img/btn-info.png" );
// infospot2.position.set( 2700, -100, 300 );
// infospot2.addHoverText( 'Auditorio ' );



panorama.add( infospot );
// panorama.add( infospot2 );

viewer = new PANOLENS.Viewer( { container: container, output: 'console' } );
viewer.add( panorama, panorama_video );



// // Cube custom item
// var cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
// cube.position.set(-300, 100, 100);
// viewer.addUpdateCallback(function(){
//   cube.rotation.y += 0.05;
//   cube.rotation.x += 0.02;
// });
// panorama.add( cube );

// var controlItemCube = {
//   style: {
//     backgroundImage: 'url(http://i40.tinypic.com/1531w79.jpg)'
//   },
  
//   onTap: function(){
//     viewer.tweenControlCenterByObject( cube );
//   }
// };
// viewer.appendControlItem(controlItemCube);

// // Wonder women custom item
// var posterInfospot = new PANOLENS.Infospot(2000, 'https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg');
// posterInfospot.position.set(-4774.9, 474.16, -1375.02);
// panorama.add(posterInfospot);

// var controlItemPoster = {
//   style: {
//     backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/31DcBWmTrNL._CR0,25,201,201.jpg)',
//     float: 'left'
//   },
  
//   onTap: function(){
//     posterInfospot.focus();
//   }
// };
// viewer.appendControlItem(controlItemPoster);

// Video control item
var controlItemVideoGroup = {
  style: {
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/91ovrqFkzkL._RI_SX200_.jpg)',
    float: 'left'
  },
  
  onTap: function(){
    viewer.setPanorama(panorama);
  },
  
  group: 'video'
};
viewer.appendControlItem(controlItemVideoGroup);


function goToPoint1(){
  infospot.focus();
  qwerty();
}