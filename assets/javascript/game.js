// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {	

$("#picRow").show();

$(".restart").hide();
$(".attackButton").show();

// reset myChar and myDef to equal nothing.
var myChar = "";
var myDef = "";
// var YourCharacter;
// var YourDefender;


// reset health points.
characters.trey.healthPoints = 140;
characters.jerry.healthPoints = 150;
characters.mihali.healthPoints = 120;
characters.mayer.healthPoints = 130;

// reset attack power.
characters.trey.attackPower = 14;
characters.jerry.attackPower = 12;
characters.mihali.attackPower = 8;
characters.mayer.attackPower = 8;

// delete all in-game text.
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//writing each characters full name to the html so they show up on the page.
$(".namet").html(characters.trey.fullName);
$(".namej").html(characters.jerry.fullName);
$(".namem").html(characters.mihali.fullName);
$(".namema").html(characters.mayer.fullName);

//adding the picture for each character so they show up on the page.
$("#mih").appendTo("#picRow");
$("#may").appendTo("#picRow");
$("#jer").appendTo("#picRow");
$("#tre").appendTo("#picRow");

//writing each characters healthpoints to the html so they show up on the page.
$(".treyhp").html(characters.trey.healthPoints);
$(".jerryhp").html(characters.jerry.healthPoints);
$(".mihali").html(characters.mihali.healthPoints);
$(".mayer").html(characters.mayer.healthPoints);

// reset border colors. 
$(".firstRow").css({"background-color": "white", "outline-color": "limegreen", 
"border-width": "3px", "outline-style": "solid", "border-color": "white", "outline-width": "3px"});

};

// array to hold each characters stats.
var characters = { 

trey: {
    name: "trey",
    visual: 'assets/images/trey.jpg',
    healthPoints: 120,
    attackPower: 10,
    fullName: "Trey Anastasio",
    counterAttackPower: 18
    },

jerry:{
    name: "jerry",
    visual: 'assets/images/jerry.jpg',
    healthPoints: 120,
    attackPower: 12,
    fullName: "Jerry Garcia",
    counterAttackPower: 10
    },

mihali:{ 
    name: "mihali",
    visual: 'assets/images/mihali.jpg',
    healthPoints: 150,
    attackPower: 10,
    fullName: "Mihali Savoulidis",
    counterAttackPower: 14
    },

mayer:{ 
    name: "mayer",
    visual: 'assets/images/mayer.jpg',
    healthPoints: 150,
    attackPower: 8,
    fullName: "John Mayer",
    counterAttackPower: 14
    }
};


