$(document).ready(function () {

    
    var button = $("#attack");

    //selecting the player
    $("#jedi, #jedi1, #sith, #sith1").on("click", function () {
        $(this).css("border", "dashed 8px darkgreen");

        $("#jedi1").addClass("jedi1NC");
        $("#sith").addClass("jediNC");
        $("#sith1").addClass("jedi2NC");
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



var people =[jedi,jedi1,sith,sith1];

var a   = people[3].firstName;
