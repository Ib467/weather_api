
$(document).ready(function(){

    console.log('connnected')
    $('form').submit(function(){
        var key = "2bafe775bc6346765d95500ee5e4d83b";
        //var key = "439d4b804bc8187953eb36d2a8c26a02"
        var appID = "";
        var userInput = $('input').val();
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`
        console.log(url)

        $.get(url, function (res){
            console.log(res) 
            // (293K − 273.15) × 9/5 + 32 = 67.73°F
            var kelvin = res.main.temp
            var far = Math.floor(1.8*(kelvin-273) + 32) 
            // var time = res.sys.sunrise.toTimeString()

            var html_str ='';
            html_str += `<h3> ${res.name}: ${res.weather[0].description} </h3>`
            html_str += `<h3> Temperature: ${far} &#8457;</h3>`
            html_str +=`<h3> Coordinates: Long: ${res.coord.lon}  and Lang: ${res.coord.lat}</h3>`
            // html_str +=`<h3> Sunrise  ${time}</h3>`

            $('.weather').html(html_str)


        })


        return false;
    });



})