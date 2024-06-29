
////////////////////////////////////////////////////////////////////////


// get the dom data from the html file
// first day
let f_day_name = document.querySelector(".f_day_name")
let f_day_month = document.querySelector(".f_day_month")
let cap =  document.querySelector(".capital");
let nowdeg = document.querySelector(".deg");
let semm = document.querySelector(".sem");
let winn = document.querySelector(".wind p");


// second day
let f_day_name1 = document.querySelector(".box1 h2")
let deg1 = document.querySelector(".body .big1");
let deg2 = document.querySelector(".body .small1");
let sem1 = document.querySelector(".box1 .sem1");

// third day
let f_day_name2 = document.querySelector(".box2 h2");
let degg1 = document.querySelector(".box2 .big2");
let degg2 = document.querySelector(".box2 .small2")
let sem2 = document.querySelector(".box2 .sem2");



// Array of month names
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Array of day names
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let datestr ;
let date ;

let datestr1 ;
let date1 ;

let datestr2 ;
let date2 ;

/////////////////////////////////////////////////////////////////
let temp;
let wind;
let tex;
let dayName;
let dayplusmonth;

let temp1max;
let temp1min;
let tex1;

let temp2max;
let temp2min;
let tex2
let x = "lond";

let region
// get capital

//handle the first start of the program 
let flag = true;


function call(){
    (async function (){
        let capitaltosearch ;
        if(flag){
            capitaltosearch = "cairo"
            flag = false;
        }
        else {
            capitaltosearch = document.querySelector("input").value
        }
        let get = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0001072969a8450e813214713242806&q=${capitaltosearch}&days=3`);
        let res = await get.json();
        console.log(res);
        // the region
        region = res.location.name;
        cap.innerHTML = region;
        console.log(region);
        //first day
        temp = res.current.temp_c
        nowdeg.innerHTML = temp + "°C"
        // console.log(temp);
        
        tex = res.current.condition.text
        semm.innerHTML = tex;
        wind = res.current.wind_kph
        winn.innerHTML = wind + "Km/h"
        ///////////////////////////////////////
        //handle the date of the first day
        datestr = res.forecast.forecastday[0].date
        date = new Date(datestr)
        console.log(date.getDate());
        // Get the month name
        let monthName = monthNames[date.getMonth()];
        console.log(monthName);
        //day + month 
         dayplusmonth = date.getDate() + monthName
        console.log(dayplusmonth);
        // Get the day name
         dayName = dayNames[date.getDay()];
        console.log(dayName);
        /////////////////////////////////////////////////////////////////////////
        //second day
        tex1 = res.forecast.forecastday[1].day.condition.text
        sem1.innerHTML = tex1;
        temp1max = res.forecast.forecastday[1].day.maxtemp_c
        deg1.innerHTML = temp1max + " °C";
        temp1min = res.forecast.forecastday[1].day.mintemp_c
        deg2.innerHTML = temp1min + " °C";

        // console.log(res.forecast.forecastday[1].date);
        //handle the date of the second day
        datestr1 = res.forecast.forecastday[1].date
        date1 = new Date(datestr1)
        console.log(date1.getDate());
        // Get the month name
        let monthName1 = monthNames[date1.getMonth()];
        console.log(monthName1);
        //day + month 
        let dayplusmonth1 = date1.getDate() + monthName1
        console.log(dayplusmonth1);
        // Get the day name
        let dayName1 = dayNames[date1.getDay()];
        f_day_name1.innerHTML = dayName1;
        console.log(dayName1);
        //theird day
        // console.log(res.forecast.forecastday[2]);
        temp2max = res.forecast.forecastday[2].day.maxtemp_c;
        degg1.innerHTML = temp2max + " °C";
        temp2min = res.forecast.forecastday[2].day.mintemp_c
        degg2.innerHTML = temp2min + " °C";
        tex2 = res.forecast.forecastday[2].day.condition.text
        sem2.innerHTML = tex2;
        // console.log(res.forecast.forecastday[2].date);
        //handle the date of the second day
        datestr2 = res.forecast.forecastday[2].date
        date2 = new Date(datestr2)
        console.log(date2.getDate());
        // Get the month name
        let monthName2 = monthNames[date2.getMonth()];
        console.log(monthName2);
        //day + month 
        let dayplusmonth2 = date2.getDate() + monthName2
        console.log(dayplusmonth2);
        // Get the day name
        let dayName2 = dayNames[date2.getDay()];
        console.log(dayName2);
        f_day_name2.innerHTML = dayName2;


        // eqality 
        f_day_name.innerHTML =  dayName;
        f_day_month.innerHTML = dayplusmonth;
        console.log(dayName);


        // handle the image 
        if(semm.innerHTML.toLocaleLowerCase() == "clear".toLocaleLowerCase()){
            document.querySelector(".img_first_day").setAttribute("src","./images/clear.png")
            console.log(document.querySelector(".img_first_day"));
            console.log(semm.innerHTML);
        }
        else if(semm.innerHTML.toLocaleLowerCase() == "Partly cloudy".toLocaleLowerCase()){
            document.querySelector(".img_first_day").setAttribute("src","./images/clouds.png")
        }
        else if(semm.innerHTML.toLocaleLowerCase() == "drizzle"){
            document.querySelector(".img_first_day").setAttribute("src","./images/drizzle.png")
        }
        else if(semm.innerHTML.toLocaleLowerCase() == "Patchy rain nearby".toLocaleLowerCase() || semm.innerHTML.toLocaleLowerCase() == "Moderate rain".toLocaleLowerCase()){
            document.querySelector(".img_first_day").setAttribute("src","./images/rain.png")
        }
        else if (semm.innerHTML.toLocaleLowerCase() == "Sunny".toLocaleLowerCase()){
            document.querySelector(".img_first_day").setAttribute("src","./images/mist.png")
        }

        if(sem1.innerHTML.toLocaleLowerCase() == "clear"){
            document.querySelector(".img_sec_day").setAttribute("src","./images/clear.png")
            console.log(document.querySelector(".img_sec_day"));
            console.log(sem1.innerHTML);
        }
        else if(sem1.innerHTML.toLocaleLowerCase() == "Partly cloudy".toLocaleLowerCase()){
            document.querySelector(".img_sec_day").setAttribute("src","./images/clouds.png")
        }
        else if(sem1.innerHTML.toLocaleLowerCase() == "drizzle"){
            document.querySelector(".img_sec_day").setAttribute("src","./images/drizzle.png")
        }
        else if(sem1.innerHTML.toLocaleLowerCase() == "Patchy rain nearby".toLocaleLowerCase() || semm.innerHTML.toLocaleLowerCase() == "Moderate rain".toLocaleLowerCase()){
            document.querySelector(".img_sec_day").setAttribute("src","./images/rain.png")
        }
        else if (sem1.innerHTML.toLocaleLowerCase() == "Sunny".toLocaleLowerCase()){
            document.querySelector(".img_sec_day").setAttribute("src","./images/mist.png")
        }

        if(sem2.innerHTML.toLocaleLowerCase() == "clear"){
            document.querySelector(".img_third_day").setAttribute("src","./images/clear.png")
            console.log(document.querySelector(".img_third_day"));
            console.log(sem2.innerHTML);
        }
        else if(sem2.innerHTML.toLocaleLowerCase() == "Partly cloudy".toLocaleLowerCase()){
            document.querySelector(".img_third_day").setAttribute("src","./images/clouds.png")
        }
        else if(sem2.innerHTML.toLocaleLowerCase() == "drizzle"){
            document.querySelector(".img_third_day").setAttribute("src","./images/drizzle.png")
        }
        else if(sem2.innerHTML.toLocaleLowerCase() == "Patchy rain nearby".toLocaleLowerCase() || semm.innerHTML.toLocaleLowerCase() == "Moderate rain".toLocaleLowerCase()){
            document.querySelector(".img_third_day").setAttribute("src","./images/rain.png")
        }
        else if (sem2.innerHTML.toLocaleLowerCase() == "Sunny".toLocaleLowerCase()){
            document.querySelector(".img_third_day").setAttribute("src","./images/mist.png")
        }

    })()
}
document.querySelector("input").addEventListener("keyup",e=>{
    call();
})

call();




















//http://api.weatherapi.com/v1/search.json?key=0001072969a8450e813214713242806&q=lond
// https://api.weatherapi.com/v1/current.json?key=0001072969a8450e813214713242806&q=Cairo
// https://api.weatherapi.com/v1/forecast.json?key=0001072969a8450e813214713242806&q=Cairo&days=1
// https://api.weatherapi.com/v1/forecast.json?key=0001072969a8450e813214713242806&q=Cairo&days=3

// make the logic of the design 
let icon = document.querySelector(".fa-solid")
let ul = document.querySelector(".nav ul")
icon.addEventListener("click",e=>{
    if(ul.classList.contains("up")){
        ul.classList.remove("up");
        ul.classList.add("down")
    }
    
    else {
        if(ul.classList.contains("down")){
            ul.classList.remove("down")
        }
        ul.classList.add("up")
    }
    console.log(ul);
})