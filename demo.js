// document.getElementById ("name").innerHTML = "Hotel Sunset Beach Club"
// document.getElementById ("location").innerHTML = "Benalmádena-Costa"
// document.getElementById ("img").src = "imgs/hotel.jpg"

// var starsInput = prompt ("¿Cuántas estrellas le da?")
// document.getElementById ("stars").innerHTML = starsInput + " estrellas"

// var anonymousInput = confirm ("¿Quiere que su reseña sea anónima?")
// document.getElementById ("checkbox").checked = anonymousInput

var hoteles = {
    SunsetBeach: {
        name: "Hotel Sunset Beach Club",
        location: "Benalmádena-Costa",
        img: "imgs/hotel.jpg"
    },
    Tritón: {
        name: "Hotel Best Tritón",
        location: "Puerto Marina",
        img: "imgs/hotel 02.jpg"
    }
};

var selectHotel = prompt("¿De qué hotel desea hacer la reseña?: SunsetBeach o Tritón");
document.getElementById("name").innerHTML = hoteles[selectHotel].name;
document.getElementById("location").innerHTML = hoteles[selectHotel].location;
document.getElementById("img").src = hoteles[selectHotel].img;

var quantityStars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var selectStars = prompt("¿Cuántas estrellas le da? de una a cinco");
document.getElementById("stars").innerHTML = quantityStars[selectStars];

var selectAnonymous = confirm ("¿Quiere que su reseña sea anónima?");
document.getElementById ("checkbox").checked = selectAnonymous;