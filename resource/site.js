	
$(function () {
    $(".include-nav").each (function () {
       $(this).load($(this).attr('file'), function(data){
				 $($(this).attr('active')).addClass("active");}
			 );		
     });
		
});
	
$(document).ready(function () {
		$(".include-file").each(function(){
				/*var inc=$(this);
			inc.load('nav.htm');
		
			$.get('nav.htm', function(data){
					var htmltags = (new XMLSerializer()).serializeToString(data);
					
					inc.replaceWith(htmltags);
			});
			*/
	});
});