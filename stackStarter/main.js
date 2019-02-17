console.log("Hello from the console")

$(document).ready(function () {

    $("#checkButton").hide();

    $("#clicker").on("click",function(){
        $("#clicker").text("YOU CLICKED NOW CHECK THE CONSOLE")
    })
    console.log(`You opened dev tools? Things are getting fancy. Welcome to data types!!

        ENter a variable called name into the console and set it to your name
            var name = "YOUR NAME"
        ENter a variable called years into the console and set it to the years you have been in your field
        ENter a variable called married and set it to true or false (without quotes)
        ENter a variable called favoites and set it to an array ["Bruins","Patriots","Sox","Celtics" ]

        Once you are done with this click on the cloud


    `)


    var name = "Justin";
    var age = 27;
    var married = false;
    var favorites = ["Patriots","Celtics","Bruins","Sox"]

    $("#cloudButton").on("click",function(){
        $("#cloudButton").hide();

        $("#checkButton").show();
        console.log(`I have already built one within the JS file

We can use the data types to manipupate things and our html page. How cool is that!!


Click on the new Red plane button to append your favoite teams to the page!!
        `)
    })

    $("#checkButton").on("click",function(){
        for (var i = 0; i < favorites.length; i++) {
            // This is how we go through an array of data 
            $("#favorites").append(`<li>${favorites[i]} are my favoite team!!</li>`)
        }
    })

    
});
