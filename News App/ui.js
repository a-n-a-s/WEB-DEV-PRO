class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London";
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto text-center mt-5 w-25 bg-danger" >
              <div class="card-body justify-content-center w-100">
                  <h1 class="card-title mb-5">${data.name},${data.sys.country}</h1>
                  <img src = "${data.weather[0].main}.png">
                  <h3>${Math.round(((data.main.temp)-32)**(5/9))}&deg;C</h3>
                  <h4 class="card-subtitle my-2 font-weight-bold text-lg-center">Max ${Math.round(((data.main.temp_max)-32)**(5/9))}&deg;C | Min ${Math.round(((data.main.temp_min)-32)**(5/9))}&deg;C</h4>
                  <h4 class="card-text text-center text-uppercase "> ${data.weather[0].description}</h4>
                  
              </div>
          </div>
          
          
          `;
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }