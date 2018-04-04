function makeStyleDiv(die,name,desc,common,dim) {
	var html =`
		<div class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2">
			<a href="template_description.html">
				<div class="card-deck">
					<div class="card">
						<img class="card-img-top img-product-scale img-fluid" src="images/${die}.png" alt="Card image cap" />
					</div>
				</div>	
			</a>
		</div>
	`;

	return container.innerHTML += html;
}

function generateList(arr) {
	for (var i=0; i < boxStyles.length; i++) {
		console.log(boxStyles[i][0]);
		makeStyleDiv(boxStyles[i][0], boxStyles[i][1],boxStyles[i][2]);
	}
}