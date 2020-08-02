$(document).ready( function() {
 
    $("div.paint").each( function(i) {
     $(this).append("<img class='img-fluid img-thumbnail' src='images/painting/"+(++i)+".jpg' style='width:400px'/>");	
    }),
    $("div.logo").each( function(i) {
        $(this).append("<img class='img-fluid img-thumbnail' src='images/logo/"+(++i)+".png' style='width:37em'/>");	
       });
   });