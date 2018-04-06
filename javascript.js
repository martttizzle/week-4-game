$(document).ready(function () {
     var a;
     
     document.getElementById("jedi").addEventListener("click",  jediSelected) = a; 
     document.getElementById("jedi1").addEventListener("click", jedi1Selected);
     document.getElementById("sith").addEventListener("click",  sithSelected);
     document.getElementById("sith1").addEventListener("click", sith1Selected);

     if(a){
         alert("yea");
     }
   

    function jediSelected() {       
    }

    function jedi1Selected() {       
         $("#jedi1").addClass("jedi1NC");
        
    }
    function sithSelected() {       
        
        $("#sith").addClass("jediNC");
        
    }
    function sith1Selected() {       
        
         $("#sith1").addClass("jedi2NC");
        
     }
 
    
       
       //.css("border", "dashed 8px darkgreen");
       
        // $(button).html("<button type='button'>ATTACK</button>");
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
