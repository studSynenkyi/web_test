$(".kvadrat").mouseenter( function(){
		$(".o").css("visibility", "visible")	
	}
);
$(".romb").mouseenter( function(){
		$(".o").animate({ 
			left: '0'
		}, 1000);
		$(".romb").animate(1000).addClass("loader");	
	}
);