$(document).ready(function(){
reset();

// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attack".
$(".firstRow").click(function(){
        
   if (myChar == "") {
   // appends the chosen character to "Your Character"
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
   // if else statements that determine who is currently "Your Character" and assign
   // that person to the character array's properties. 
   if (YourCharacter == characters.trey.name) {
           attackerHP = characters.trey.healthPoints;
           attackerAP = characters.trey.attackPower;
           attackerCAP = characters.trey.counterAttackPower;
           attackerFN = characters.trey.fullName;
           attack = characters.trey;
   }
   else if (YourCharacter == characters.jerry.name){
           attackerHP = characters.jerry.healthPoints;
           attackerAP = characters.jerry.attackPower;
           attackerCAP = characters.jerry.counterAttackPower;
           attackerFN = characters.jerry.fullName;
           attack = characters.jerry;
   }
   else if (YourCharacter == characters.mihali.name){
           attackerHP = characters.mihali.healthPoints;
           attackerAP = characters.mihali.attackPower;
           attackerCAP = characters.mihali.counterAttackPower;
           attackerFN = characters.mihali.fullName;
           attack = characters.mihali;
   }
   else if (YourCharacter == characters.mayer.name){
           attackerHP = characters.mayer.healthPoints;
           attackerAP = characters.mayer.attackPower;
           attackerCAP = characters.mayer.counterAttackPower;
           attackerFN = characters.mayer.fullName;
           attack = characters.mayer;
   }
          
   // clones the three remaining characters to "Enemies available to attack" three separate divs.
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]).css("float: left");

       // Changes notMyChar CSS
       $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black",
           "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   // Clears the characters from the top.
   // $("#picRow").empty();
   $("#picRow").hide();
  
});

// When the player clicks on any of the characters in the "enemies available to attack" section, the game 
// determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
// characters remain in "enemies available to attack" section.     
$(".move").click(function(){

     // if (myDef === "") {
        // clones the chosen character to "Defender"
     // moves that character to the "Defender" section on the page.
     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();

 // }
     // if else statements that determine who is currently "Defender" and assign
   // that person to the character array's properties.
   if (YourDefender == characters.trey.name) {
           defenderHP = characters.trey.healthPoints;
           defenderAP = characters.trey.attackPower;
           defenderCAP = characters.trey.counterAttackPower;
           defenderFN = characters.trey.fullName;
           defend = characters.trey;
       
       }
       else if (YourDefender == characters.jerry.name){
           defenderHP = characters.jerry.healthPoints;
           defenderAP = characters.jerry.attackPower;
           defenderCAP = characters.jerry.counterAttackPower;
           defenderFN = characters.jerry.fullName;
           defend = characters.jerry;
           
   }
   else if (YourDefender == characters.mihali.name){
           defenderHP = characters.mihali.healthPoints;
           defenderAP = characters.mihali.attackPower;
           defenderCAP = characters.mihali.counterAttackPower;
           defenderFN = characters.mihali.fullName;
           defend = characters.mihali;
           
   }
   else if (YourDefender == characters.mayer.name){
           defenderHP = characters.mayer.healthPoints;
           defenderAP = characters.mayer.attackPower;
           defenderCAP = characters.mayer.counterAttackPower;
           defenderFN = characters.mayer.fullName;
           defend = characters.mayer;
           
   }


});


// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
// property of the "Defender".Their counter attack decreases your health.
$(".attackButton").click(function(){

     // if player clicks attack button and no one is in the "defender" div, then 
     // game says "no enemy here".
     if ($("#defender").children().length == 0) {
         $(".noEnemy").html("No enemy here.");
     }

     if (!(attackerHP < 1) || !(defenderHP < 1)) {

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the defendersCAP from the attackers HP.)
     attackerHP = (attackerHP - defenderCAP);
     
     // writing the attacker/Your Character's new healthpoints to the html. 
     $("." + YourCharacter).html(attackerHP);

     // writing the text "You attacked Luke Skywalker for 8 damage".
     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the attackers AP points from the defenders HP.)
     defenderHP = (defenderHP - attackerAP);

     // writing the text "Luke Skywalker attacked you back for 10 damage."
     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
    
    // write the defender's new healthpoints to the html.
    $("." + YourDefender).html(defenderHP);

 } 
     // if your character defeats the defender.
     if (defenderHP <= 0) {

         // clear text from the bottom and add defeated text.
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

         // remove defender from the page.
         $("#defender").empty();

         // Your Character's attack power goes up by 10. 
         console.log(attackerAP);
         attackerAP = (attackerAP + 10);

         // redefining "YourCharacter"'s attack power to equal the new value. 
         attack.attackPower = attackerAP;
         console.log(attackerAP);

     }
     
     // if all enemies have been defeated and the attacker still has health, then the player wins
     if ($(".move").children().length == 0){
      
      // clear out the other paragraphs and let user know they won.
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      // show the restart button. 
      $(".restart").show();

      // When you click "Restart" the game begins again. 
      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     // if your characters hp = 0 then you lose.
     if (attackerHP <= 0) {

         // show the restart button.
         $(".restart").show();

         // hide the attack button.
         $(".attackButton").hide();

         // You lose.
         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          // When you click "Restart" the game begins again. 
          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});


// The game remembers every time you attack and slowly increases your attack power. 
});