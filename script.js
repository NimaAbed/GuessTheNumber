let randomNumber = ""
let chance = 0
let maxChance = 3
let choised = []
function selectRandomNumber() {
    randomNumber = Math.ceil(Math.random() * 10)
    console.log(randomNumber)
    // console.log(userChoise)
    document.querySelector(".guessSubmit").addEventListener("click", submit)
}

function userChance() {
    document.querySelector("p .chance").innerHTML = chance
    document.querySelector("p .maxChance").innerHTML = maxChance
}

function submit() {
    let userChoise = document.querySelector(".guessField")
    if (chance == maxChance) {
        userChoise.value = ""
        alert(`You Lose! Answer Is ${randomNumber}`)
        if (confirm("Do You Want Play Again")) {
            chance = 0
            choised = []
            selectRandomNumber()
            userChance()
        }
        return
    }
    if (choised.indexOf(userChoise.value) == -1) {
        choised.push(userChoise.value)
        if (userChoise.value == randomNumber) {
            alert("You Win")
            if (confirm("Do You Want Play Again")) {
                chance = 0
                choised = []
                selectRandomNumber()
                userChance()
            }
        } else {

            chance += 1

            alert(`You Wrong Is Not ${userChoise.value}`)
            userChance()
        }
    } else {
        alert(`You Choised ${userChoise.value}`)
    }
    userChoise.value = ""
}

selectRandomNumber()