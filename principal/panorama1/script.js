var panorama, panorama2, viewer, container, infospot; 

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'estacion.png' );
panorama2 = new PANOLENS.ImagePanorama( 'estacion.png' );

infospot = new PANOLENS.Infospot(  1700, "../img/puntos_panoramas/isla.png" );
infospot.position.set( 5000, -400, 500);
infospot.addHoverText( '1. Isla' );

infospot2 = new PANOLENS.Infospot( 750, "../img/puntos_panoramas/surtidor.png", {autoHideInfospot: false});
infospot2.position.set( 2000, -500, 1300 );
infospot2.addHoverText( '2. surtidor' );
infospot2.visible = false;

viewer = new PANOLENS.Viewer({
	autoHideInfospot: false	// Auto hide infospots
});


infospot.addEventListener( 'click', function(){	
	show();
	isla();
	
	
} );


infospot2.addEventListener( 'click', function(){	
	surtidor();
} );

panorama.add( infospot, infospot2 );

infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( 2999, -500, -5000 );
infospot.addHoverText( "" );
infospot.addEventListener( 'click', function(){
	culo2();

	// _enviarAlPadre();
  // window.open("https://www.hslu.ch","_blank");
} );

panorama2.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){
  
});


function show() {

            infospot2.visible = true;

        }