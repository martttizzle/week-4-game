$(document).ready(function () {

    
    var button = $("#attack");

    //selecting the player
    $("#jedi1, #jedi, #sith, #sith1").on("click", function () {
        $(this).css("border", "dashed 8px darkgreen");
        $("#jedi1").css("visibility", "hidden").css("position", "absolute").css("top", "140px").css("right", "455px").css("background-color", "red").css("visibility", "visible");
        $("#sith").css("visibility", "hidden").css("position", "absolute").css("top", "140px").css("right", "435px").css("background-color", "red").css("visibility", "visible");
        $("#sith1").css("visibility", "hidden").css("position", "absolute").css("top", "140px").css("right", "425px").css("background-color", "red").css("visibility", "visible");
        $(button).html("<button type='button'>ATTACK</button>");
    });



});

var jedi = {
    firstName: "Luke",
    lastName: "Skywalker",
    Health: 100,
    Damage: 10,
    location: $("#jedi"),
    

};
var jedi1 = {
    firstName: "Obi-Wan ",
    lastName: "Kenobi",
    Health: 100,
    Damage: 10,
    location: $("#jedi1"),
   

};
var sith = {
    firstName: "Darth",
    lastName: "Maul",
    Health: 100,
    Damage: 10,
    location: $("#sith")

};
var sith1 = {
    firstName: "Darth",
    lastName: "Vader",
    Health: 100,
    Damage: 10,
    location: $("sith1"),

};

alert(jedi.firstName);