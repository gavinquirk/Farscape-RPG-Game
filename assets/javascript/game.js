
                // BEGIN DOCUMENT READY
$(document).ready(function() {
                // BEGIN DOCUMENT READY


    // Global Variables
    var isHeroChosen = false
    var isEnemyChosen = false
    var heroChosen = "bob"
    var enemyChosen
    var chosenHero
    var chosenVill

    // Charactor Stats
    var charArr = [
        {
            name: "John Crichton",
            health: 100,
            attack: 50,
            image: "assets/images/crichton.jpg"
        },

        {
            name: "Ka D'Argo",
            health: 100,
            attack: 40,
            image: "assets/images/dargo.jpg"
        },
        {
            name: "Aaryn",
            health: 100,
            attack: 30,
            image: "assets/images/aaryn.jpg"
        },
        {
            name: "Chiana",
            health: 100,
            attack: 25,
            image: "assets/images/chiana.jpg"
        },
        {
            name: "Bialar Crais",
            health: 100,
            attack: 30,
            image: "assets/images/crais.jpg"
        },
        {
            name: "Scorpius",
            health: 100,
            attack: 40,
            image: "assets/images/scorpius.jpg"
        }
    ]

            //  BEGINNING OF FUNCTIONS

    // Hide Battle Container
    $("#battleContainer").hide()

    // Put characters into selection area
    for (i = 0; i < charArr.length; i++) {
        $("#charContainer").append(
            $("<div class='col-md-2 charDiv' value='"+i+"'><img class='border border-light rounded charIcon' src='"+charArr[i].image+"'></div>")
        )
    }



    // On click of charactor icon, 
    $(document).on("click", ".charDiv", function () {
        // Show Battle Container
        $("#battleContainer").show()

        // if no hero is chosen
        if (isHeroChosen === false) {
            // Set chosenHero to this choice
            chosenHero = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            isHeroChosen = true
            // Send hero information to screen
            var heroHealth = "Health: "+chosenHero.health+""
            $("#heroImage").html("<img id='bigImage' src='"+chosenHero.image+"'>")
            $("#heroName").html("Name: "+chosenHero.name+"")
            $("#heroHealth").html("Health: "+chosenHero.health+"")
            $("#heroAttack").html("Attack: "+chosenHero.attack+"")

            // $("#heroContainer").append("<div><p id='heroHealth'>"+heroHealth+"</p></div>")
        }
        // If no enemy is chosen, and choice is not the same as hero
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            // Set chosenEnemy to this choice
            chosenEnemy = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            isEnemyChosen = true
            // Send enemy information to screen
            $("#enemyImage").html("<img id='bigImage' src='"+chosenEnemy.image+"'>")
            $("#enemyName").html("Name: "+chosenEnemy.name+"")
            $("#enemyHealth").html("Health: "+chosenEnemy.health+"")
            $("#enemyAttack").html("Attack: "+chosenEnemy.attack+"")

            // var enemyHealth = "Health: "+chosenEnemy.health+""
            // $("#enemyContainer").append("<div><p id='enemyHealth'>"+enemyHealth+"</p></div>")
        }
    })

    // Fight Button Click Event
    $(document).on("click", "#fightButton", function () {
        console.log("Fight Button Pressed")
        console.log(chosenHero.name + " VS " + chosenEnemy.name)

        // If hero does not survive attack
        if (chosenHero.health <= chosenEnemy.attack) {
            // Health and attack calculations
            chosenHero.health = chosenHero.health - chosenEnemy.attack
            chosenEnemy.health = chosenEnemy.health - chosenHero.attack
            // Send information to screen
            $("#heroHealth").html("Health: "+chosenHero.health+"")
            $("#enemyHealth").html("Health: "+chosenEnemy.health+"") 
            alert("" +chosenEnemy.name+ " has defeated " +chosenHero.name+ ". Refresh the page to start again.")
   
        }
        // If enemy does not survive attack
        else if (chosenEnemy.health <= chosenHero.attack) {
            // Health and attack calculations
            chosenHero.health = chosenHero.health - chosenEnemy.attack
            chosenEnemy.health = chosenEnemy.health - chosenHero.attack
            // Send information to screen
            $("#heroHealth").html("Health: "+chosenHero.health+"")
            $("#enemyHealth").html("Health: "+chosenEnemy.health+"")
            alert("" +chosenHero.name+ " has defeated " +chosenEnemy.name+ ". Pick a new enemy to continue fighting.")
            chosenEnemy = null
            isEnemyChosen = false
        }
        else if (chosenHero.health > 0) {
            // Health and attack calculations
            chosenHero.health = chosenHero.health - chosenEnemy.attack
            chosenEnemy.health = chosenEnemy.health - chosenHero.attack
            // Send information to screen
            $("#heroHealth").html("Health: "+chosenHero.health+"")
            $("#enemyHealth").html("Health: "+chosenEnemy.health+"")
        }


    })




// END DOCUMENT READY
})
// END DOCUMENT READY