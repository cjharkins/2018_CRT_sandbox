function generateStockList(){
	var html = `
        <div id="flat" data-stock="flat" class="wrapper ml-2 mb-2">
          <div class="content">
            <div class="row justify-content-center">
              <div class="product-img mt-4">
                <img src="images/FLAT.jpg" class="img-fluid img-scale">
              </div>
            </div>
            <div class="row justify-content-center">
              <h5>FLAT</h5>
            </div>
          </div>
        </div>
        <div id="sbs" data-stock="sbs" class="wrapper ml-2 mb-2">
          <div class="content ">
            <div class="row justify-content-center">
              <div class="product-img mt-4">
                <img src="images/SBS.jpg" class="img-fluid img-scale">                
              </div>
            </div>
              <div class="row justify-content-center">
                <h5>SBS</h5>
              </div>
          </div>
        </div>
        <div data-stock="flute" class="wrapper ml-2 mb-2">
          <div class="content">
            <div class="row justify-content-center">
              <div class="product-img mt-4">
                <img src="images/FLUTE.jpg" class="img-fluid img-scale">
              </div>
            </div>
              <div class="row justify-content-center">
                <h5>FLUTE</h5>
              </div>
          </div>
        </div>
        <div data-stock="turned-edge" class="wrapper ml-2 mb-2">
          <div class="content">
            <div class="row justify-content-center">
              <div class="product-img mt-4">
                <img src="images/TURNEDEDGE.jpg" class="img-fluid img-scale">                
              </div>
            </div>
              <div class="row justify-content-center">
                <h5>TURNED-EDGE</h5>
              </div>
          </div>
        </div>
	`;
	return container.innerHTML  = html;

}