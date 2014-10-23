if (window.innerWidth && window.innerWidth <= 480) {
	$(document).ready(function(){
		$('#header ul').hide();
		$('button').on('click',function(){
			$('#header ul').slideToggle();
		})





	})



}