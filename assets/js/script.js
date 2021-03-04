/*
fetch("http://api.openweathermap.org/data/2.5/weather?q=salt%20lake%20city&appid=59bf5c5c074ea67df6a177d56a2d3930")
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    console.log(icon);
  });

  function display() {
      document.appendChild(".icon", icon);
  }
  */
 