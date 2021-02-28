
fetch("https://api.openweathermap.org/data/2.5/forecast?q={input.value}&appid=8142ee2395c021b19a84e0110a877948")

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});