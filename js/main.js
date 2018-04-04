$(document).ready(function(){
	var flat = document.getElementById('flat');
	var sbs = document.getElementById('sbs');
	var flute = document.getElementById('flute');
	var turnedEdge = document.getElementById('turned-edge');
	var container = document.getElementById('container');
	var cardContainer = document.getElementById('card-container');

	generateStockList();
	// generateList(boxStyles);
	// generateDescription(boxStyles);
	// $('#productDescription').hide();
	// $('.card-wrapper').hide();

	function filterProductData(data){
		for (var i=0; i < boxStyles.length; i++) {
			for(var j=0; j < boxStyles[i].length;j++) {
				if (boxStyles[i][j] === data) {
					console.log(data);
					console.log(boxStyles[i]);
					makeStyleDiv(boxStyles[i][0], boxStyles[i][1],boxStyles[i][2]);
				}			
			}
			
		}
	}

	$('.wrapper').click(function(){
		//Show illustrated mock-ups available in the stock chosen
		var data = this.dataset.stock;
		filterProductData(data);
		//Hide stock selection options
		$('.wrapper').toggle();

		//Event handler for product style chosen
		$('.card-wrapper').click(function(){
			//Hide product style list
			$('.card-wrapper').toggle();
			//Filter products that match style chosen
			generateDescription(boxStyles);
		});
	});

});

