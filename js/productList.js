function makeStyleDiv(die,name,desc,common,dim) {
	var html =`
		<div class="card-wrapper col-8 col-sm-6 col-md-4 col-lg-3 mb-2">
				<div class="card-deck">
					<div class="card">
						<img class="card-img-top img-product-scale img-fluid" src="images/${die}.png" alt="Card image cap" />
					</div>
				</div>	
		</div>
	`;

	return container.innerHTML += html;
}

function generateList(arr,data) {
	for (var i=0; i < boxStyles.length; i++) {
			makeStyleDiv(boxStyles[i][0], boxStyles[i][1],boxStyles[i][2]);
		}
}