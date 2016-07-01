
$(document).ready(function(){
		$('.main-bar').click(function(){
			$('.main-bar').toggleClass('rotar');
			$('.main').toggleClass('abrir');
		});
		$('button').click(function(){
			
			var title = $('#namemovie').val();
			alert(title);
			$('.name').text(title);
			
			$.ajax({
				url:"http://www.omdbapi.com/?t='"+title+"&y=&plot=short&r=json",
				dataType:"json",
				success:function(obj){
//					var movie = [];
//					movie=response;
					var titulo = obj.Title;
					var resumen = obj.Plot;
					var poster = obj.Poster;
					
					$('.name').text(titulo);
					$('.poster').attr('src',poster);
					$('.plot').text(resumen);
					console.log(obj.Title + "\n"+ obj.Plot);
				}
			})
			
		});

	
});