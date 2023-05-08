const inputs=document.querySelectorAll(".panel input");
const c=document.querySelector("#celsius");
const f=document.querySelector("#fahrenheit");
const k=document.querySelector("#kelvin");

inputs.forEach(input => {
    input.addEventListener("input",e => {
        const unit = e.target.id;
        const v = parseInt(e.target.value);
        if(unit === "celsius") {
            f.value = parseFloat((v* 1.8) + 32).toFixed(4) * 1;
            k.value = parseFloat(v+ 273.15).toFixed(4) * 1;
        }
        else if(unit === "fahrenheit") {
            c.value = parseFloat((v-32)* 5/9).toFixed(4) *1;
            k.value = parseFloat(((v-32) * 5/9) + 273.15).toFixed(4) *1;
        }
        else if(unit === "kelvin") {
            c.value = parseFloat(v- 273.15).toFixed(4) * 1;
            f.value = parseFloat((v - 273.15) * 9/5 +32).toFixed(4) *1;
        }
    });

});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }