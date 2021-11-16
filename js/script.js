setInterval(SetTime, 5000)

SetTime()
function SetTime() {
    var d = new Date();
    var n = d.getTime();
    var h = d.getHours();
    var m = d.getMinutes();

    let time_of_day = ""

    if (h > 0) {
        time_of_day = "morning"
    }

    if (h > 12) {
        time_of_day = "afternoon"
    }

    if (h > 17) {
        time_of_day = "evening"
    }

    if (h > 12) {
        h = h - 12;
    }

    let introduction = document.querySelector("#introduction")
    introduction.innerHTML = "it's currently <span>" + m + "</span> minutes past <span>" + h + "</span> in the <span>" + time_of_day + "</span><i></i>";

    getATColour();

    function UnderscoreTimer() {
        if (document.querySelector("#introduction i").textContent = "") {
            document.querySelector("#introduction i").textContent = "_"
        } else {
            document.querySelector("#introduction i").textContent = ""
        }
    }
}

getLocation()
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
  
    let localUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=ea8837df503db1cc47357bc3289f366e&lat="+ latitude +"&lon="+ longitude +"&units=metric"
  
    $.ajax({
        url: localUrl,
        context: document.body
    }).done(function(content) {

        let temp =  content.main.temp
        $("#temp").text(Math.trunc(temp) + "°C")

        let location =  content.name
        localStorage.setItem("location", location)
        $("#location").text(location)

        let icon = document.querySelector("img#icon");
        icon.src = "http://openweathermap.org/img/wn/"+ content.weather[0].icon + ".png";
        $("#weather-area").append(icon); 

    });

    
}
/////////////////////////////////////////////////////ignore above

let nameLabel = document.querySelector("#name")

getName()

function getName(){
    let name = localStorage.getItem("name")

    if (name === null)
    {
        nameLabel.value = "[Enter Name]"
        
    } else
    {
        nameLabel.value = name
    }
}
function setName(){
    localStorage.setItem("name", nameLabel.value)
    getName()
}
nameLabel.addEventListener('blur', setName)

/////////////////////////////////////////////////////Colour
let BGColor = document.querySelector("#BG-Color")

getColour()
function getColour(){
    let BG = localStorage.getItem("Background-Color")

    if (BG === null)
    {
        //$("body").css("background-color", "red")
        
    } else
    {
        $("#Background-Color").attr("value", BG)
        $("body").css("background-color", BG)
        $(".grid-item .card").css("background-color", BG + "d1")
        $("#settingsmenu").css("background-color", BG + "f3")
        $(":root").css("--background", BG)
        
    }
}

function setColour(){
    localStorage.setItem("Background-Color", BGColor.value)
    getColour()
}
BGColor.addEventListener('blur', setColour)


//--------------------------------------------------
let FTColor = document.querySelector("#FT-Color")

getFTColour()
function getFTColour(){
    let FT = localStorage.getItem("Font-Color")

    if (FT === null)
    {
        //$("body").css("background-color", "red")
        
    } else
    {
        $("#FT-Color").attr("value", FT)
        $("body, #name").css("color", FT)
        $("#Category-Option").css("color", FT)
        $("a").css("color", FT + " !important")
        //$(".grid-item .card a").css("color", FT)
        $("input").css("color", FT + " !important")
        //$(".grid-item .card").css("color", FT + " !important")
        $(".item-dueDate").css("color", FT + " !important")
        $(":root").css("--font", FT)
        
    }
}

function setFTColour(){
    localStorage.setItem("Font-Color", FTColor.value)
    getFTColour()
}
FTColor.addEventListener('blur', setFTColour)

//--------------------------------------------------
let ATColor = document.querySelector("#AT-Color")

getATColour()
function getATColour(){
    let AT = localStorage.getItem("Accent-Color")

    if (AT === null)
    {
        //$("body").css("background-color", "red")
        
    } else
    {
        $("#AT-Color").attr("value", AT)
        $("#introduction span").css("color", AT)
        $("#Category-Option").css("border-color", AT)
        $("#todo .header").css("border-color", AT)
        //$("*").css("border-color", AT)
        $(":root").css("--accent", AT)
        $("html #sidebar .options .option:hover:after").css("background-color", AT + " !important")
    }
}

function setATColour(){
    localStorage.setItem("Accent-Color", ATColor.value)
    getATColour()
}
ATColor.addEventListener('blur', setATColour)

var categoryOption = $("#Category-Option")
$(categoryOption).val(localStorage.getItem("News-Category"))


$(categoryOption).change(function (e) { 
    callNews(categoryOption.val())
    localStorage.setItem("News-Category", categoryOption.val())
});

callNews(localStorage.getItem("News-Category"))
function callNews(category){

    var APIKEY = "ef57e1e514c34b3ea37e2f0e40bd41dd"
    var Url = "https://newsapi.org/v2/top-headlines?country=us&category=" + category + "&sortBy=popularity&apiKey=" + APIKEY

    //var APIKEY = 'qg72bVljFFc_839SxC3mvDgeDURX3TLueNYUyuk0Gqv_qxb_'
    //var Url = 'http://api.currentsapi.services/v1/category="' + category + '"'

    var newsArea = $("#news")
    $(newsArea).html("");

    $.ajax({
        url: Url,
        context: document.body
    }).done(function(content) {


        for (let i = 0; i < 8; i++) {
            
            var Title = content.articles[i].title
            var Link = content.articles[i].url
            var Image = content.articles[i].urlToImage
            var Source = content.articles[i].source.name

            

            var article = document.createElement("div")
            article.className = "grid-item"
            article.innerHTML = '<a href="'+Link+'"><div class="card"><img src="'+Image+'" alt=""><div class="bottom"><p class="title">'+Title+'</p><p class="source">'+Source+'</p></div></div></a>'
            
            newsArea.append(article)

        }

    });
}

$(".fa-search").click(function (e) { 
    
    var searchValue = $("#google-search").val()
    var Url = 'https://www.google.com/search?q='
    window.location.href = Url + searchValue;
});



$( ".loading" ).each(function( index ) {
    if( $(this).is(':empty') || $(this).text() == "" ){
        //debugger
        $(this).removeClass( "loading" )
      } else {
          
      }
  });
$("main").fadeIn(1000);
