
function generateDescription(die, name, desc, common, dim, stock) {
	var html = `
		<div id="productDescription" class="container mt-md-4 mt-0">
	      <div class="row justify-content-center mb-2">
	        <div class="col-12 col-sm-12 col-md-6">
	          <img class="img-fluid" src="images/IMG_2963.JPG" alt="">
	        </div>
	        <div class="col-12 col-md-4">
	          <h3>Product</h3>
	          <p>
	             <strong>Die Reference #:</strong>  12345
	          <br>
	             <strong>Common:</strong> Box
	          <br>
	             <strong>CRT, Custom Products, Inc.</strong>
	          </p>
	        </div>
	      </div>
	      <div class="row justify-content-center">
	        <div class="col-12 col-md-6">
	          <p><strong>Description:</strong> Content</p>
	          <p><strong>Board Weight:</strong> Content</p>
	          <p><strong>Finished Dimension:</strong> X x Y x Z</p>
	          <p><strong>Flat Dimension:</strong> X x Y</p>
	        </div>
	        <div class="col-12 col-md-4"></div>
	      </div>
	      <div class="row justify-content-center">
	        <div class="col-6">
	          <h4>Similar Products</h4>
	        </div>
	        <div class="col-6 col-md-4"></div>
	      </div>

	      <div class="row justify-content-center">
	      <div class="col-10">
	        <div class="row">

	         <div class="col-6 col-sm-6 col-md-4 col-lg-3 ">
	            <div class="card-deck">
	              <div class="card">
	                <img class="card-img-top img-product-scale img-fluid" src="images/IMG_3014.JPG" alt="Card image cap">
	                <div class="card-footer">
	                  <small class="text-muted"><a href="#">Product Title</a></small>
	                </div>
	              </div>
	            </div> 
	          </div>

	          <div class="col-6 col-sm-6 col-md-4 col-lg-3 ">
	            <div class="card-deck">
	              <div class="card">
	                <img class="card-img-top img-product-scale img-fluid" src="images/IMG_3001.JPG" alt="Card image cap">
	                <div class="card-footer">
	                  <small class="text-muted"><a href="#">Product Title</a></small>
	                </div>
	              </div>
	            </div> 
	          </div>

	          </div>
	        </div>
	      </div>
	    </div>
	`;
	return container.innerHTML += html;
}