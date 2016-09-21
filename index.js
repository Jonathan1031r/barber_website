$(document).on("turbolinks:load", function (){
	$(".js-about-btn").on("click", function (event){
		showAboutModal()

		function showAboutModal (){
			$(".about-modal").modal("show")
		}
	})
});